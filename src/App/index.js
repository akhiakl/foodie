/* eslint-disable react/jsx-props-no-spreading */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { useSelector, Provider, useDispatch } from 'react-redux';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Appearance } from 'react-native';
import custom from './custom-theme';
import store from './store';
import AppNavigator from './Navigator';
import { getColorScheme, changeSystemScheme } from './themeSlice';

const App = () => {
  const scheme = useSelector(getColorScheme);
  const dispatch = useDispatch();
  const changeTheme = (themeStr) => {
    dispatch(changeSystemScheme(themeStr));
  };
  useEffect(() => {
    Appearance.addChangeListener((event) => {
      changeTheme(event.colorScheme);
    });
    return () => {
      Appearance.removeChangeListener();
    };
  }, [changeTheme]);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva[scheme], ...custom }}>
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
