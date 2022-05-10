import Images from 'assets/images';
import {formatter} from 'helper/formatter';
import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Icons from '../../assets/icons';

import styles from './styles';

const ItemFood = props => {
  const {navigation, product} = props;
  return (
    <TouchableOpacity
      style={styles.foodItems}
      onPress={() => navigation.navigate('DetailScreen')}>
      <Image source={{uri: product?.mainImage}} style={styles.image} />

      <View style={styles.costView}>
        <Text style={styles.cost}>
          {' '}
          {formatter.format(product.type[0]?.price.$numberDecimal)}
        </Text>
        {/* <Text style={styles.unit}>VND</Text> */}
      </View>

      <View style={styles.rateView}>
        <Text style={styles.numrate}>{product?.avgRating} </Text>
        <View style={styles.iconStar}>
          <SvgXml xml={Icons.IconStar} fill="yellow" width={16} height={16} />
        </View>
      </View>

      <View style={styles.foodInfo}>
        <Text style={styles.foodNameText}>{product?.name}</Text>
        <Text style={styles.savour}>Chicken, Cheese and pineapple</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemFood;
