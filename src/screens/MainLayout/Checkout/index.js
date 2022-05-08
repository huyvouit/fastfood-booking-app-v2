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

const CheckoutScreen = ({navigation}) => {
  const [isChange, setIsChange] = React.useState(false);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
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

          {!isChange ? (
            <View style={styles.info}>
              <TextInput />
              <TextInput />
              <TextInput />
            </View>
          ) : (
            <View style={styles.info}>
              <Text>Nguyen Van A</Text>
              <Text>0123456789</Text>
              <Text>897 Nguyen Hue, ward 15, district 1, Thu Duc City</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckoutScreen;
