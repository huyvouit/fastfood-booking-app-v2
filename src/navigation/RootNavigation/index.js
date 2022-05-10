import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DrawerScreen} from '../DrawerNavigation';
import SplashScreen from '../../screens/Splash';
import AuthStackScreen from '../../navigation/AuthNavigation';

const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      <RootStack.Screen
        name="AuthScreen"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
      {/* <RootStack.Screen name="SplashScreen" component={SplashScreen} /> */}

      <RootStack.Screen
        name="Drawer"
        component={DrawerScreen}
        options={{
          animationEnabled: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
