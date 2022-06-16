/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Images from 'assets/images';
import HeaderPage from 'components/Header';
import {AuthContext} from 'contexts/AuthProvider';
import React, {useContext, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SignIn = 'SIGNIN';
const SignUp = 'SIGNUP';

export default function ForgotPasswordScreen({navigation}) {
  const [page, setpage] = useState('');

  return (
    <View style={styles.main1}>
      <View style={{position: 'absolute', top: 0, zIndex: 10}}>
        <HeaderPage returnPage={() => navigation.goBack()} />
      </View>
      <View style={{height: 300}}>
        <Image source={Images.Logo} />
      </View>
      <GreenComponent navigation={navigation} />
    </View>
  );
}

const GreenComponent = ({navigation}) => {
  const {forgotPassword} = useContext(AuthContext);

  const [email, setemail] = useState('');

  return (
    <View style={styles.gr1}>
      {/* Reset */}
      <Text style={styles.gr2}>FORGOT PASSWORD?</Text>
      {/* text */}
      <View style={styles.gr3}>
        <Text style={styles.gr4}>
          <Text style={styles.gr5}>
            Please enter your email address to request a password reset.{' '}
          </Text>
        </Text>
      </View>
      {/* Email */}
      <View style={styles.gr6}>
        <Image
          source={require('../../../assets/images/email.png')}
          resizeMode="stretch"
          style={styles.gr7}
        />
        <TextInput
          style={styles.gr8}
          autoCapitalize={null}
          placeholder="E-mail"
          value={email}
          onChangeText={text => setemail(text)}
        />
      </View>
      {/* Button*/}
      <TouchableOpacity
        style={styles.gr9}
        onPress={() => forgotPassword(email, () => navigation.goBack())}>
        <Text style={styles.gr10}>SEND REQUEST</Text>
      </TouchableOpacity>
    </View>
  );
};
