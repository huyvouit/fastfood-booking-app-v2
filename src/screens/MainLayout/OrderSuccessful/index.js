import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Images from 'assets/images';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedTab} from 'redux/actions';
const OrderSuccessfulScreen = ({navigation}) => {
  const selectedTab = useSelector(state => state.selectedTab);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.part1}>
        <Image source={Images.Tick} style={styles.tick} />
        <Text style={styles.inform}>YOUR ORDER SUCCESSFULLY</Text>
      </View>

      <View style={styles.part2}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'MainlayoutScreen'}],
            });
            dispatch(setSelectedTab('Home'));
          }}>
          <Text style={styles.buttonText}>DONE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderSuccessfulScreen;
