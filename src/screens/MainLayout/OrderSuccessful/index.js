import React, {useEffect,useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Images from 'assets/images';

const OrderSuccessfulScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.part1}>
          <Image source={Images.Tick} style={styles.tick}/>
          <Text style={styles.inform}>YOUR ORDER SUCCESSFUL</Text>
        </View>

        <View style={styles.part2}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>DONE</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
};

export default OrderSuccessfulScreen;