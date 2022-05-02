import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import styles from './styles';
const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('AuthScreen');
    }, 3000);
  }, []);

  return (
    <View style={styles.root}>
      {/* <Text>abc</Text> */}
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
