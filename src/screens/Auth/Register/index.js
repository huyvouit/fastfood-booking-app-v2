/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
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

export default function Login() {
  const [page, setpage] = useState('');
  return (
    <View style={styles.main1}>
      <View style={styles.main2}>
        <RedComponent page={page} setpage={setpage} />
      </View>
      <View style={styles.main3}>
        {page === SignUp ? <GreenComponent /> : null}
      </View>
      <View style={styles.main4}>
        <BlueComponent />
      </View>
    </View>
  );
}
const RedComponent = ({page, setpage}) => {
  return (
    <View style={styles.red1}>
      <StatusBar barstyle="light-content" />
      <View style={styles.red2}>
        <View style={styles.red3}>
          <Text style={styles.red4}>FASTFOOD</Text>
        </View>
      </View>
      <View style={styles.red5}>
        <TouchableOpacity
          style={styles.red6}
          onPress={() => {
            setpage(SignIn);
          }}
          disabled={page === SignIn ? true : false}>
          <Text style={styles.red7}>Sign In</Text>
          {page === SignIn ? <View style={styles.red8}></View> : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.red9}
          onPress={() => {
            setpage(SignUp);
          }}
          disabled={page === SignUp ? true : false}>
          <Text style={styles.red10}>Sign Up</Text>
          {page === SignUp ? <View style={styles.red8}></View> : null}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const BlueComponent = () => {
  return (
    <View style={styles.bl1}>
      <View style={styles.bl2}>
        <View style={styles.bl3}></View>
        <Text>OR CONNECT WITH</Text>
        <View style={styles.bl4}></View>
      </View>
      <View style={styles.bl5}>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/google.png')}
            resizeMode="stretch"
            style={styles.bl6}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/fb.png')}
            resizeMode="stretch"
            style={styles.bl7}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
