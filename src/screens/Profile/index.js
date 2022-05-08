import BackButton from 'components/BackButton';
import React from 'react';
import Icons from 'assets/icons';
import { SvgXml } from 'react-native-svg';
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

const ProfileScreen = ({navigation}) => {
  // console.log(navigation);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.title}>
        <BackButton style={styles.back} />
        <Text style={styles.titleText}>My Profile</Text>
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
            <Text style={styles.name}>Eljad Eendaz</Text>
            <TouchableOpacity
              style={styles.editProfile}
              onPress={() => navigation.navigate('EditProfileScreen')}>
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.itemInfo}>
            <Text style={styles.Label}>Full name</Text>
            <View style={styles.info}>
              <Text style={styles.infoText}>Eljad Eendaz</Text>
            </View>
          </View>

          <View style={styles.itemInfo}>
            <Text style={styles.Label}>E-mail</Text>
            <View style={styles.info}>
              <Text style={styles.infoText}>prelookstudio@gmail.com</Text>
            </View>
          </View>

          <View style={styles.itemInfo}>
            <Text style={styles.Label}>Phone number</Text>
            <View style={styles.info}>
              <Text style={styles.infoText}>+1 (783) 0986 8786</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
