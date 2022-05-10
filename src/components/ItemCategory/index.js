import Images from 'assets/images';
import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Icons from '../../assets/icons';

import styles from './styles';

const ItemCategory = props => {
  const {action, type, isActived} = props;
  return (
    <TouchableOpacity
      style={styles.container(isActived, type.id)}
      onPress={action}>
      <View style={styles.bgIcon}>
        <Image source={type?.image} style={styles.icon} />
      </View>
      <Text style={styles.category(isActived, type.id)}>{type?.category}</Text>
    </TouchableOpacity>
  );
};

export default ItemCategory;
