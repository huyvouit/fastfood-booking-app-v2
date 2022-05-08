import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Icons from 'assets/icons';
import {SvgXml} from 'react-native-svg';
import styles from './styles';
import BackButton from 'components/BackButton';
import HeaderPage from '../../../components/Header';

const AddressBookScreen = ({navigation}) => {
  // const {addressNav} = props;
  console.log(navigation);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.title}>
        <BackButton style={styles.back} />
        <Text style={styles.titleText}>Address Book</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.textWrapper}>
          <View style={styles.address}>
            <View style={styles.info}>
              <Text>Sweet Latte</Text>
              <Text>0329496279</Text>
              <Text>12 Robusta Street, Frapped District</Text>
              <Text>White City</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => navigation.navigate('NewAddressScreen')}>
            <SvgXml
              xml={Icons.IconPlus}
              color="#FE724C"
              width={50}
              height={50}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddressBookScreen;
