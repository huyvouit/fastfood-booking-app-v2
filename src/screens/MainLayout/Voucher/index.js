import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';

import styles from './styles';

import Pizza from '../../../assets/images/Pizza.png';
import Logo from '../../../assets/images/logo.png';
import HeaderPage from 'components/Header';

const VoucherScreen = ({navigation}) => {
  const [showFilterModal, setShowFilterModal] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState(0);
  const [productList, setProductList] = useState([]);
  const [filter, setFilter] = useState({
    code: null,
    discount: null,
    quantity: null,
    beginDate: null,
    endDate: null,
  });
  const fetchVouchersList = async () => {
    setIsLoading(true);
    try {
      const params = {
        currentPage: 1,
        productPerPage: 10,
        sortType,
        ...filter,
      };

      const response = await productApi.getByFilter(params);
      // console.log(response.data.filteredProducts);
      setVouchersList(response.data.filteredProducts.data);
      setIsLoading(false);
    } catch (error) {
      console.log('Failed to fetch vouchers list: ', error);
    }
  };
  useEffect(() => {
    fetchVouchersList();
  }, [filter, sortType]);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity style={{position: 'absolute', top: 0}}>
          <HeaderPage returnPage={() => navigation.openDrawer()} />
        </TouchableOpacity>
        <Text style={styles.titleText}>Vouchers</Text>
      </View>

      <ScrollView style={styles.vouchers}>
        <TouchableOpacity style={styles.items}>
          <Image style={styles.img_vouchers} source={Logo} />
          <View style={styles.text_vouchers}>
            <Text style={styles.text_vouchers_id}>Code: VC001</Text>
            <Text style={styles.text_vouchers_per}>Discount 10%</Text>
            <Text style={styles.text_vouchers_date}>Start: 10/06/2022</Text>
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
