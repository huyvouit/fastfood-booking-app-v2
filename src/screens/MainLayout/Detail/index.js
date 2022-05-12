import React, {useState, useEffect, useContext} from 'react';

import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Swiper from 'react-native-swiper/src';
import Icons from '../../../assets/icons';

import BackButton from '../../../components/BackButton';
import DecreaseButton from '../../../components/DecreaseButton';
import HeaderPage from '../../../components/Header';
import IncreaseButton from '../../../components/IncreaseButton';
import styles from './styles';
import {SvgFromXml, SvgXml} from 'react-native-svg';
import ChevronLeft from '../../../assets/icons/chevron-left.svg';
import productApi from 'api/product_api';
import Loading from 'screens/Loading';
import {formatter} from 'helper/formatter';
import cartApi from 'api/cart_api';
import {AuthContext} from 'contexts/AuthProvider';

const DetailScreen = ({navigation, route}) => {
  const {productId} = route.params;
  const {account, cart, setCart} = useContext(AuthContext);
  console.log(productId);
  const [data, setNewPlants] = useState([
    {
      id: 0,
      name: 'Plant 1',

      favourite: false,
    },
    {
      id: 1,
      name: 'Plant 2',

      favourite: true,
    },
    {
      id: 2,
      name: 'Plant 3',

      favourite: false,
    },
    {
      id: 3,
      name: 'Plant 4',

      favourite: false,
    },
    {
      id: 4,
      name: 'Plant 5',

      favourite: false,
    },
    {
      id: 5,
      name: 'Plant 6',

      favourite: false,
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [count, setCount] = useState(1);

  function countSubClick() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function countPlusClick() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  const fetchProductList = async sortType => {
    try {
      const params = {
        id: productId,
      };

      const response = await productApi.getById(params);
      if (response.data) {
        console.log(response.data.data.category);
        setProduct(response.data.data);
        await fetchRelatedProduct(response.data.data.category);
      }
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
    }
  };
  const fetchRelatedProduct = async type => {
    try {
      const params = {category: type, currentPage: 2, productPerPage: 4};

      const response = await productApi.getByFilter(params);
      if (response.data) {
        setRelatedProduct(response.data.filteredProducts.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchProductList();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const addToCart = async () => {
    try {
      const result = await cartApi.addToCart({
        userId: account?._id,
        productId,
        size: 'M',
        quantity: count,
        price: count * product.type[0]?.price.$numberDecimal,
      });
      if (result.data.success) {
        console.log(result.data.message);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView>
          <Swiper style={styles.swiper} autoplay>
            {product.images?.map((item, index) => {
              return (
                <Image
                  key={index}
                  source={{uri: item}}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                  }}
                />
              );
            })}
          </Swiper>
          <View style={{position: 'absolute', top: 0}}>
            <HeaderPage returnPage={() => navigation.goBack()} />
          </View>
          <View style={styles.content}>
            <Text style={styles.nameProduct}>{product?.name}</Text>
            {/* <View style={styles.iconHeart}>
            <ChevronLeft width={24} height={24} />
          </View> */}
            <View style={styles.subInfo}>
              <Text style={styles.price}>
                {formatter.format(product.type[0]?.price.$numberDecimal)}
              </Text>
              <View style={styles.quantity}>
                <DecreaseButton action={countSubClick} />
                <Text style={styles.quantityItem}>{count}</Text>
                <IncreaseButton action={countPlusClick} />
              </View>
            </View>

            <View style={styles.description}>
              <Text style={styles.descText}>{product?.description}</Text>
            </View>

            <View styles={{marginTop: 20}}>
              <Text style={styles.titleItem}>Related</Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={relatedProduct}
                keyExtractor={item => item._id.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={{width: 200, marginHorizontal: 8}}
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.replace('DetailScreen', {productId: item._id})
                    }>
                    <Image
                      source={{uri: item?.mainImage}}
                      alt=""
                      style={{
                        width: 200,
                        height: 250,
                        resizeMode: 'cover',
                      }}
                    />
                    <View style={styles.infoProduct}>
                      <Text style={styles.name} numberOfLines={1}>
                        {item?.name}
                      </Text>
                      <Text style={styles.priceProduct}>
                        {' '}
                        {formatter.format(item.type[0]?.price.$numberDecimal)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>

            <View style={{marginTop: 20}}>
              <Text style={styles.titleItem}>Reviews</Text>
              <View style={styles.review}>
                <View style={styles.infoUser}>
                  <View
                    style={{
                      position: 'relative',
                      width: 50,
                      height: 50,
                    }}>
                    <Image
                      source={require('../../../assets/images/splash-screen.jpg')}
                      style={{borderRadius: 50, width: 50, height: 50}}
                    />
                    <View style={styles.rating}>
                      <Text style={styles.textRating}>4.5</Text>
                    </View>
                  </View>
                  <View style={{marginLeft: 10}}>
                    <Text style={styles.nameUser} numberOfLines={1}>
                      Gonela Solom
                    </Text>
                    <Text style={styles.createDate}>22/06/2021</Text>
                  </View>
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={styles.contentReview} numberOfLines={5}>
                    Been a life saver for keeping our sanity during the
                    pandemic, although they could improve some of their ui and
                    how they handle specials as it often is unclear how to use
                    them or everything is sold out so fast it feels a bit bait
                    and switch. Still I'd be stir crazy and losing track of days
                    without so...
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          // position: 'absolute',
          height: 80,
          paddingVertical: 10,
          // left: 0,
          // right: 0,
          // bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
          elevation: 20,
        }}>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => {
            addToCart();
            setCart(Math.floor(Math.random() * 1001));
          }}>
          <View style={styles.iconBag}>
            <SvgFromXml xml={Icons.IconCart} color={'#FE724C'} />
            {/* <Icons.Bag fill={'#FE724C'} /> */}
          </View>
          <Text style={styles.textBtn}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;
