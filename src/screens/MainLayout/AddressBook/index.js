import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Icons from 'assets/icons';
import {SvgXml} from 'react-native-svg';
import styles from './styles';
import BackButton from 'components/BackButton';
import HeaderPage from '../../../components/Header';
import userApi from 'api/user_api';
import {AuthContext} from 'contexts/AuthProvider';

const AddressBookScreen = ({navigation}) => {
  const [listAddress, setListAddress] = useState(null);
  const {account} = useContext(AuthContext);
  console.log('user', account);
  useEffect(() => {
    (async () => {
      try {
        const params = {
          userId: account?._id,
          currentPage: Number(1),
          addressPerPage: 5,
        };
        console.log(params);
        const res = await userApi.getAllAddress(params);
        console.log(res.data);
        if (res.data.success) {
          setListAddress(res.data.data);
        }
      } catch (error) {
        console.log('error to get address list', error);
      }
    })();
  }, []);
  console.log('lisrAddress', listAddress);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.title}>
        <TouchableOpacity style={{position: 'absolute', top: 0, left: -10}}>
          <HeaderPage
            returnPage={() => navigation.openDrawer()}
            // title={'Address Book'}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>{`Address Book`}</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.textWrapper}>
          {listAddress?.map((item, index) => {
            return (
              <View style={styles.address} key={index}>
                <View style={styles.info}>
                  <Text>{item?.username}</Text>
                  <Text>{item?.phone}</Text>
                  <Text>{`${item?.address.number}, ${item?.address?.street}, ${item?.address?.ward}, ${item?.address?.district}, ${item?.address?.province}`}</Text>
                </View>
              </View>
            );
          })}

          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => navigation.navigate('NewAddressScreen')}>
            <SvgXml
              xml={Icons.IconPlus}
              color="#FE724C"
              width={50}
              height={50}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddressBookScreen;
