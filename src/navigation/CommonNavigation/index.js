import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import {DrawerScreen} from '../DrawerNavigation';

import MainLayout from 'screens/MainLayout';
import SearchScreen from 'screens/MainLayout/Search';

const CommonStack = createNativeStackNavigator();

const CommonStackScreen = props => {
  const {drawerAnimationStyle, selectedTab, dispatch, navigation, commonNav} =
    props;
  return (
    <CommonStack.Navigator
      initialRouteName="MainLayout"
      screenOptions={{headerShown: false}}>
      <CommonStack.Screen
        name="Mainlayout"
        options={{
          animationEnabled: false,
        }}>
        {props => (
          <MainLayout
            navigation={navigation}
            commonNav={props.navigation}
            drawerAnimationStyle={drawerAnimationStyle}
            selectedTab={selectedTab}
            dispatch={dispatch}
          />
        )}
      </CommonStack.Screen>
      <CommonStack.Screen name="Search" component={SearchScreen} />
    </CommonStack.Navigator>
  );
};

export default CommonStackScreen;
