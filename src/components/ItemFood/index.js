import React, {useContext, useEffect, useState} from 'react';
import Images from 'assets/images';
import {formatter} from 'helper/formatter';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Icons from '../../assets/icons';

import styles from './styles';
import {AuthContext} from 'contexts/AuthProvider';
import favoriteApi from 'api/favorite_api';
import {showToastWithGravityAndOffset} from 'helper/toast';

const ItemFood = props => {
  const {navigation, product, size} = props;
  const [selectedType, setSelectType] = useState(0);
  const {favorite, fetchListFavorite} = useContext(AuthContext);

  const addFavorite = async productId => {
    try {
      const body = {productId};

      const result = await favoriteApi.addFavorite(body);
      console.log(result.data);
      if (result.data.success) {
        fetchListFavorite();
        showToastWithGravityAndOffset(result.data.message);
      }
    } catch (error) {
      // setIsLoading(false);
      console.log('error:', error.response.data.success);
      if (!error.response.data.success) {
        fetchListFavorite();
        showToastWithGravityAndOffset(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    if (size) {
      if (size == 'All' || size == '') {
        setSelectType(0);
      } else if (size == 'L') {
        setSelectType(1);
      } else {
        setSelectType(0);
      }
    }
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.foodItems}
      s
      onPress={() =>
        navigation.navigate('DetailScreen', {
          productId: product?._id,
        })
      }>
      <Image source={{uri: product?.mainImage}} style={styles.image} />
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.iconHeart}
        onPress={() => addFavorite(product?._id)}>
        <SvgXml
          xml={Icons.IconFavourite}
          color="#fe724c"
          width={25}
          height={25}
          fill={favorite?.includes(product?._id) ? '#FE724C' : '#fff'}
        />
      </TouchableOpacity>
      <View style={styles.costView}>
        <Text style={styles.cost}>
          {' '}
          {selectedType == 0
            ? formatter.format(product.type[selectedType]?.price.$numberDecimal)
            : formatter.format(
                product.type[selectedType]?.price.$numberDecimal,
              )}
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
        <View style={styles.header}>
          <Text numberOfLines={1} style={styles.foodNameText}>
            {product?.name}
          </Text>
          <View style={styles.type}>
            {size == 'All' && (
              <TouchableOpacity
                onPress={() => setSelectType(0)}
                style={{
                  width: 30,
                  backgroundColor: '#e2e2e2',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    color: selectedType == 0 ? '#FE724C' : 'white',
                    ...styles.itemType,
                  }}>
                  M
                </Text>
              </TouchableOpacity>
            )}
            {size == null && (
              <TouchableOpacity
                onPress={() => setSelectType(0)}
                style={{
                  width: 30,
                  backgroundColor: '#e2e2e2',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    color: selectedType == 0 ? '#FE724C' : 'white',
                    ...styles.itemType,
                  }}>
                  M
                </Text>
              </TouchableOpacity>
            )}
            {size == 'M' && (
              <TouchableOpacity
                onPress={() => setSelectType(0)}
                style={{
                  width: 30,
                  backgroundColor: '#e2e2e2',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    color: selectedType == 0 ? '#FE724C' : 'white',
                    ...styles.itemType,
                  }}>
                  M
                </Text>
              </TouchableOpacity>
            )}
            {size == 'All' && (
              <TouchableOpacity
                onPress={() => setSelectType(1)}
                style={{
                  width: 30,
                  backgroundColor: '#e2e2e2',
                  marginLeft: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    color: selectedType == 1 ? '#FE724C' : 'white',
                    ...styles.itemType,
                  }}>
                  L
                </Text>
              </TouchableOpacity>
            )}
            {size == null && (
              <TouchableOpacity
                onPress={() => setSelectType(1)}
                style={{
                  width: 30,
                  backgroundColor: '#e2e2e2',
                  marginLeft: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    color: selectedType == 1 ? '#FE724C' : 'white',
                    ...styles.itemType,
                  }}>
                  L
                </Text>
              </TouchableOpacity>
            )}
            {size == 'L' && (
              <TouchableOpacity
                onPress={() => setSelectType(1)}
                style={{
                  width: 30,
                  backgroundColor: '#e2e2e2',
                  marginLeft: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    color: selectedType == 1 ? '#FE724C' : 'white',
                    ...styles.itemType,
                  }}>
                  L
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Text style={styles.savour}>Chicken, Cheese and pineapple</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemFood;
