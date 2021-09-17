/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './src/config/redux/store';
import NavigatorApp from './src/config/routes';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigatorApp />
      </SafeAreaView>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={theme}>
            <App />
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default Main;
