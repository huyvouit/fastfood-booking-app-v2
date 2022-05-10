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

import {AuthContext} from 'contexts/AuthProvider';

import styles from './styles';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SignIn = 'SIGNIN';
const SignUp = 'SIGNUP';

export default function LoginScreen({navigation, redirect}) {
  const {user} = useContext(AuthContext);
  useEffect(() => {
    console.log('login', user);
    if (user) {
      redirect.replace('Drawer');
    }
  }, [user]);
  const [page, setpage] = useState(SignIn);
  return (
    <View style={styles.main1}>
      <View style={styles.main2}>
        <RedComponent page={page} setpage={setpage} />
      </View>
      <View style={styles.main3}>
        {page === SignIn ? (
          <GreenComponent navigation={navigation} redirect={redirect} />
        ) : (
          <RegisterComponent redirect={redirect} />
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

const GreenComponent = ({navigation, redirect}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);
  const {login, user} = useContext(AuthContext);

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
        <TouchableOpacity style={styles.gr11}>
          <Text style={styles.gr12}>Forget Password ? </Text>
        </TouchableOpacity>
      </View>
      {/* Button Login */}
      <TouchableOpacity
        style={styles.gr13}
        onPress={() => {
          console.log('click login');
          login(email, password);
          // redirect.replace('Drawer');
        }}>
        <Text style={styles.gr14}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const RegisterComponent = ({redirect}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);
  const {user, register} = useContext(AuthContext);

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
      <TouchableOpacity
        style={styles.gr13}
        onPress={() => {
          register('Huy Vo', email, password);
          // redirect.replace('Drawer');
        }}>
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
