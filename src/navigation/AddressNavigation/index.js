import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import OnBoardingScreen from 'screens/Profile/Onboarding';

import DetailScreen from 'screens/MainLayout/Detail';

import NewAddressScreen from 'screens/MainLayout/NewAddress';
import AddressBookScreen from 'screens/MainLayout/AddressBook';

const AddressStack = createNativeStackNavigator();

const AddressStackScreen = () => (
  <AddressStack.Navigator
    headerMode="none"
    initialRouteName="AddressBookScreen"
    screenOptions={{headerShown: true}}>
    <AddressStack.Screen name="AddressBookScreen">
      {props => <AddressBookScreen addressNav={props.navigation} />}
    </AddressStack.Screen>

    <AddressStack.Screen name="NewAddressScreen">
      {props => <NewAddressScreen addressNav={props.navigation} />}
    </AddressStack.Screen>
  </AddressStack.Navigator>
);

export default AddressStackScreen;
