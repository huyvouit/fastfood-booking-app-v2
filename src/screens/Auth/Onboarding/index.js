import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper/src';
import PrimaryButton from 'components/PrimaryButton';

import styles from './styles';

const SLIDERS = [
  {
    id: 1,
    desc: 'Save Food with our new Feature!',
    image: require('../../../assets/images/onboard-1.png'),
  },
  {
    id: 1,
    desc: 'Set preferences for multiple users from various restaurants!',
    image: require('../../../assets/images/onboard-2.png'),
  },
  {
    id: 1,
    desc: 'Fast, rescuedfood at your service.',
    image: require('assets/images/onboard-3.png'),
  },
];

const OnBoardingScreen = ({navigation}) => {
  const [dotIndex, setDotIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        autoplay={true}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}>
        {SLIDERS.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                alignItems: 'center',
                flex: 1,
                paddingHorizontal: 20,
                paddingVertical: 50,
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 100,
                }}>
                <Image
                  source={require('../../../assets/images/logo.png')}
                  style={{width: 120, height: 120}}
                />
              </View>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  fontWeight: '400',
                  fontSize: 40,
                  alignItems: 'center',
                  color: 'white',
                  textAlign: 'center',
                  // lineHeight: 47.76,
                  marginTop: 30,
                }}>
                {item.desc}
              </Text>
              <Image
                source={item.image}
                style={{width: '100%', height: '50%'}}
              />
              {index == 2 && (
                <PrimaryButton
                  title="Get started"
                  action={() => navigation.navigate('Login')}
                />
              )}
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default OnBoardingScreen;
