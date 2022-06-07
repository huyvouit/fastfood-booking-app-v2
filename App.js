import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import {Provider} from 'react-redux';

import {AuthProvider} from 'contexts/AuthProvider';
import {AuthContext} from 'contexts/AuthProvider';
import RootStackScreen from './src/navigation/RootNavigation';

import store from './src/redux/store';
import {DrawerScreen} from 'navigation/DrawerNavigation';
import AuthStackScreen from 'navigation/AuthNavigation';
import userApi from 'api/user_api';
import Loading from 'screens/Loading';
import SplashScreen from 'screens/Splash';

const Providers = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </AuthProvider>
  );
};

const Routes = () => {
  const {user, setUser, account, setAccount} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const fetchUserInfo = async () => {
    try {
      const response = await userApi.getUserInfo();
      // console.log('getUSER:', response.data.data);
      setAccount(response.data.data);
    } catch (error) {
      console.log('Failed to fetch user: ', error);
    }
  };

  const onAuthStateChanged = user => {
    if (user?.uid) {
      fetchUserInfo(user.uid);
    }
    setUser(user);
    setTimeout(() => {
      if (initializing) setInitializing(false);
    }, 4000);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      {initializing ? (
        <SplashScreen />
      ) : user && account ? (
        <DrawerScreen />
      ) : (
        <AuthStackScreen />
      )}
    </NavigationContainer>
  );
};
const App = () => {
  return <Providers />;
};

export default App;
