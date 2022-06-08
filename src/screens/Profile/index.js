import BackButton from 'components/BackButton';
import React, {useContext, useState} from 'react';
import Icons from 'assets/icons';
import {SvgXml} from 'react-native-svg';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  TextInput,
} from 'react-native';
import styles from './styles';
import HeaderPage from 'components/Header';
import {AuthContext} from 'contexts/AuthProvider';
import userApi from 'api/user_api';
import {showToastWithGravityAndOffset} from 'helper/toast';

const ProfileScreen = ({navigation}) => {
  const {account, fetchUserInfo} = useContext(AuthContext);
  const [isEditable, setIsEditable] = useState(false);
  // console.log(navigation);
  const [formUser, setFormUser] = useState({
    fullname: account?.fullname,
    phone: account?.phone,
  });

  const submitUpdate = async () => {
    try {
      const response = await userApi.updateUserInfo(formUser);

      if (response.data.success) {
        showToastWithGravityAndOffset(response.data.message);
        setIsEditable(false);
        fetchUserInfo();
      }
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data) return error.response.data;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.title}>
        <TouchableOpacity style={{position: 'absolute', top: 0, left: -10}}>
          <HeaderPage returnPage={() => navigation.openDrawer()} />
        </TouchableOpacity>
        <Text style={styles.titleText}>Profile</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.textWrapper}>
          <View style={styles.profile}>
            <View style={styles.avatar}>
              <Image
                source={require('../../assets/images/Avatar.png')}
                style={styles.image}
              />
            </View>
          </View>

          <View style={styles.edit}>
            <Text style={styles.name}>{account?.fullname}</Text>
            {isEditable ? (
              <TouchableOpacity
                style={styles.editProfile}
                onPress={() => {
                  submitUpdate();
                }}>
                <Text style={{...styles.editProfileText, color: '#ff724c'}}>
                  Save Profile
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.editProfile}
                onPress={() => setIsEditable(true)}>
                <Text style={styles.editProfileText}>Edit Profile</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.Label}>E-mail</Text>
            <View style={styles.info}>
              <TextInput
                style={styles.infoText}
                value={account?.email}
                editable={isEditable}
              />
            </View>
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.Label}>Full name</Text>
            <View style={styles.info}>
              <TextInput
                style={{...styles.infoText}}
                editable={isEditable}
                value={formUser.fullname}
                onChangeText={text =>
                  setFormUser({...formUser, fullname: text})
                }
                autoFocus
              />
            </View>
          </View>

          <View style={styles.itemInfo}>
            <Text style={styles.Label}>Phone number</Text>
            <View style={styles.info}>
              <TextInput
                keyboardType="numeric"
                style={styles.infoText}
                value={formUser.phone}
                onChangeText={text => setFormUser({...formUser, phone: text})}
                editable={isEditable}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
