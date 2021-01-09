import React from 'react';
import {
  Button, Divider, Layout, TopNavigation,
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../App/themeSlice';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const toggleAppTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Settings" alignment="center" />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button appearance="outline" onPress={toggleAppTheme}>Toggle Theme</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default SettingsScreen;
