import React, {useRef} from 'react';
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
import Swiper from 'react-native-swiper/src';

import Icons from 'assets/icons';
import {CATEGORY, LIST_PRODUCT} from 'constants/constants';
import ItemCategory from 'components/ItemCategory';
import ItemFood from 'components/ItemFood';
import CardFood from 'components/CardFood';

import styles from './styles';
import Images from 'assets/images';
import { FlatGrid } from 'react-native-super-grid';

const widthScreen = Dimensions.get('screen').width;
const {height} = Dimensions.get('window');
const HomeScreen = ({navigation}) => {
  const scrollViewRef = useRef();
  const [listCate, setListCate] = React.useState([
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

  const [items, setItems] = React.useState([
    { content: 'UP TO 33% OFF', note: 'on KFC' , code: '#FF0000', image: Images.KFC},
    { content: '60% OFF', note: 'on BOWL COMPANY', code: '#FF8C00', image: Images.Bowl_Company},
    { content: '40% OFF', note: 'on MCDONALD'+"'S" , code: '#FFD700', image: Images.KFC},
    { content: '20% OFF', note: 'on STARBUCK', code: '#2E8B57', image: Images.Starbuck},
  ]);

  function renderCategory() {
    return (
      <FlatList
        horizontal={true}
        data={listCate}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={{marginBottom: 8}}>
            {/* <Text>{item.name}</Text> */}
            <ItemCategory image={item.image} category={item.category} />
          </View>
        )}
      />
    );
  }
  const [screenHeight, setScreenHeight] = React.useState(height);
  const scrollEnabled = screenHeight > height;

  const onContentSizeChange = (contentWidth, contentHeight) => {
    setScreenHeight(contentHeight);
  };
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        // ref={scrollViewRef}
        // style={{flex: 1}}
        // scrollEnabled={scrollEnabled}
        // contentContainerStyle={styles.scrollview}
        // onContentSizeChange={onContentSizeChange}
        style={{height: 300}}>
        <Text style={styles.textIntro}>What would you like to order</Text>
        <View style={styles.fieldInputSearch}>
          <TextInput
            // onAccessibilityTap={() => navigation.navigate('Search')}
            style={styles.inputSearch}
            // editable={false}
            onTouchStart={() => navigation.navigate('Search')}
            pointerEvents="none"
            placeholder="Search for food ..."></TextInput>
          <TouchableOpacity style={styles.iconSearch}>
            <SvgXml xml={Icons.IconSearch} color="#767F9D" />
          </TouchableOpacity>
        </View>
        <View style={styles.slider}>
          <Swiper style={styles.swiper} autoplay>
            <Image source={Images.slider1} alt="" style={styles.imageSlider} />
            <Image source={Images.slider2} alt="" style={styles.imageSlider} />
            <Image source={Images.slider3} alt="" style={styles.imageSlider} />
          </Swiper>
        </View>
        {/* <View style={styles.bestSeller}>
        <Text style={styles.textMenu}>Best Seller</Text>
      </View>
      <ItemFood /> */}
        <View style={styles.popularFood}>
          <Text style={styles.textMenu}>Popular Items</Text>
        </View>
        <SafeAreaView style={styles.listProduct}>
          {LIST_PRODUCT.slice(0, 4).map((item, index) => {
            return <CardFood key={index} item={item} navigation={navigation} />;
          })}
        </SafeAreaView>
        {/* <View>{renderCategory()}</View> */}

        <View style={styles.HappyDeals}>
          <Text style={styles.textMenu}>Happy Deals</Text>
          <Text style={styles.note}>
            Relish a big binge with our biggest offers
          </Text>
          <TouchableOpacity style={styles.mainItem}>
            <View style={styles.text}>
              <Text style={styles.textTitle}>Rescued Food</Text>
              <Text style={styles.textNote}>Saving food and hunger.</Text>
              <Text style={styles.textContent}>
                Left over food and supplies are gathered from food venders and
                chefs, and are sold for 50% off!
              </Text>
            </View>
            <View style={styles.image}>
              <Image source={Images.happydeals1} style={styles.mainImage} />
            </View>
          </TouchableOpacity>
          <View style={styles.ortherItem}>
            <TouchableOpacity style={styles.ortherItem_1}>
              <View style={styles.text_2}>
                <Text style={styles.textTitle}>LAAARGE DISCOUNTS</Text>
                <Text style={styles.textNote}>Upto 120 OFF</Text>
                <Text style={styles.textContent}>No upper limit</Text>
              </View>
              <Image source={Images.Poster2} style={styles.otherImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ortherItem_2}>
              <View style={styles.text_2}>
                <Text style={styles.textTitle}>TRY NEW</Text>
                <Text style={styles.textContent}>
                  Explore unique tastes from new eateries
                </Text>
              </View>
              <Image source={Images.Poster2} style={styles.otherImage} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              width: '100%',
              color: '#C0C0C0',
              top: -15,
              marginBottom: 10,
            }}></View>
        </View>

        <View style={styles.voucher}>
          <Text style={styles.textMenu}>Exclusively on FastFood</Text>
          <Text style={styles.note}>Deal-icious offers from top brands!</Text>
          <FlatGrid
            itemDimension={150}
            data={items}
            style={styles.gridView}
            spacing={15}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[styles.itemContainer, {backgroundColor: item.code}]}>
                <Image source={item.image} style={styles.imageVoucher}/>
                <Text style={styles.itemName}>{item.content}</Text>
                <Text style={styles.itemCode}>{item.note}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
