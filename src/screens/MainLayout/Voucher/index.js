import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {ImageBackground, ScrollView, TouchableOpacity, Button} from 'react-native';

import styles from './styles';

import Pizza from '../../../assets/images/Pizza.png';
import Logo from '../../../assets/images/logo.png';
import HeaderPage from 'components/Header';


const VoucherScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity style={{position: 'absolute', top: 0}}>
          <HeaderPage returnPage={() => navigation.goBack()} />
        </TouchableOpacity>
        <Text style={styles.titleText}>Vouchers</Text>
      </View>

      <ScrollView style={styles.vouchers}>
        <TouchableOpacity style={styles.items}>
          <Image style={styles.img_vouchers} source={Logo} />
          <View style={styles.text_vouchers}>
            <Text style={styles.text_vouchers_id}>Mã voucher: VC001</Text>
            <Text style={styles.text_vouchers_per}>Giảm 10%</Text>
            <Text style={styles.text_vouchers_date}>HSD: 10/06/2022</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Image style={styles.img_vouchers} source={Logo} />
          <View style={styles.text_vouchers}>
            <Text style={styles.text_vouchers_id}>Mã voucher: VC001</Text>
            <Text style={styles.text_vouchers_per}>Giảm 10%</Text>
            <Text style={styles.text_vouchers_date}>HSD: 10/06/2022</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Image style={styles.img_vouchers} source={Logo} />
          <View style={styles.text_vouchers}>
            <Text style={styles.text_vouchers_id}>Mã voucher: VC001</Text>
            <Text style={styles.text_vouchers_per}>Giảm 10%</Text>
            <Text style={styles.text_vouchers_date}>HSD: 10/06/2022</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Image style={styles.img_vouchers} source={Logo} />
          <View style={styles.text_vouchers}>
            <Text style={styles.text_vouchers_id}>Mã voucher: VC001</Text>
            <Text style={styles.text_vouchers_per}>Giảm 10%</Text>
            <Text style={styles.text_vouchers_date}>HSD: 10/06/2022</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Image style={styles.img_vouchers} source={Logo} />
          <View style={styles.text_vouchers}>
            <Text style={styles.text_vouchers_id}>Mã voucher: VC001</Text>
            <Text style={styles.text_vouchers_per}>Giảm 10%</Text>
            <Text style={styles.text_vouchers_date}>HSD: 10/06/2022</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default VoucherScreen;
