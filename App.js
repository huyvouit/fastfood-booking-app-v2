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
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  console.log(user);
  return (
    <NavigationContainer>
      {user ? <DrawerScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};
const App = () => {
  return <Providers />;
};

export default App;
