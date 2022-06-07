import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {SvgXml} from 'react-native-svg';

import Icons from 'assets/icons';
import Images from 'assets/images';
import ItemFood from 'components/ItemFood';
import FilterModal from 'components/FilterModal';
import {LIST_SHORTING} from 'constants/constants';

import productApi from 'api/product_api';

import styles from './styles';
import Loading from 'screens/Loading';

const ProductScreen = ({navigation}) => {
  const [showFilterModal, setShowFilterModal] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState(0);
  const [productList, setProductList] = useState([]);
  const [filter, setFilter] = useState({
    category: null,
    higherPrice: null,
    lowerPrice: null,
    size: null,
    rating: null,
  });
  const fetchProductList = async () => {
    setIsLoading(true);
    try {
      const params = {
        currentPage: 1,
        productPerPage: 10,
        sortType,
        category: filter.category == 'All' ? '' : filter.category,
        higherPrice: filter.higherPrice,
        lowerPrice: filter.lowerPrice,
        size: filter.size == 'All' ? '' : filter.size,
        rating: filter.rating,
      };

      const response = await productApi.getByFilter(params);
      // console.log(response.data.filteredProducts);
      setProductList(response.data.filteredProducts.data);
      setIsLoading(false);
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
    }
  };
  useEffect(() => {
    fetchProductList();
  }, [filter, sortType]);

  // if (isLoading) {
  //   return <Loading />;
  // }
  // console.log(filter);
  return (
    <View style={styles.container}>
      <ScrollView style={{height: 300}}>
        <View style={{height: 300, flexDirection: 'row'}}>
          <Text
            style={{
              position: 'absolute',
              bottom: 50,
              width: 140,
              fontSize: 50,
              fontWeight: '700',
              paddingLeft: 20,
            }}>
            <Text>Fast</Text>
            <Text style={{color: '#FE724C', marginLeft: 15}}>Food</Text>
          </Text>
          <Image
            source={Images.Poster2}
            resizeMode="cover"
            style={styles.image}></Image>
        </View>
        {showFilterModal && (
          <FilterModal
            setShowFilterModal={setShowFilterModal}
            isVisible={showFilterModal}
            onClose={() => setShowFilterModal(false)}
            setFilter={setFilter}
            filter={filter}
            action={fetchProductList}
          />
        )}
        <View style={styles.title}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Short price by: </Text>

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
                setSortType(index);
                // fetchProductList(index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.iconFilter}
            onPress={() => setShowFilterModal(true)}
            activeOpacity={0.8}>
            <SvgXml
              xml={Icons.IconFilter}
              fill="#FE724C"
              width={24}
              height={24}
            />
          </TouchableOpacity>
        </View>
        {isLoading ? (
          <Loading />
        ) : (
          <View style={{paddingHorizontal: 20}}>
            {productList.map((item, index) => (
              <ItemFood
                key={index}
                navigation={navigation}
                product={item}
                size={filter.size}
              />
            ))}
          </View>
        )}
        {/* <View style={styles.items}>
          <Image source={Pizza} style={styles.img_container} />

          <Text style={styles.price}>
            <Text style={{color: 'red'}}>$</Text>
            10.35
          </Text>

          <View style={styles.iconHeart}>
            <SvgXml
              xml={Icons.IconFavourite}
              fill="white"
              width={30}
              height={30}
            />
          </View>

          <View style={styles.rate}>
            <Text style={styles.rateText}>4.5 </Text>
            <View style={styles.iconStar}>
              <SvgXml
                xml={Icons.IconStar}
                fill="yellow"
                width={16}
                height={16}
              />
            </View>
            <Text style={{color: '#9796A1'}}> (25+)</Text>
          </View>

          <Text
            style={{
              color: '#323643',
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 10,
              marginLeft: 15,
            }}>
            Chicken greys
          </Text>
          <Text style={{color: '#323643', marginTop: 5, marginLeft: 15}}>
            Brown the beef better. Lean ground beef . I like to use 85% lean
            angus. Garlic . use fresh chopped. Spices . chili powder, cumin,
            onion powder.
          </Text>
        </View> */}
      </ScrollView>
    </View>
  );
};

export default ProductScreen;
