/* eslint-disable react/jsx-props-no-spreading */
import 'react-native-gesture-handler';
import React from 'react';
import { useSelector, Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import custom from './custom-theme';
import mapping from './custom-mapping';
import store from './store';
import AppNavigator from './Navigator';
import { selectTheme } from './themeSlice';

const App = () => {
  const theme = useSelector(selectTheme);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} customMapping={mapping} theme={{ ...eva[theme], ...custom }}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
