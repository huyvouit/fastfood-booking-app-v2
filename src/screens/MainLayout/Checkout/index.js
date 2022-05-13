import React, {useEffect} from 'react';
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

import styles from './styles';
import Images from 'assets/images';
import SelectDropdown from 'react-native-select-dropdown';
import {LIST_SHORTING} from 'constants/constants';

const CheckoutScreen = ({navigation}) => {
  const [isChange, setIsChange] = React.useState(false);
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
                  value="Nguyen Van A"
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
              <Text style={styles.textInfo}>Nguyen Van A</Text>
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
              <View style={styles.foods}>
                <Image
                  source={Images.Hawai}
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
                  <Text style={styles.name_food}>Greek salad</Text>
                  <Text style={styles.savour}>with baked salmon</Text>
                  <Text style={styles.cost}>$12.00</Text>
                </View>
              </View>
              <View style={styles.foods}>
                <Image
                  source={Images.Hawai}
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
                  <Text style={styles.name_food}>Greek salad</Text>
                  <Text style={styles.savour}>with baked salmon</Text>
                  <Text style={styles.cost}>$12.00</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.textHeader}>Voucher</Text>
          <View style={styles.food}>
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
        </View>
        <View style={styles.section}>
          <Text style={styles.textHeader}>Payment</Text>
          <View style={styles.selectPayment}>
            <TouchableOpacity style={styles.cash}>
              <Image source={Images.Cash} style={styles.cashImage}/>
              <Text style={styles.cashText}>Cash</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.zalopay}>
              <Image source={Images.ZaloPay} style={styles.zalopayImage}/>
              <Text style={styles.zalopayText}>Zalopay</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.textHeader}>Summary</Text>
          <View style={styles.fees}>
            <View style={styles.cost_info}>
              <Text style={styles.kind_of_fee}>Subtotal</Text>
              <View style={styles.money}>
                <Text style={styles.cost_of_fee}>$27.30</Text>
                <Text style={styles.unit}>USD</Text>
              </View>
            </View>

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
            <View style={styles.lineDiliver} />
            <View style={styles.cost_info}>
              <Text style={styles.kind_of_fee}>Total</Text>
              <View style={styles.money}>
                <Text style={styles.cost_of_fee}>$33.60</Text>
                <Text style={styles.unit}>USD</Text>
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
