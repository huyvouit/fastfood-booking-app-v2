import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnBoardingScreen from 'screens/Auth/Onboarding';
// import LoginScreen from 'screens/Auth/Login';
// import RegisterScreen from 'screens/Auth/Register';
import {DrawerScreen} from 'navigation/DrawerNavigation';
// import CartScreen from 'screens/MainLayout/Cart';
import DetailScreen from 'screens/MainLayout/Detail';
import ReviewScreen from 'screens/MainLayout/Review';

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator
    headerMode="none"
    initialRouteName="Drawer"
    screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="OnBoarding" component={OnBoardingScreen} />

    {/* <AuthStack.Screen name="Login" component={LoginScreen} /> */}
    {/* <AuthStack.Screen name="Register" component={RegisterScreen} /> */}
    {/* <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <AuthStack.Screen name="ResetPassword" component={ResetPasswordScreen} /> */}

    {/* temp */}
    {/* <AuthStack.Screen name="CartScreen" component={CartScreen} /> */}
    <AuthStack.Screen name="ReviewScreen" component={ReviewScreen} />
    <AuthStack.Screen name="DetailScreen" component={DetailScreen} />

    <AuthStack.Screen name="Drawer">
      {props => <DrawerScreen {...props} redirect={props.navigation} />}
    </AuthStack.Screen>
  </AuthStack.Navigator>
);

export default AuthStackScreen;
