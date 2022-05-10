import React, {useState, useEffect} from 'react';

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
import {SvgXml} from 'react-native-svg';
import ChevronLeft from '../../../assets/icons/chevron-left.svg';
import productApi from 'api/product_api';

const DetailScreen = ({navigation, route}) => {
  const {productId} = route.params;
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
  const [productList, setProductList] = useState([]);

  const fetchProductList = async sortType => {
    try {
      const params = {
        id: productId,
      };
      const response = await productApi.getById(params);
      // console.log(response.data.filteredProducts);
      setProductList(response.data.filteredProducts.data);
      setIsLoading(false);
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
    }
  };
  // useEffect(() => {
  //   fetchProductList();
  // }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="small" color="orange" />
      </View>
    );
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <Swiper style={styles.swiper} autoplay>
          <Image
            source={require('../../../assets/images/splash-screen.jpg')}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
          <Image
            source={require('../../../assets/images/splash-screen.jpg')}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
          <Image
            source={require('../../../assets/images/splash-screen.jpg')}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
        </Swiper>
        <View style={{position: 'absolute', top: 0}}>
          <HeaderPage returnPage={() => navigation.goBack()} />
        </View>
        <View style={styles.content}>
          <Text style={styles.nameProduct}>Ground Beef Tacos</Text>
          {/* <View style={styles.iconHeart}>
            <ChevronLeft width={24} height={24} />
          </View> */}
          <View style={styles.subInfo}>
            <Text style={styles.price}>40000 VND</Text>
            <View style={styles.quantity}>
              <DecreaseButton action={() => console.log('asdsd')} />
              <Text style={styles.quantityItem}>1</Text>
              <IncreaseButton action={() => {}} />
            </View>
          </View>

          <View style={styles.description}>
            <Text style={styles.descText}>
              Brown the beef better. Lean ground beef - I like to use 85% lean
              angus. Garlic - use fresh chopped. Spices - chili powder, cumin,
              onion powder
            </Text>
          </View>

          <View styles={{marginTop: 20}}>
            <Text style={styles.titleItem}>Related</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <View style={{width: 200, marginHorizontal: 8}}>
                  <Image
                    source={require('../../../assets/images/splash-screen.jpg')}
                    alt=""
                    style={{
                      width: 200,
                      height: 250,
                      resizeMode: 'cover',
                    }}
                  />
                  <View style={styles.infoProduct}>
                    <Text style={styles.name} numberOfLines={1}>
                      Ground Beef Tacos
                    </Text>
                    <Text style={styles.priceProduct}>25000 VND</Text>
                  </View>
                </View>
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
                  Been a life saver for keeping our sanity during the pandemic,
                  although they could improve some of their ui and how they
                  handle specials as it often is unclear how to use them or
                  everything is sold out so fast it feels a bit bait and switch.
                  Still I'd be stir crazy and losing track of days without so...
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',

            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <View style={styles.btnAdd}>
            <View style={styles.iconBag}>
              {/* <Icons.Bag fill={'#FE724C'} /> */}
            </View>
            <Text style={styles.textBtn}>Add to cart</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
