import React, {useEffect, useContext, useState, useLayoutEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import HeaderPage from 'components/Header';

import Logo from 'assets/images/logo.png';
import {SvgXml} from 'react-native-svg';

import {formatter} from 'helper/formatter';
import styles from './styles';
import Images from 'assets/images';

import {AuthContext} from 'contexts/AuthProvider';
import userApi from 'api/user_api';
import voucherApi from 'api/voucher_api';
import moment from 'moment';
import {showToastWithGravityAndOffset} from 'helper/toast';
import Icons from 'assets/icons';
import orderApi from 'api/order_api';
import {
  Platform,
  DeviceEventEmitter,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import RNMomosdk from 'react-native-momosdk';

const ModalAddress = ({isAddress, setIsAddress}) => {
  const [listAddress, setListAddress] = useState(null);
  const {account, fetchUserInfo} = useContext(AuthContext);

  const handleAddDefaultAddress = async info => {
    try {
      const body = {
        userId: account?._id,
        addressId: info._id,
      };

      const res = await userApi.getDefaultAddress(body);

      if (res.data.success) {
        await fetchUserInfo();
        setIsAddress(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const params = {
          userId: account?._id,
          currentPage: 1,
          addressPerPage: 5,
        };

        const res = await userApi.getAllAddress(params);

        if (res.data.success) {
          setListAddress(res.data.data);
        }
      } catch (error) {
        console.log('error to get address list', error);
      }
    })();
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isAddress}
      onRequestClose={() => {
        setIsAddress(!isAddress);
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Select shipping address?</Text>
          <ScrollView>
            {listAddress?.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.5}
                  style={{marginBottom: 10, ...styles.info}}
                  onPress={() => handleAddDefaultAddress(item)}>
                  <Text style={styles.textInfo}>{item?.username}</Text>
                  <Text style={styles.textInfo}>{item?.phone}</Text>
                  <Text
                    style={
                      styles.textInfo
                    }>{`${item?.address.number}, ${item?.address?.street}, ${item?.address?.ward}, ${item?.address?.district}, ${item?.address?.province}`}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setIsAddress(!isAddress)}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const ModalVoucher = ({isVoucher, setIsVoucher, setCodeVoucher}) => {
  const [listVoucher, setListVoucher] = useState(null);

  const handleApplyVoucher = async item => {
    try {
      const res = await voucherApi.applyVoucher({code: item.code});
      if (res.data.success) {
        setCodeVoucher(item);
        setIsVoucher(!isVoucher);
        showToastWithGravityAndOffset(res.data.message);
      }
    } catch (error) {
      showToastWithGravityAndOffset(error.response.data.message);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const res = await voucherApi.getUsingVoucher();

        if (res.data.success) {
          setListVoucher(res.data.data);
        }
      } catch (error) {
        console.log('error to get voucher list', error);
      }
    })();
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVoucher}
      onRequestClose={() => {
        setIsVoucher(!isVoucher);
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Select voucher?</Text>
          <ScrollView>
            {listVoucher?.map((item, index) => {
              return (
                <TouchableOpacity
                  style={{
                    ...styles.items_voucher,
                    opacity: item?.quantity > 0 ? 1 : 0.4,
                  }}
                  key={index}
                  onPress={
                    item?.quantity > 0
                      ? () => {
                          handleApplyVoucher(item);
                        }
                      : () => {
                          showToastWithGravityAndOffset(
                            'Voucher is out of quantity',
                          );
                        }
                  }>
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
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setIsVoucher(!isVoucher)}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
const CheckoutScreen = ({navigation, route}) => {
  const EventEmitter = new NativeEventEmitter(NativeModules.RNMomosdk);
  const {cartList, subTotal} = route.params;
  const {account, fetchUserInfo} = useContext(AuthContext);
  const [isChange, setIsChange] = React.useState(false);
  const [payment, setPayment] = React.useState('COD');
  const [convertCart, setConvertCart] = React.useState([]);
  const [isAddress, setIsAddress] = useState(false);
  const [isVoucher, setIsVoucher] = useState(false);
  const [userInfo, setUserInfo] = useState(account?.defaultAddress);
  const [formOrder, setFormOrder] = useState({
    userId: account?._id,
    username: account?.fullname,
    phone: account?.phone,
    addressText: null,
  });
  const [codeVoucher, setCodeVoucher] = useState({
    code: '',
    discountPercent: 0,
  });
  //=====
  const merchantname = 'Fast Food';
  const merchantcode = 'CGV01';
  const merchantNameLabel = 'Nhà cung cấp';
  const billdescription = 'Fast Food Order';
  const amount = 50000;
  const enviroment = '0';

  const formatNumberToMoney = (number, defaultNum, predicate) => {
    predicate = !predicate ? '' : '' + predicate;
    if (
      number == 0 ||
      number == '' ||
      number == null ||
      number == 'undefined' ||
      isNaN(number) === true ||
      number == '0' ||
      number == '00' ||
      number == '000'
    )
      return '0' + predicate;

    var array = [];
    var result = '';
    var count = 0;

    if (!number) {
      return defaultNum ? defaultNum : '' + predicate;
    }

    let flag1 = false;
    if (number < 0) {
      number = -number;
      flag1 = true;
    }

    var numberString = number.toString();
    if (numberString.length < 3) {
      return numberString + predicate;
    }

    for (let i = numberString.length - 1; i >= 0; i--) {
      count += 1;
      if (numberString[i] == '.' || numberString[i] == ',') {
        array.push(',');
        count = 0;
      } else {
        array.push(numberString[i]);
      }
      if (count == 3 && i >= 1) {
        array.push('.');
        count = 0;
      }
    }

    for (let i = array.length - 1; i >= 0; i--) {
      result += array[i];
    }

    if (flag1) result = '-' + result;

    return result + predicate;
  };

  const [textAmount, setTextAmount] = useState(
    formatNumberToMoney(amount, null, ''),
  );
  const [description, setDescription] = useState('');
  const [processing, setProcessing] = useState(false);

  ///===

  const handleSubmitOrder = async () => {
    let temp = [...cartList];

    try {
      [...cartList].map((item, index) => {
        temp[index].productId = item.productId._id;
      });
      let body;
      if (codeVoucher?._id) {
        body = {
          userInfo,
          products: temp,
          totalCost: subTotal - subTotal * codeVoucher.discountPercent,
          voucherApply: codeVoucher._id,
        };
      } else {
        body = {
          userInfo,
          products: temp,
          totalCost: subTotal - subTotal * codeVoucher.discountPercent,
        };
      }

      const res = await orderApi.addOrder(body);
      if (res.data.success) {
        showToastWithGravityAndOffset(res.data.message);
        navigation.reset({
          routes: [{name: 'OrderSuccessfulScreen'}],
        });
      }
    } catch (error) {
      console.log('Failed to create order failed: ', error);
    }
  };
  const handleSubmitOrderV2 = async () => {
    let temp = [...cartList];

    try {
      [...cartList].map((item, index) => {
        temp[index].productId = item.productId._id;
      });
      let body;
      if (codeVoucher?._id) {
        body = {
          userInfo: {
            userId: formOrder.userId,
            username: formOrder.username,
            phone: formOrder.phone,
          },
          addressText: formOrder.addressText || '',
          products: temp,
          totalCost: subTotal - subTotal * codeVoucher.discountPercent,
          voucherApply: codeVoucher?._id || '',
        };
      } else {
        body = {
          userInfo: {
            userId: formOrder.userId,
            username: formOrder.username,
            phone: formOrder.phone,
          },
          addressText: formOrder.addressText || '',
          products: temp,
          totalCost: subTotal - subTotal * codeVoucher.discountPercent,
        };
      }
      console.log(body);
      const res = await orderApi.addOrder(body);
      if (res.data.success) {
        showToastWithGravityAndOffset(res.data.message);
        navigation.reset({
          routes: [{name: 'OrderSuccessfulScreen'}],
        });
      }
    } catch (error) {
      console.log('Failed to create order failed: ', error);
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
  const handleCancelVoucher = async item => {
    try {
      const res = await voucherApi.cancelVoucher({code: item.code});
      if (res.data.success) {
        setCodeVoucher({
          code: '',
          discountPercent: 0,
        });
        // setIsVoucher(!isVoucher);
        showToastWithGravityAndOffset(res.data.message);
      }
    } catch (error) {
      console.log(error);
      showToastWithGravityAndOffset(error.response.data.message);
    }
  };

  //===momo
  useEffect(() => {
    // let me = this;
    console.log('run listener');
    EventEmitter.addListener(
      'RCTMoMoNoficationCenterRequestTokenReceived',
      response => {
        console.log('<MoMoPay>Listen.Event::' + JSON.stringify(response));
        try {
          if (response && response.status == 0) {
            console.log('run here...');
            let fromapp = response.fromapp; //ALWAYS:: fromapp==momotransfer
            setDescription(JSON.stringify(response));
            setProcessing(false);

            let momoToken = response.data;
            let phonenumber = response.phonenumber;
            let message = response.message;
            let orderId = response.refOrderId; //your orderId
            let requestId = response.refRequestId; //your requestId
            //continue to submit momoToken,phonenumber to server
          } else {
            setDescription('message: Get token fail');
            setProcessing(false);
          }
        } catch (ex) {}
      },
    );

    //OPTIONAL
    EventEmitter.addListener(
      'RCTMoMoNoficationCenterRequestTokenState',
      response => {
        console.log('<MoMoPay>Listen.RequestTokenState:: ' + response.status);
        // status = 1: Parameters valid & ready to open MoMo app.
        // status = 2: canOpenURL failed for URL MoMo app
        // status = 3: Parameters invalid
      },
    );
  });

  const momoHandleResponse = async response => {
    console.log('run handle response:', response, response?.status);
    try {
      if (response && response.status == 0) {
        console.log('run here 1');
        setProcessing(false);
        setDescription(response?.message);
      } else {
        console.log('run here 2');
        setDescription('message: Get token fail');
        setProcessing(false);
      }
    } catch (error) {
      console.log('run here 3');
      console.log('error:', error);
      setDescription('message: Get token fail...');
      setProcessing(false);
    }
  };

  const onPress = async () => {
    let jsonData = {};
    jsonData.enviroment = '0'; //"0": SANBOX , "1": PRODUCTION
    jsonData.action = 'gettoken';
    jsonData.isDev = true; //SANBOX only , remove this key on PRODUCTION
    jsonData.merchantname = merchantname;
    jsonData.merchantcode = merchantcode;
    jsonData.merchantnamelabel = merchantNameLabel;
    jsonData.description = billdescription;
    (jsonData.amount = subTotal - subTotal * codeVoucher.discountPercent),
      (jsonData.orderId = 'bill234284290348');
    jsonData.requestId = 'ABCXYZ123456';
    jsonData.orderLabel = 'Ma don hang';
    jsonData.appScheme = 'momocgv20170101'; //
    console.log('data_request_payment ' + JSON.stringify(jsonData));
    if (Platform.OS === 'android') {
      let dataPayment = await RNMomosdk.requestPayment(jsonData);
      await momoHandleResponse(dataPayment);
      console.log(
        'data_request_payment ' + dataPayment.toString(),
        dataPayment.status,
      );
    } else {
      RNMomosdk.requestPayment(JSON.stringify(jsonData));
    }
    // setDescription('');
    // setProcessing(true);
  };

  //====
  console.log('desc:', description, 'processing:', processing);
  useEffect(() => {
    setUserInfo(account?.defaultAddress);
  }, [account]);

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
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setIsAddress(true)}>
                <Text style={styles.textAction}>Change</Text>
              </TouchableOpacity>
            )}
          </View>
          {isAddress && (
            <ModalAddress isAddress={isAddress} setIsAddress={setIsAddress} />
          )}
          {account.defaultAddress ? (
            <View style={styles.info}>
              <Text style={styles.textInfo}>{userInfo?.username}</Text>
              <Text style={styles.textInfo}>{userInfo?.phone}</Text>
              <Text style={styles.textInfo}>
                {`${userInfo?.address?.number}, ${userInfo?.address?.street}, ${userInfo?.address?.ward}, ${userInfo?.address?.district}, ${userInfo?.address?.province}`}
              </Text>
            </View>
          ) : (
            <View style={styles.info}>
              <TextInput
                style={styles.textInput}
                placeholder="Full name"
                value={formOrder.username}
                onChangeText={text =>
                  setFormOrder({...formOrder, username: text})
                }
              />
              <View style={{}}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Phone number"
                  keyboardType="numeric"
                  value={formOrder.phone}
                  onChangeText={text =>
                    setFormOrder({...formOrder, phone: text})
                  }
                />
              </View>
              <View style={{}}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Shipping address"
                  value={formOrder.addressText}
                  onChangeText={text =>
                    setFormOrder({...formOrder, addressText: text})
                  }
                />
              </View>
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
                            {item?.size == 'M'
                              ? formatter.format(
                                  item.productId?.type[0]?.price.$numberDecimal,
                                )
                              : formatter.format(
                                  item.productId?.type[1]?.price.$numberDecimal,
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

        <View style={styles.section}>
          <Text style={styles.textHeader}>Voucher</Text>
          <View style={styles.promoCode}>
            <TextInput
              style={styles.inputCode}
              placeholder="Code voucher"
              placeholderTextColor="#C0C0C0"
              // editable={false}
              value={codeVoucher.code}
              onTouchStart={() => setIsVoucher(true)}
            />
            {codeVoucher.code !== '' && (
              <TouchableOpacity
                style={styles.close}
                onPress={() => handleCancelVoucher(codeVoucher)}>
                <SvgXml xml={Icons.IconClose} size={24} color="#FE724C" />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.buttonApply}
              onPress={() => setIsVoucher(true)}>
              <Text style={styles.buttonText}>Select</Text>
            </TouchableOpacity>
          </View>
          <ModalVoucher
            isVoucher={isVoucher}
            setIsVoucher={setIsVoucher}
            setCodeVoucher={setCodeVoucher}
          />
        </View>
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
            {/* <TouchableOpacity onPress={onPress} style={{...styles.zalopay}}>
              {processing ? (
                <Text style={styles.textGrey}>
                  Waiting response from MoMo App
                </Text>
              ) : (
                <Text style={styles.text}>Confirm Payment</Text>
              )}
            </TouchableOpacity> */}
            <TouchableOpacity
              style={{
                ...styles.zalopay,
                // backgroundColor: payment == 'ZaloPay' ? '#FE724C' : '#fff',
              }}
              onPress={onPress}>
              <Image source={Images.Momo} style={styles.zalopayImage} />
              {/* <Text
                style={{
                  ...styles.zalopayText,
                  color: payment == 'ZaloPay' ? '#fff' : '#FE724C',
                }}>
                Momo
              </Text> */}
            </TouchableOpacity>
          </View>
          {processing ? <ActivityIndicator size="small" color="#000" /> : null}
          {description != '' ? (
            <Text style={{color: 'red'}}>{description}</Text>
          ) : null}
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
              </View>
            </View>

            <View style={styles.cost_info}>
              <Text style={styles.kind_of_fee}>Discount</Text>
              <View style={styles.money}>
                <Text style={styles.cost_of_fee}>
                  {formatter.format(subTotal * codeVoucher.discountPercent)}
                </Text>
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
                  {formatter.format(
                    subTotal - subTotal * codeVoucher.discountPercent,
                  )}
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
              onPress={() => {
                if (formOrder.addressText) {
                  handleSubmitOrderV2();
                } else {
                  handleSubmitOrder();
                }
              }}>
              <Text style={styles.textBtn}>ORDER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckoutScreen;
