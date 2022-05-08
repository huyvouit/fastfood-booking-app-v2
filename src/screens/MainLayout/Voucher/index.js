import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {ImageBackground, ScrollView, TouchableOpacity, Button} from 'react-native';

import styles from './styles';

import Pizza from '../../../assets/images/Pizza.png';
import Logo from '../../../assets/images/logo.png';


const VoucherScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Pizza} resizeMode="cover" style={styles.image}>
      </ImageBackground>

      <View style={styles.tab}>
        <TouchableOpacity style={styles.tab_AllVouchers}>
          <Text style={styles.tab_FoodItems_Text}>All vouchers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab_Used}>
          <Text style={styles.tab_Resturents_Text}>Used</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab_Used}>
          <Text style={styles.tab_Resturents_Text}>Expired</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.vouchers}>
        <View style={styles.items}>
          <Image style={styles.img_vouchers} source={Logo} />  
          <View style={styles.text_vouchers}>
            <Text style={styles.text_vouchers_id}>Mã voucher: VC001</Text>
            <Text style={styles.text_vouchers_per}>Giảm 10%</Text>
            <Text style={styles.text_vouchers_date}>HSD: 10/06/2022</Text>
          </View>
          <View style={{top: 70, left: 20}}>
            <Button title='Save'/>
          </View>
        </View>
      </View>

    </View>
  );
};

export default VoucherScreen;
