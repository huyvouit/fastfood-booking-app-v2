import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Button,
  RefreshControl,
} from 'react-native';

import styles from './styles';
import moment from 'moment';
import Pizza from '../../../assets/images/Pizza.png';
import Logo from '../../../assets/images/logo.png';
import HeaderPage from 'components/Header';
import voucherApi from 'api/voucher_api';

const VoucherScreen = ({navigation}) => {
  const [voucherList, setVoucherList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchVoucherList = async () => {
    try {
      const params = {
        currentPage: 1,
        documentsPerPage: 10,
      };

      const response = await voucherApi.getUsingVoucher();

      if (response.data.success) {
        setVoucherList(response.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
      setIsLoading(false);
    }
  };
  const onRefresh = async () => {
    await fetchVoucherList();
  };
  useEffect(() => {
    fetchVoucherList();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <HeaderPage
          returnPage={() => navigation.openDrawer()}
          title="Voucher"
        />
        {/* <TouchableOpacity style={{position: 'absolute', top: 0}}>
          <HeaderPage returnPage={() => navigation.openDrawer()} />
        </TouchableOpacity>
        <Text style={styles.titleText}>Vouchers</Text> */}
      </View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: '600',
          fontFamily: 'Roboto-Bold',
          paddingHorizontal: 20,
        }}>
        All vouchers applying for all products
      </Text>
      <ScrollView
        style={styles.vouchers}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }>
        {voucherList?.map((item, index) => {
          return (
            <TouchableOpacity style={styles.items} key={index}>
              <Image style={styles.img_vouchers} source={Logo} />
              <View style={styles.text_vouchers}>
                <Text style={styles.text_vouchers_id}>{item?.code}</Text>
                <Text style={styles.text_vouchers_per}>
                  Discount {`${item?.discountPercent * 100}%`}
                </Text>
                <Text style={styles.text_vouchers_date}>
                  Start: {moment(item?.beginDate).format('MMMM D, YYYY')}
                </Text>
                <Text style={styles.text_vouchers_date}>
                  End: {moment(item?.endDate).format('MMMM D, YYYY')}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default VoucherScreen;
