import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnBoardingScreen from 'screens/Auth/Onboarding';
import LoginScreen from 'screens/Auth/Login';
// import RegisterScreen from 'screens/Auth/Register';
import {DrawerScreen} from 'navigation/DrawerNavigation';
// import CartScreen from 'screens/MainLayout/Cart';
import DetailScreen from 'screens/MainLayout/Detail';
import ReviewScreen from 'screens/MainLayout/Review';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-community/google-signin';
const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)

    GoogleSignin.configure({
      webClientId:
        '59817141190-ceojgpdems4506636fsvl1l1lmke8kuo.apps.googleusercontent.com',
    });
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <AuthStack.Navigator
      headerMode="none"
      initialRouteName={routeName}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="OnBoarding" component={OnBoardingScreen} />

      <AuthStack.Screen name="Login">
        {props => <LoginScreen {...props} redirect={props.navigation} />}
      </AuthStack.Screen>
      {/* <AuthStack.Screen name="Register" component={RegisterScreen} /> */}
      {/* <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <AuthStack.Screen name="ResetPassword" component={ResetPasswordScreen} /> */}

      {/* temp */}
      {/* <AuthStack.Screen name="CartScreen" component={CartScreen} /> */}
      {/* <AuthStack.Screen name="ReviewScreen" component={ReviewScreen} /> */}
      {/* <AuthStack.Screen name="DetailScreen" component={DetailScreen} /> */}

      <AuthStack.Screen name="Drawer">
        {props => <DrawerScreen {...props} redirect={props.navigation} />}
      </AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
