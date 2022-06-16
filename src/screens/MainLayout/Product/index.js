import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, Dimensions} from 'react-native';
import {TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';
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
  const [isLazyLoad, setIsLazyLoad] = useState(false);
  const [maxPage, setMaxPage] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState(0);
  const [productList, setProductList] = useState([]);
  const [filter, setFilter] = useState({
    category: null,
    higherPrice: null,
    lowerPrice: null,
    size: null,
    rating: null,
  });
  // const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  //   const paddingToBottom = 140;
  //   return (
  //     layoutMeasurement.height + contentOffset.y >=
  //     contentSize.height - paddingToBottom
  //   );
  // };

  const fetchProductList = async currentPage => {
    // setIsLoading(true);
    try {
      const params = {
        currentPage,
        productPerPage: 10,
        sortType,
        category: filter.category == 'All' ? '' : filter.category,
        higherPrice: filter.higherPrice,
        lowerPrice: filter.lowerPrice,
        size: filter.size == 'All' ? '' : filter.size,
        rating: filter.rating,
      };
      console.log(params);
      const response = await productApi.getByFilter(params);
      // console.log(response.data.filteredProducts);
      setProductList(response.data.filteredProducts.data);
      // setMaxPage(response.data.filteredProducts.maxPage);
    } catch (error) {
      console.log('Failed to fetch product list: ', error, currentPage);
    }
  };

  // const handleLoadMore = async () => {
  //   setIsLazyLoad(true);
  //   await fetchProductList(currentPage + 1);
  //   setCurrentPage(currentPage + 1);
  //   setIsLazyLoad(false);
  // };
  useEffect(() => {
    fetchProductList(currentPage);
  }, [filter, sortType]);

  // if (isLoading) {
  //   return <Loading />;
  // }
  // console.log(filter);
  console.log(productList.length);
  return (
    <View style={styles.container}>
      <ScrollView
        style={{height: 300}}
        // onMomentumScrollEnd
        // onMomentumScrollEnd={e => {
        //   var windowHeight = e.nativeEvent.layoutMeasurement.height,
        //     height = e.nativeEvent.contentSize.height,
        //     offset = e.nativeEvent.contentOffset.y;

        //   if (
        //     windowHeight + offset >= height - 100 &&
        //     currentPage <= maxPage &&
        //     currentPage < 5
        //   ) {
        //     handleLoadMore();
        //   }
        // }}
      >
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
            action={() => {
              fetchProductList(currentPage);
            }}
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

        <View style={{paddingHorizontal: 20}}>
          {/* <FlatList
              data={productList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <ItemFood
                    key={index}
                    navigation={navigation}
                    product={item}
                    size={filter.size}
                  />
                );
              }}
            
            /> */}

          {productList.map((item, index) => (
            <ItemFood
              key={index}
              navigation={navigation}
              product={item}
              size={filter.size}
            />
          ))}
        </View>
        {isLazyLoad && <Loading />}
      </ScrollView>
    </View>
  );
};

export default ProductScreen;
