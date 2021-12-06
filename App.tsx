/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/redux/store/index';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Navbar from './src/components/navbar/Navbar';
import Home from './src/containers/home/Home';
/**
 * The component linked to the entry point of the app, which wraps the main component in a global state provider. 
 */
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView>
          <Navbar />
          <Home />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
