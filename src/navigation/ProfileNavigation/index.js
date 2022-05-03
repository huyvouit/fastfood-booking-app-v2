import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import OnBoardingScreen from 'screens/Profile/Onboarding';

import DetailScreen from 'screens/MainLayout/Detail';
import ReviewScreen from 'screens/MainLayout/Review';
import ProfileScreen from 'screens/Profile';

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    headerMode="none"
    initialRouteName="ProfileScreen"
    screenOptions={{headerShown: true}}>
    <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />

    {/* <ProfileStack.Screen name="Login" component={LoginScreen} /> */}
    {/* <ProfileStack.Screen name="Register" component={RegisterScreen} /> */}
    {/* <ProfileStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <ProfileStack.Screen name="ResetPassword" component={ResetPasswordScreen} /> */}

    {/* temp */}
    {/* <ProfileStack.Screen name="CartScreen" component={CartScreen} /> */}
    <ProfileStack.Screen name="ReviewScreen" component={ReviewScreen} />
    <ProfileStack.Screen name="DetailScreen" component={DetailScreen} />
  </ProfileStack.Navigator>
);

export default ProfileStackScreen;
