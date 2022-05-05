import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import Animated from 'react-native-reanimated';
import {SvgXml} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

import HeaderTitle from 'components/HeaderTitle';
import BottomTab from 'components/BottomTab';
import Icons from 'assets/icons';
import {BOTTOM_TABS} from 'constants/constants';

import styles from './styles';
import HomeScreen from './MainLayout/Home';
import ProductScreen from './MainLayout/Product';
import CartScreen from './MainLayout/Cart';
import FavouriteScreen from './MainLayout/Favourite';
import DetailScreen from './MainLayout/Detail';
const MainLayout = props => {
  const {drawerAnimationStyle, selectedTab, dispatch, navigation, commonNav} =
    props;
  const flatListRef = React.useRef();
  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: 'white',
        ...drawerAnimationStyle,
      }}>
      <HeaderTitle
        title={selectedTab.toUpperCase()}
        containerStyle={{
          height: 50,
          paddingHorizontal: 20,
          marginTop: 20,
          alignItems: 'center',
        }}
        leftComponent={
          <TouchableOpacity
            style={styles.iconMenu}
            onPress={() => navigation.openDrawer()}>
            <SvgXml xml={Icons.IconMenu} color="black" width={20} height={20} />
          </TouchableOpacity>
        }
      />
      <View style={{flex: 1}}>
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={16}
          showsHorizontalScrollIndicator={false}
          data={BOTTOM_TABS}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <View style={styles.mainContent}>
                {item.label == 'Cart' && <CartScreen navigation={commonNav} />}
                {item.label == 'Home' && <HomeScreen navigation={commonNav} />}
                {item.label == 'Product' && (
                  <DetailScreen navigation={commonNav} />
                )}
                {item.label == 'Favourite' && (
                  <FavouriteScreen navigation={commonNav} />
                )}
              </View>
            );
          }}
        />
      </View>

      {/* Footer bottom tab */}
      <View style={styles.footerBottomTab}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 4}}
          colors={['#e5e5e5', '#000', '#000']}
          style={styles.linear}
        />
        <BottomTab
          selectedTab={selectedTab}
          dispatch={dispatch}
          flatListRef={flatListRef}
        />
      </View>
    </Animated.View>
  );
};
export default MainLayout;
