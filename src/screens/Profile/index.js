import BackButton from 'components/BackButton';
import React, {useContext} from 'react';
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
} from 'react-native';
import styles from './styles';
import HeaderPage from 'components/Header';
import {AuthContext} from 'contexts/AuthProvider';

const ProfileScreen = ({navigation}) => {
  const {account} = useContext(AuthContext);
  // console.log(navigation);
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
            <TouchableOpacity
              style={styles.editProfile}
              onPress={() => navigation.navigate('EditProfileScreen')}>
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.itemInfo}>
            <Text style={styles.Label}>Full name</Text>
            <View style={styles.info}>
              <Text style={styles.infoText}>{account?.fullname}</Text>
            </View>
          </View>

          <View style={styles.itemInfo}>
            <Text style={styles.Label}>E-mail</Text>
            <View style={styles.info}>
              <Text style={styles.infoText}>{account?.email}</Text>
            </View>
          </View>
          {account?.phone && (
            <View style={styles.itemInfo}>
              <Text style={styles.Label}>Phone number</Text>
              <View style={styles.info}>
                <Text style={styles.infoText}>{account?.phone}</Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
