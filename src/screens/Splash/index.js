import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from 'contexts/AuthProvider';
import styles from './styles';
const SplashScreen = () => {
  const navigation = useNavigation();
  const [initializing, setInitializing] = useState(true);
  const {user, setUser} = useContext(AuthContext);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // if (initializing) return null;
  console.log('splash', user);
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigation.replace('Drawer');
      }, 5000);
    } else {
      setTimeout(() => {
        navigation.replace('AuthScreen');
      }, 5000);
    }
  }, []);

  return (
    <View style={styles.root}>
      <Image
        source={require('../../assets/images/splash-screen.jpg')}
        style={styles.bg}
      />
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

export default SplashScreen;
