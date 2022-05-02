import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {SvgXml} from 'react-native-svg';
import {setSelectedTab} from 'redux/actions';
import Icons from '../../assets/icons';

import styles from './styles';

const TabButton = props => {
  const {label, icon, isFocused, onPress, outerStyle, interStyle} = props;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.tabActived, outerStyle]}>
        <Animated.View style={[styles.actived, interStyle]}>
          <SvgXml
            xml={icon}
            width={20}
            height={20}
            color={isFocused ? 'white' : 'gray'}
          />
          {isFocused && (
            <Text
              numberOfLines={1}
              style={{color: isFocused ? 'white' : 'gray', ...styles.textTab}}>
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const BottomTab = props => {
  const {action, selectedTab, dispatch, flatListRef} = props;

  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue('white');
  const productTabFlex = useSharedValue(1);
  const productTabColor = useSharedValue('white');
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue('white');
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue('white');

  const homeFlexStyle = useAnimatedStyle(() => {
    return {
      flex: homeTabFlex.value,
    };
  });
  const homeColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: homeTabColor.value,
    };
  });
  const productFlexStyle = useAnimatedStyle(() => {
    return {
      flex: productTabFlex.value,
    };
  });
  const productColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: productTabColor.value,
    };
  });
  const cartFlexStyle = useAnimatedStyle(() => {
    return {
      flex: cartTabFlex.value,
    };
  });
  const cartColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: cartTabColor.value,
    };
  });
  const favouriteFlexStyle = useAnimatedStyle(() => {
    return {
      flex: favouriteTabFlex.value,
    };
  });
  const favouriteColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: favouriteTabColor.value,
    };
  });

  useEffect(() => {
    if (selectedTab == 'Home') {
      flatListRef?.current?.scrollToIndex({
        index: 0,
        animated: false,
      });
      homeTabFlex.value = withTiming(4, {duration: 500});
      homeTabColor.value = withTiming('#FE724C');
    } else {
      homeTabFlex.value = withTiming(1, {duration: 500});
      homeTabColor.value = withTiming('white');
    }
    if (selectedTab == 'Product') {
      flatListRef?.current?.scrollToIndex({
        index: 1,
        animated: false,
      });

      productTabFlex.value = withTiming(4, {duration: 500});
      productTabColor.value = withTiming('#FE724C');
    } else {
      productTabFlex.value = withTiming(1, {duration: 500});
      productTabColor.value = withTiming('white');
    }
    if (selectedTab == 'Cart') {
      flatListRef?.current?.scrollToIndex({
        index: 2,
        animated: false,
      });

      cartTabFlex.value = withTiming(4, {duration: 500});
      cartTabColor.value = withTiming('#FE724C');
    } else {
      cartTabFlex.value = withTiming(1, {duration: 500});
      cartTabColor.value = withTiming('white');
    }
    if (selectedTab == 'Favourite') {
      flatListRef?.current?.scrollToIndex({
        index: 3,
        animated: false,
      });

      favouriteTabFlex.value = withTiming(4, {duration: 500});
      favouriteTabColor.value = withTiming('#FE724C');
    } else {
      favouriteTabFlex.value = withTiming(1, {duration: 500});
      favouriteTabColor.value = withTiming('white');
    }
  }, [selectedTab]);

  return (
    <View style={styles.container}>
      <TabButton
        label="Home"
        icon={Icons.IconHome}
        isFocused={selectedTab == 'Home'}
        outerStyle={homeFlexStyle}
        interStyle={homeColorStyle}
        onPress={() => dispatch(setSelectedTab('Home'))}
      />
      <TabButton
        label="Product"
        icon={Icons.IconPackage}
        isFocused={selectedTab == 'Product'}
        outerStyle={productFlexStyle}
        interStyle={productColorStyle}
        onPress={() => dispatch(setSelectedTab('Product'))}
      />
      <TabButton
        label="Cart"
        icon={Icons.IconCart}
        isFocused={selectedTab == 'Cart'}
        outerStyle={cartFlexStyle}
        interStyle={cartColorStyle}
        onPress={() => dispatch(setSelectedTab('Cart'))}
      />
      <TabButton
        label="Favourite"
        icon={Icons.IconFavourite}
        isFocused={selectedTab == 'Favourite'}
        outerStyle={favouriteFlexStyle}
        interStyle={favouriteColorStyle}
        onPress={() => dispatch(setSelectedTab('Favourite'))}
      />
    </View>
  );
};

export default BottomTab;
