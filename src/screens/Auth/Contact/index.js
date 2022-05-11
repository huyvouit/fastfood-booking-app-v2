const RegisterComponent = ({redirect}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordHidden, setPasswordHidden] = useState(true);
    const {user, register} = useContext(AuthContext);
  
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
      </SafeAreaView>
    );
  };