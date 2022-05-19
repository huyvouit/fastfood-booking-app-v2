import React, {useEffect, useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Swiper from 'react-native-swiper/src';
import Icons from '../../../assets/icons';

import BackButton from '../../../components/BackButton';
import DecreaseButton from '../../../components/DecreaseButton';
import HeaderPage from '../../../components/Header';
import IncreaseButton from '../../../components/IncreaseButton';

import {SvgXml} from 'react-native-svg';
import ChevronLeft from '../../../assets/icons/chevron-left.svg';
import {formatter} from 'helper/formatter';
import styles from './styles';
import Images from 'assets/images';
import SelectDropdown from 'react-native-select-dropdown';
import {LIST_SHORTING} from 'constants/constants';
import {AuthContext} from 'contexts/AuthProvider';

const CheckoutScreen = ({navigation, route}) => {
  const {cartList, subTotal} = route.params;
  const {account} = useContext(AuthContext);
  const [isChange, setIsChange] = React.useState(false);
  const [payment, setPayment] = React.useState('COD');
  const [convertCart, setConvertCart] = React.useState([]);

  const handleSubmitOrder = () => {
    try {
      const params = {
        userInfo: account?._id,
        address: ' 897 Nguyen Hue, ward 15, district 1, Thu Duc City',
        phone: '0123456789',
        totalCost: subTotal,
      };
    } catch (error) {
      console.log('Failed to fetch cart list: ', error);
    }
  };

  const convertCartList = () => {
    let newArr = [];
    let temp = {
      productId: '',
      size: '',
      quantity: '',
      price: '',
    };
    cartList.map(item => {
      temp.productId = item.productId._id;
      temp.size = item.size;
      temp.quantity = item.quantity;
      temp.price = item.productId?.type[0]?.price.$numberDecimal;
      newArr.push(temp);
    });
    setConvertCart(newArr);
  };
  console.log(convertCart);
  useEffect(() => {
    convertCartList();
  }, []);
  return (
    <View style={{backgroundColor: 'white', flex: 1, paddingBottom: 20}}>
      <ScrollView nestedScrollEnabled={true}>
        <View>
          <HeaderPage
            returnPage={() => navigation.goBack()}
            title={'Checkout'}
          />
        </View>
        <View style={styles.shippingInfo}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Shipping Infomation</Text>
            {isChange ? (
              <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <Text style={styles.textAction}>Save</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <Text style={styles.textAction}>Change</Text>
              </TouchableOpacity>
            )}
          </View>

          {isChange ? (
            <View style={styles.info}>
              <TextInput
                style={styles.textInput}
                placeholder="Full name"
                value="Nguyen Van A"
              />
              <View style={{}}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Full name"
                  value={account?.fullname}
                />
              </View>
              <View style={{}}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Full name"
                  value="Address"
                />
              </View>
            </View>
          ) : (
            <View style={styles.info}>
              <Text style={styles.textInfo}>{account?.fullname}</Text>
              <Text style={styles.textInfo}>0123456789</Text>
              <Text style={styles.textInfo}>
                897 Nguyen Hue, ward 15, district 1, Thu Duc City
              </Text>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.textHeader}>Products</Text>
          <View style={styles.products}>
            <ScrollView>
              <View>
                {cartList.map((item, index) => {
                  return (
                    <View style={styles.foods} key={index}>
                      <Image
                        source={{uri: item.productId?.mainImage}}
                        style={{
                          width: 70,
                          height: 70,
                          resizeMode: 'cover',
                          position: 'relative',
                          borderRadius: 10,
                          marginRight: 20,
                        }}
                      />
                      <View style={styles.information}>
                        <Text style={styles.name_food} numberOfLines={1}>
                          {item.productId?.name}
                        </Text>
                        <Text style={styles.savour} numberOfLines={1}>
                          {item.productId?.description}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={styles.cost}>
                            {formatter.format(
                              item.productId?.type[0]?.price.$numberDecimal,
                            )}
                          </Text>
                          <Text style={styles.quantity}>
                            {' '}
                            X {item.quantity}
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>

        {/* <View style={styles.section}>
          <Text style={styles.textHeader}>Voucher</Text>
          <View style={styles.foods}>
            <SelectDropdown
              // style={styles.inputCity}
              defaultValue={'Default sorting'}
              buttonStyle={{
                position: 'relative',
                left: -25,
                backgroundColor: 'transparent',
                elevation: -1,
                // justifyContent: 'flex-start',
                padding: 0,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'gray',
                margin: 0,

                // width: 150,
                height: 40,
              }}
              buttonTextStyle={{
                ...styles.text,
                fontStyle: 'italic',
                fontWeight: '400',
                fontSize: 16,
                // textAlign: 'left',
              }}
              rowStyle={{backgroundColor: 'white'}}
              data={LIST_SHORTING}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
        </View> */}
        <View style={styles.section}>
          <Text style={styles.textHeader}>Payment</Text>
          <View style={styles.selectPayment}>
            <TouchableOpacity
              style={{
                ...styles.cash,
                backgroundColor: payment == 'COD' ? '#FE724C' : '#fff',
              }}
              onPress={() => setPayment('COD')}>
              <Image source={Images.Cash} style={styles.cashImage} />
              <Text
                style={{
                  ...styles.cashText,
                  color: payment == 'COD' ? '#fff' : '#FE724C',
                }}>
                Cash
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.zalopay,
                backgroundColor: payment == 'ZaloPay' ? '#FE724C' : '#fff',
              }}
              onPress={() => setPayment('ZaloPay')}>
              <Image source={Images.ZaloPay} style={styles.zalopayImage} />
              <Text
                style={{
                  ...styles.zalopayText,
                  color: payment == 'ZaloPay' ? '#fff' : '#FE724C',
                }}>
                Zalopay
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.textHeader}>Summary</Text>
          <View style={styles.fees}>
            <View style={styles.cost_info}>
              <Text style={styles.kind_of_fee}>Subtotal</Text>
              <View style={styles.money}>
                <Text style={styles.cost_of_fee}>
                  {formatter.format(subTotal)}
                </Text>
                {/* <Text style={styles.unit}>USD</Text> */}
              </View>
            </View>

            <View style={styles.cost_info}>
              <Text style={styles.kind_of_fee}>Tax and Fees</Text>
              <View style={styles.money}>
                <Text style={styles.cost_of_fee}> {formatter.format(0)}</Text>
              </View>
            </View>

            <View style={styles.cost_info}>
              <Text style={styles.kind_of_fee}>Delivery</Text>
              <View style={styles.money}>
                <Text style={styles.cost_of_fee}>{formatter.format(0)}</Text>
              </View>
            </View>

            <View style={styles.cost_info}>
              <Text style={styles.kind_of_fee}>Total</Text>
              <View style={styles.money}>
                <Text style={styles.cost_of_fee}>
                  {formatter.format(subTotal)}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.footer}>
            <TouchableOpacity
              style={{
                borderRadius: 5,
                height: 40,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...styles.textBtn, color: '#323643'}}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#FE724C',
                borderRadius: 5,
                height: 40,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('OrderSuccessfulScreen')}>
              <Text style={styles.textBtn}>ORDER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckoutScreen;
