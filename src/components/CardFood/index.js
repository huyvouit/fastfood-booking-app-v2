import {formatter} from 'helper/formatter';
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Icons from '../../assets/icons';

import styles from './styles';

const CardFood = ({item, navigation}) => {
  //   if (item.empty === true) {
  //     return (
  //       <View
  //         style={[
  //           styles.item,
  //           styles.itemInvisible,
  //           {height: Dimensions.get('window').width / numColumns},
  //         ]}
  //       />
  //     );
  //   }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailScreen', {productId: item._id})}
      style={{
        // height: Dimensions.get('window').width / 1.5,
        ...styles.item,
      }}>
      <Image
        source={{uri: item.mainImage}}
        style={{
          width: '100%',
          height: 140,
          resizeMode: 'cover',
          borderRadius: 10,
          // backgroundColor: 'red',
        }}
      />
      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.nameProduct}>
          {item.name}
        </Text>

        <Text numberOfLines={2} style={styles.descProduct}>
          {item?.description}
        </Text>
        <Text style={styles.priceProduct}>
          {formatter.format(item.type[0]?.price.$numberDecimal)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardFood;
