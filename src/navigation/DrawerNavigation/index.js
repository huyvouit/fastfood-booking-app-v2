import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Animated, {interpolateNode} from 'react-native-reanimated';
import {SvgXml} from 'react-native-svg';

import {useSelector, useDispatch} from 'react-redux';
import {setSelectedTab} from '../../redux/actions';

import MainLayout from 'screens/MainLayout';
import {COLORS} from '../../constants';
import Icons from 'assets/icons';

const CustomDrawerContent = ({navigation, selectedTab, dispatch}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1, padding: 12}}>
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigation.closeDrawer()}>
            <SvgXml
              xml={Icons.IconClose}
              color="white"
              width={30}
              height={30}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: 12,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SvgXml
                xml={Icons.IconUser}
                color="black"
                width={30}
                height={30}
              />
            </View>
            <View style={{marginLeft: 12}}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  fontFamily: 'Roboto-Regular',
                  color: 'white',
                }}>
                User acount
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Roboto-Regular',
                  color: 'white',
                }}>
                View my profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginTop: 24}}>
          <CustomDrawerItem
            label="Home"
            icon={Icons.IconHome}
            isFocused={selectedTab == 'Home'}
            onPress={() => {
              dispatch(setSelectedTab('Home'));
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label="Product"
            icon={Icons.IconPackage}
            isFocused={selectedTab == 'Product'}
            onPress={() => {
              dispatch(setSelectedTab('Product'));
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label="Cart"
            icon={Icons.IconCart}
            isFocused={selectedTab == 'Cart'}
            onPress={() => {
              dispatch(setSelectedTab('Cart'));
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label="Favourite"
            icon={Icons.IconFavourite}
            isFocused={selectedTab == 'Favourite'}
            onPress={() => {
              dispatch(setSelectedTab('Favourite'));
              navigation.navigate('MainLayout');
            }}
          />

          <View
            style={{
              height: 1,
              marginVertical: 12,
              marginLeft: 12,
              backgroundColor: 'white',
            }}></View>
          <CustomDrawerItem label="My Order" icon={Icons.IconHome} />
          <CustomDrawerItem label="Voucher" icon={Icons.IconHome} />
          <CustomDrawerItem label="Contact Us" icon={Icons.IconContact} />
        </View>
        <View style={{marginBottom: 12}}>
          <CustomDrawerItem label="Logout" icon={Icons.IconLogout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawerItem = ({label, icon, isFocused, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: 12,
        alignItems: 'center',
        paddingLeft: 12,
        borderRadius: 8,
        backgroundColor: isFocused ? 'rgba(100, 100, 100, 0.2)' : null,
      }}
      onPress={onPress}>
      {icon && <SvgXml xml={icon} color="white" />}
      <Text style={{marginLeft: 15, color: 'white', fontSize: 18}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const Drawer = createDrawerNavigator();

export const DrawerScreen = () => {
  const selectedTab = useSelector(state => state.selectedTab);
  const dispatch = useDispatch();

  const [progress, setProgress] = React.useState(new Animated.Value(0.01));

  const scale = interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  // const scale = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.8],
  // });

  // const borderRadius = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 10],
  // });

  const animatedStyle = {borderRadius, transform: [{scale}]};

  return (
    <View style={{flex: 1, backgroundColor: '#FE724C'}}>
      <Drawer.Navigator
        initialRoutName="MainLayout"
        screenOptions={{
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          },
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        drawerContent={props => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);
          return (
            <CustomDrawerContent
              navigation={props.navigation}
              selectedTab={selectedTab}
              dispatch={dispatch}
            />
          );
        }}>
        <Drawer.Screen name="MainLayout" options={{headerShown: false}}>
          {props => (
            <MainLayout
              {...props}
              drawerAnimationStyle={animatedStyle}
              selectedTab={selectedTab}
              dispatch={dispatch}
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

// function mapStateToProps(state) {
//   return {
//     selectedTab: state.tabReducer.selectedTab,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     setSelectedTab: selectedTab => {
//       return dispatch(setSelectedTab(selectedTab));
//     },
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DrawerScreen);
