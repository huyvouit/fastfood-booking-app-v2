import productApi from 'api/product_api';
import Icons from 'assets/icons';
import HeaderPage from 'components/Header';
import {LIST_PRODUCT} from 'constants/constants';
import {formatter} from 'helper/formatter';
import React, {useEffect} from 'react';
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
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgXml} from 'react-native-svg';
import Loading from 'screens/Loading';

import styles from './styles';

const CardProduct = ({item, navigation}) => {
  if (item.empty === true) {
    return (
      <View
        style={[
          styles.item,
          styles.itemInvisible,
          {height: Dimensions.get('window').width / numColumns},
        ]}
      />
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('DetailScreen', {
          productId: item?._id,
        })
      }
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
          {item?.description || `Thom ngon tron vi`}
        </Text>
        <Text style={styles.priceProduct}>
          {formatter.format(item.type[0]?.price.$numberDecimal)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// const formatData = (data, numColumns) => {
//   const numberOfFullRows = Math.floor(data.length / numColumns);
//   console.log(numberOfFullRows);
//   let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
//   while (
//     numberOfElementsLastRow !== numColumns &&
//     numberOfElementsLastRow !== 0
//   ) {
//     data.push({empty: true});
//     numberOfElementsLastRow++;
//   }

//   return data;
// };
// const numColumns = 2;

const SearchScreen = ({navigation}) => {
  const [keyword, setKeyword] = React.useState('');
  const [isSubmited, setIsSubmited] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [productList, setProductList] = React.useState([]);

  const fetchProductList = async () => {
    try {
      const params = {
        q: keyword,
      };
      const response = await productApi.getBySearch(params);
      setProductList(response.data.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
    }
  };

  // React.useEffect(() => {
  //   fetchProductList();
  // }, []);

  return (
    <View style={styles.root}>
      <ScrollView>
        <HeaderPage returnPage={() => navigation.goBack()} title="Search" />
        <View style={styles.fieldInputSearch}>
          <TextInput
            autoFocus
            value={keyword}
            onChangeText={text => {
              setKeyword(text);
              setIsSubmited(false);
            }}
            style={styles.inputSearch}
            placeholder="Search for food ..."
            onSubmitEditing={() => {
              fetchProductList();
              setIsSubmited(true);
            }}
          />
          <TouchableOpacity style={styles.iconSearch}>
            <SvgXml xml={Icons.IconSearch} color="#767F9D" />
          </TouchableOpacity>
        </View>

        {isSubmited && keyword != '' && !isLoading ? (
          <>
            <Text style={styles.searching}>
              <Text>Searching for </Text>
              <Text style={styles.keyword}>" {keyword} "</Text>
            </Text>

            <SafeAreaView style={styles.listProduct}>
              {productList?.map((item, index) => {
                return (
                  <CardProduct
                    key={index}
                    item={item}
                    navigation={navigation}
                  />
                );
              })}
            </SafeAreaView>
          </>
        ) : (
          isLoading && <Loading />
        )}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
