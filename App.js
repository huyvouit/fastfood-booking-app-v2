import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStackScreen from './src/navigation/RootNavigation';
import {SafeAreaView, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {AuthProvider} from 'contexts/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </Provider>
    </AuthProvider>
  );
};

export default App;
