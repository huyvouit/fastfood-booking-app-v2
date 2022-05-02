import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SvgXml} from 'react-native-svg';

import Icons from 'assets/icons';
import pizza from '../../../assets/images/Pizza.png';
import salad from '../../../assets/images/Greek_salad.png';

import styles from './styles';

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <View style={styles.foods}>
            <Image
              source={pizza}
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
              <Text style={styles.name_food}>Red n hot pizza</Text>
              <Text style={styles.savour}>Spicy chicken, beef</Text>
              <Text style={styles.cost}>$15.30</Text>
            </View>
          </View>

          <View style={styles.close}>
            <TouchableOpacity style={styles.closeButton}>
              <SvgXml xml={Icons.IconClose} size={24} color="#FE724C" />
            </TouchableOpacity>
          </View>

          <View style={styles.modify}>
            <TouchableOpacity style={styles.buttonDecrease}>
              <SvgXml xml={Icons.IconMinus} size={24} color="#FE724C" />
            </TouchableOpacity>

            <Text style={styles.quantity}>02</Text>

            <TouchableOpacity style={styles.buttonIncrease}>
              <SvgXml xml={Icons.IconPlus} size={24} color="#FE724C" />
            </TouchableOpacity>
          </View>

          <View style={styles.foods}>
            <Image
              source={salad}
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

          <View style={styles.close}>
            <TouchableOpacity style={styles.closeButton}>
              <SvgXml xml={Icons.IconClose} size={24} color="#FE724C" />
            </TouchableOpacity>
          </View>

          <View style={styles.modify}>
            <TouchableOpacity style={styles.buttonDecrease}>
              <SvgXml xml={Icons.IconMinus} size={24} color="#FE724C" />
            </TouchableOpacity>

            <Text style={styles.quantity}>02</Text>

            <TouchableOpacity style={styles.buttonIncrease}>
              <SvgXml xml={Icons.IconPlus} size={24} color="#FE724C" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.promoCode}>
        <TextInput
          style={styles.inputCode}
          placeholder="Promo Code"
          placeholderTextColor="#C0C0C0"
        />
        <TouchableOpacity style={styles.buttonApply}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>

      <View style={{backgroundColor: 'white'}}>
        <View style={styles.textWrapper}>
          <View style={styles.cost_info}>
            <Text style={styles.kind_of_fee}>Subtotal</Text>
            <View style={styles.money}>
              <Text style={styles.cost_of_fee}>$27.30</Text>
              <Text style={styles.unit}>USD</Text>
            </View>
          </View>
          <View
            style={{borderWidth: 0.5, borderColor: '#C0C0C0', top: -50}}></View>
          <View style={styles.cost_info}>
            <Text style={styles.kind_of_fee}>Tax and Fees</Text>
            <View style={styles.money}>
              <Text style={styles.cost_of_fee}>$5.30</Text>
              <Text style={styles.unit}>USD</Text>
            </View>
          </View>
          <View
            style={{borderWidth: 0.5, borderColor: '#C0C0C0', top: -50}}></View>
          <View style={styles.cost_info}>
            <Text style={styles.kind_of_fee}>Delivery</Text>
            <View style={styles.money}>
              <Text style={styles.cost_of_fee}>$1.00</Text>
              <Text style={styles.unit}>USD</Text>
            </View>
          </View>
          <View
            style={{borderWidth: 0.5, borderColor: '#C0C0C0', top: -50}}></View>
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
        <TouchableOpacity style={styles.buttonCheck}>
          <Text style={styles.buttonText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
