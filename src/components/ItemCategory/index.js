import Images from 'assets/images';
import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Icons from '../../assets/icons';

import styles from './styles';

const ItemCategory = props => {
  const {action, image, category} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
      <View style={styles.bgIcon}>
        <Image source={image} style={styles.icon} />
      </View>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default ItemCategory;
