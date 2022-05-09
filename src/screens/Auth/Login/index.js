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

export default function LoginScreen({navigation}) {
  const [page, setpage] = useState(SignIn);
  return (
    <View style={styles.main1}>
      <View style={styles.main2}>
        <RedComponent page={page} setpage={setpage} />
      </View>
      <View style={styles.main3}>
        {page === SignIn ? (
          <GreenComponent navigation={navigation} />
        ) : (
          <RegisterComponent />
        )}
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

const GreenComponent = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [passwordHidden, setpasswordHidden] = useState(true);
  return (
    <View style={styles.gr1}>
      {/* Login */}
      <Text style={styles.gr2}>LOGIN YOUR YOUR ACOUNT.</Text>
      {/* Email */}
      <View style={styles.gr3}>
        <Image
          source={require('../../../assets/images/email.png')}
          resizeMode="stretch"
          style={styles.gr4}
        />
        <TextInput
          style={styles.gr5}
          autoCapitalize={null}
          placeholder="E-mail"
        />
      </View>
      {/* Password */}
      <View style={styles.gr3}>
        <Image
          source={require('../../../assets/images/password.png')}
          resizeMode="stretch"
          style={styles.gr6}
        />
        <TextInput
          style={styles.gr7}
          autoCapitalize={'none'}
          placeholder="Password"
          secureTextEntry={passwordHidden ? true : false}
        />
        <TouchableOpacity
          style={styles.gr8}
          onPress={() => setpasswordHidden(!passwordHidden)}>
          <Image
            source={require('../../../assets/images/passwordeye.png')}
            resizeMode="stretch"
            style={styles.gr9}
          />
        </TouchableOpacity>
      </View>
      {/* ForgetPassword */}
      <View style={styles.gr10}>
        <TouchableOpacity style={styles.gr11}>
          <Text style={styles.gr12}>Forget Password ? </Text>
        </TouchableOpacity>
      </View>
      {/* Button Login */}
      <TouchableOpacity
        style={styles.gr13}
        onPress={() => navigation.navigate('Drawer')}>
        <Text style={styles.gr14}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const RegisterComponent = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [passwordHidden, setpasswordHidden] = useState(true);
  return (
    <View style={styles.gr1}>
      {/* Login */}
      <Text style={styles.gr2}>REGISTER YOUR ACOUNT.</Text>
      <View style={styles.gr3}>
        <Image
          source={require('../../../assets/images/people.png')}
          resizeMode="stretch"
          style={styles.gr4}
        />
        <TextInput
          style={styles.gr5}
          autoCapitalize={null}
          placeholder="FULL NAME"
        />
      </View>
      {/* Email */}
      <View style={styles.gr3}>
        <Image
          source={require('../../../assets/images/email.png')}
          resizeMode="stretch"
          style={styles.gr4}
        />
        <TextInput
          style={styles.gr5}
          autoCapitalize={null}
          placeholder="E-mail"
        />
      </View>
      {/* Password */}
      <View style={styles.gr3}>
        <Image
          source={require('../../../assets/images/password.png')}
          resizeMode="stretch"
          style={styles.gr6}
        />
        <TextInput
          style={styles.gr7}
          autoCapitalize={'none'}
          placeholder="Password"
          secureTextEntry={passwordHidden ? true : false}
        />
        <TouchableOpacity
          style={styles.gr8}
          onPress={() => setpasswordHidden(!passwordHidden)}>
          <Image
            source={require('../../../assets/images/passwordeye.png')}
            resizeMode="stretch"
            style={styles.gr9}
          />
        </TouchableOpacity>
      </View>
      {/* Button SIGN UP */}
      <TouchableOpacity style={styles.gr13}>
        <Text style={styles.gr14}>SIGN UP</Text>
      </TouchableOpacity>
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
