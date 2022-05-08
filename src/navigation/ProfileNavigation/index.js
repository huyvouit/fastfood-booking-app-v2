import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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

    {/* <ProfileStack.Screen name="ReviewScreen" component={ReviewScreen} /> */}
    {/* <ProfileStack.Screen name="DetailScreen" component={DetailScreen} /> */}
  </ProfileStack.Navigator>
);

export default ProfileStackScreen;
