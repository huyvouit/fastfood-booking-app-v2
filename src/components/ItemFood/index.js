import Images from 'assets/images';
import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Icons from '../../assets/icons';

import styles from './styles';

const ItemFood = props => {
  const {navigation} = props;
  return (
    <TouchableOpacity
      style={styles.foodItems}
      onPress={() => navigation.navigate('DetailScreen')}>
      <Image source={Images.Pizza} style={styles.image} />

      <View style={styles.costView}>
        <Text style={styles.unit}>$</Text>
        <Text style={styles.cost}>10.35</Text>
      </View>

      <View style={styles.rateView}>
        <Text style={styles.numrate}>4.5 </Text>
        <View style={styles.iconStar}>
          <SvgXml xml={Icons.IconStar} fill="yellow" width={16} height={16} />
        </View>
        <Text style={styles.numplus}> (+25)</Text>
      </View>

      <View style={styles.foodInfo}>
        <Text style={styles.foodNameText}>Red N Hot Pizza</Text>
        <Text style={styles.savour}>Chicken, Cheese and pineapple</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemFood;
