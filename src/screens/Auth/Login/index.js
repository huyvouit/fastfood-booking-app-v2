import React, {useState, useEffect, useContext} from 'react';
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
import Images from 'assets/images';
import {AuthContext} from 'contexts/AuthProvider';

import styles from './styles';
import Loading from 'screens/Loading';
import {showToastWithGravityAndOffset} from 'helper/toast';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SignIn = 'SIGNIN';
const SignUp = 'SIGNUP';

export default function LoginScreen({navigation, redirect}) {
  const {user} = useContext(AuthContext);
  const [page, setpage] = useState(SignIn);

  // useEffect(() => {
  //   console.log('login', user);
  //   if (user) {
  //     redirect.replace('Drawer');
  //   }
  // }, [user]);

  return (
    <ScrollView style={styles.main1}>
      <SafeAreaView style={styles.main2}>
        <RedComponent page={page} setpage={setpage} />
      </SafeAreaView>
      <SafeAreaView style={styles.main3}>
        {page === SignIn ? (
          <GreenComponent navigation={navigation} redirect={redirect} />
        ) : (
          <RegisterComponent redirect={redirect} />
        )}
      </SafeAreaView>

      <SafeAreaView style={styles.main4}>
        <BlueComponent />
      </SafeAreaView>
      <SafeAreaView style={styles.main5}>
        <BlueComponent />
      </SafeAreaView>
    </ScrollView>
  );
}

const RedComponent = ({page, setpage}) => {
  return (
    <View style={styles.red1}>
      <StatusBar barstyle="light-content" />
      <View style={styles.red2}>
        <View style={styles.red3}>
          <Image
            source={Images.Logo}
            style={{width: 300, height: 300, justifyContent: 'center', top: 20}}
          />
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

const GreenComponent = ({navigation, redirect}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);
  const {login, googleLogin, user} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSunbmitLogin = async () => {
    setLoading(true);
    const res = await login(email, password);

    if (res?.success) {
      console.log(res.message);
      showToastWithGravityAndOffset(res.message);
      setLoading(false);
    } else {
      console.log(res.message);
      showToastWithGravityAndOffset(res.message);
      setLoading(false);
    }
  };
  return (
    <View style={styles.gr1}>
      {/* Login */}
      <Text style={styles.gr2}>LOGIN YOUR ACOUNT.</Text>
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
          value={email}
          onChangeText={userEmail => setEmail(userEmail)}
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
          value={password}
          onChangeText={userPassword => setPassword(userPassword)}
          secureTextEntry={passwordHidden ? true : false}
        />
        <TouchableOpacity
          style={styles.gr8}
          onPress={() => setPasswordHidden(!passwordHidden)}>
          <Image
            source={require('../../../assets/images/passwordeye.png')}
            resizeMode="stretch"
            style={styles.gr9}
          />
        </TouchableOpacity>
      </View>
      {/* ForgetPassword */}
      <View style={styles.gr10}>
        <TouchableOpacity
          style={styles.gr11}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.gr12}>Forgot Password ? </Text>
        </TouchableOpacity>
      </View>
      {/* Button Login */}
      <TouchableOpacity style={styles.gr13} onPress={handleSunbmitLogin}>
        <Text style={styles.gr14}>{loading ? <Loading /> : 'LOGIN'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const RegisterComponent = ({redirect}) => {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);
  const {user, register} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSunbmitRegister = async () => {
    setLoading(true);
    const res = await register(fullname, email, password);

    if (res?.success) {
      console.log(res.message);
      showToastWithGravityAndOffset(res.message);
      setLoading(false);
    } else {
      console.log(res.message);
      showToastWithGravityAndOffset(res.message);
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.gr1}>
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
          placeholder="Full name"
          value={fullname}
          onChangeText={userFullname => setFullname(userFullname)}
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
          value={email}
          onChangeText={userEmail => setEmail(userEmail)}
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
          value={password}
          onChangeText={userPassword => setPassword(userPassword)}
          secureTextEntry={passwordHidden ? true : false}
        />
        <TouchableOpacity
          style={styles.gr8}
          onPress={() => setPasswordHidden(!passwordHidden)}>
          <Image
            source={require('../../../assets/images/passwordeye.png')}
            resizeMode="stretch"
            style={styles.gr9}
          />
        </TouchableOpacity>
      </View>
      {/* Button SIGN UP */}
      <TouchableOpacity style={styles.gr13} onPress={handleSunbmitRegister}>
        <Text style={styles.gr14}>{loading ? <Loading /> : 'SIGN UP'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const BlueComponent = () => {
  const {googleLogin, fbLogin} = useContext(AuthContext);
  const handleSunbmitLoginGG = async () => {
    const res = await googleLogin();

    if (res?.success) {
      showToastWithGravityAndOffset(res.message);
    } else {
      showToastWithGravityAndOffset(res.message);
    }
  };

  const handleSunbmitLoginFB = async () => {
    const res = await fbLogin();

    if (res?.success) {
      showToastWithGravityAndOffset(res.message);
    } else {
      showToastWithGravityAndOffset(res.message);
    }
  };
  return (
    <View style={styles.bl1}>
      <View style={styles.bl2}>
        {/* <View style={styles.bl3}></View> */}
        <Text>OR CONNECT WITH</Text>
        {/* <View style={styles.bl4}></View> */}
      </View>
      <View style={styles.bl5}>
        <TouchableOpacity onPress={handleSunbmitLoginGG}>
          <Image
            source={Images.logoGG}
            resizeMode="contain"
            style={styles.bl6}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSunbmitLoginFB}>
          <Image
            source={Images.logoFb}
            resizeMode="contain"
            style={styles.bl7}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
