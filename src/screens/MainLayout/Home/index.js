import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={{fontFamily: 'Roboto-Bold'}}>
        What would you like to order
      </Text>
    </View>
  );
};

export default HomeScreen;
