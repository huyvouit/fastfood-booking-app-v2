import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {SvgXml} from 'react-native-svg';

import Icons from 'assets/icons';
import pizza from '../../../assets/images/Pizza.png';
import salad from '../../../assets/images/Greek_salad.png';

import styles from './styles';
import IncreaseButton from 'components/IncreaseButton';
import DecreaseButton from 'components/DecreaseButton';
import cartApi from 'api/cart_api';
import {AuthContext} from 'contexts/AuthProvider';
import {formatter} from 'helper/formatter';

const CartScreen = ({navigation}) => {
  const {account, cart, setCart} = useContext(AuthContext);
  const [isChange, setIsChange] = React.useState(true);
  const [cartList, setCartList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [subTotal, setSubTotal] = useState(0);
  const fetchCartList = async () => {
    setIsLoading(true);
    try {
      const params = {
        currentPage: 1,
        productPerPage: 10,
        uid: account?._id,
      };

      const response = await cartApi.getByUser(params);
      if (response.data.success) {
        setCartList(response.data.data);
        setSubTotal(calculateSubTotal(response.data.data));
        setIsLoading(false);
      }
    } catch (error) {
      console.log('Failed to fetch cart list: ', error);
    }
  };

  const calculateSubTotal = cartList => {
    console.log('run calculate');
    let subTotal = 0;
    for (let i = 0; i < cartList; i++) {
      console.log(i.productId?.type[0]?.price.$numberDecimal);
      subTotal += i.productId?.type[0]?.price.$numberDecimal;
    }
    return subTotal;
  };
  useEffect(() => {
    fetchCartList();
  }, [account, cart]);

  return cartList?.length > 0 ? (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScrollView style={styles.textWrapper(cartList?.length)}>
          <View>
            {cartList.map((item, index) => {
              return (
                <View style={styles.foods} key={index}>
                  <Image
                    source={{uri: item.productId?.mainImage}}
                    style={{
                      width: 80,
                      height: 80,
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
                      <Text style={styles.quantity}> X {item.quantity}</Text>
                    </View>
                  </View>

                  <TouchableOpacity style={styles.close}>
                    <SvgXml xml={Icons.IconClose} size={24} color="#FE724C" />
                  </TouchableOpacity>
                  {/* <View style={styles.modify}>
                    <DecreaseButton action={() => {}} />
                    <Text style={styles.quantity}>{item.quantity}</Text>

                    <IncreaseButton action={() => {}} />
                  </View> */}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>

      {/* <View style={styles.promoCode}>
        <TextInput
          style={styles.inputCode}
          placeholder="Promo Code"
          placeholderTextColor="#C0C0C0"
        />
        <TouchableOpacity style={styles.buttonApply}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View> */}

      <View style={{backgroundColor: 'white'}}>
        <View style={styles.fees}>
          <View style={styles.cost_info}>
            <Text style={styles.kind_of_fee}>Subtotal</Text>
            <View style={styles.money}>
              <Text style={styles.cost_of_fee}>{subTotal}</Text>
              <Text style={styles.unit}>USD</Text>
            </View>
          </View>
          {/* <View
            style={{borderWidth: 0.5, borderColor: '#C0C0C0', top: -50}}></View> */}
          <View style={styles.cost_info}>
            <Text style={styles.kind_of_fee}>Tax and Fees</Text>
            <View style={styles.money}>
              <Text style={styles.cost_of_fee}>$5.30</Text>
              <Text style={styles.unit}>USD</Text>
            </View>
          </View>

          <View style={styles.cost_info}>
            <Text style={styles.kind_of_fee}>Delivery</Text>
            <View style={styles.money}>
              <Text style={styles.cost_of_fee}>$1.00</Text>
              <Text style={styles.unit}>USD</Text>
            </View>
          </View>

          <View style={styles.cost_info}>
            <Text style={styles.kind_of_fee}>Total</Text>
            <View style={styles.money}>
              <Text style={styles.cost_of_fee}>$33.60</Text>
              <Text style={styles.unit}>USD</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttonCheck}
          onPress={() => navigation.navigate('CheckoutScreen')}>
          <Text style={styles.buttonText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  ) : (
    <View style={styles.emptyPage}>
      <SvgXml xml={Icons.IconCart} color="#767F9D" width={80} height={80} />
      <Text style={styles.emptyNotification}>
        You have no item in your cart
      </Text>
    </View>
  );
};

export default CartScreen;
