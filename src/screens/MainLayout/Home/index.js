import React, {useRef} from 'react';
import Icons from 'assets/icons';
import ItemCategory from 'components/ItemCategory';
import ItemFood from 'components/ItemFood';
import CardFood from 'components/CardFood';
import {CATEGORY, LIST_PRODUCT} from 'constants/constants';

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

import styles from './styles';

const widthScreen = Dimensions.get('screen').width;
const {height} = Dimensions.get('window');
const HomeScreen = ({navigation}) => {
  const scrollViewRef = useRef();
  const [listCate, setListCate] = React.useState(CATEGORY);
  const [screenHeight, setScreenHeight] = React.useState(height);
  const scrollEnabled = screenHeight > height;

  const onContentSizeChange = (contentWidth, contentHeight) => {
    setScreenHeight(contentHeight);
  };
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        ref={scrollViewRef}
        style={{flex: 1}}
        // scrollEnabled={scrollEnabled}
        contentContainerStyle={styles.scrollview}
        // onContentSizeChange={onContentSizeChange}
      >
        <View style={{flexGrow: 1}}>
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
          {/* <View style={styles.bestSeller}>
        <Text style={styles.textMenu}>Best Seller</Text>
      </View>
      <ItemFood /> */}
          <View style={styles.popularFood}>
            <Text style={styles.textMenu}>Popular Items</Text>
          </View>
          <SafeAreaView style={styles.listProduct}>
            {LIST_PRODUCT.slice(0, 4).map((item, index) => {
              return (
                <CardFood key={index} item={item} navigation={navigation} />
              );
            })}
          </SafeAreaView>
          {/* <View style={styles.listCate}>
        <FlatList
          style={{
            width: widthScreen + 5,
            height: '100%',
            backgroundColor: 'red',
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={listCate}
          pagingEnabled={true}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={{marginBottom: 8}}>
              <ItemCategory image={item.image} category={item.category} />
            </View>
          )}
        />
      </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
