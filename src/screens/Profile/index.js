import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Text>Profile</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailScreen')}
        style={{backgroundColor: 'white'}}>
        <Text>detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
