import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  RefreshControl,
} from 'react-native';

import Icons from 'assets/icons';
import {SvgXml} from 'react-native-svg';
import styles from './styles';
import BackButton from 'components/BackButton';
import HeaderPage from '../../../components/Header';
import userApi from 'api/user_api';
import {AuthContext} from 'contexts/AuthProvider';
import {showToastWithGravityAndOffset} from 'helper/toast';

const AddressBookScreen = ({navigation}) => {
  const [listAddress, setListAddress] = useState(null);
  const {account, fetchUserInfo} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const fetchListAddress = async () => {
    setIsLoading(true);
    try {
      const params = {
        userId: account?._id,
        currentPage: Number(1),
        addressPerPage: 5,
      };

      const res = await userApi.getAllAddress(params);

      if (res.data.success) {
        setListAddress(res.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log('error to get address list', error);
      setIsLoading(false);
    }
  };
  const handleAddDefaultAddress = async info => {
    try {
      const body = {
        userId: account?._id,
        addressId: info._id,
      };

      const res = await userApi.getDefaultAddress(body);

      if (res.data.success) {
        // await fetchListAddress();
        await fetchUserInfo();
        showToastWithGravityAndOffset(res.data.message);
      }
    } catch (error) {
      console.log(error);
      showToastWithGravityAndOffset(error.response.data.message);
    }
  };

  const handleDeleteAddress = async info => {
    try {
      const body = {
        userId: account?._id,
        addressId: info._id,
      };

      const res = await userApi.deleteAddress(body);

      if (res.data.success) {
        await fetchListAddress();
        await fetchUserInfo();
        showToastWithGravityAndOffset(res.data.message);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      showToastWithGravityAndOffset(error.response.data.message);
      setIsLoading(false);
    }
  };
  const onRefresh = async () => {
    await fetchListAddress();
  };
  useEffect(() => {
    fetchListAddress();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchListAddress();
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.title}>
        <HeaderPage
          returnPage={() => navigation.openDrawer()}
          title="Address"
        />
      </View>
      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }>
        <View style={styles.textWrapper}>
          {listAddress?.map((item, index) => {
            return (
              <View style={styles.address} key={index}>
                <View style={styles.icons}>
                  {account?.defaultAddress?._id == item?._id ? (
                    <TouchableOpacity onPress={() => console.log('run')}>
                      <SvgXml
                        xml={Icons.IconUnPin}
                        color="#f55555"
                        width={20}
                        height={20}
                      />
                    </TouchableOpacity>
                  ) : (
                    // <Text>ddf</Text>
                    <TouchableOpacity
                      onPress={() => handleAddDefaultAddress(item)}>
                      <SvgXml
                        xml={Icons.IconPin}
                        color="#000"
                        width={20}
                        height={20}
                      />
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity
                    style={{marginLeft: 5}}
                    onPress={() =>
                      navigation.navigate('EditProfileScreen', {
                        info: item,
                      })
                    }>
                    <SvgXml
                      xml={Icons.IconEdit}
                      color="#000"
                      width={20}
                      height={20}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{marginLeft: 5}}
                    onPress={() => handleDeleteAddress(item)}>
                    <SvgXml
                      xml={Icons.IconTrash}
                      color="#000"
                      width={20}
                      height={20}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.info}>
                  <Text style={styles.infoUser}>{item?.username}</Text>
                  <Text style={styles.infoUser}>{item?.phone}</Text>
                  <Text
                    style={
                      styles.infoUser
                    }>{`${item?.address.number}, ${item?.address?.street}, ${item?.address?.ward}, ${item?.address?.district}, ${item?.address?.province}`}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.buttonAdd}
        onPress={() => navigation.navigate('NewAddressScreen')}>
        <SvgXml xml={Icons.IconPlus} color="#fff" width={50} height={50} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddressBookScreen;
