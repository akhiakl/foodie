import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import {
  BottomNavigation, BottomNavigationTab, Button, Divider, Icon, withStyles,
} from '@ui-kitten/components';

const HomeIcon = (props) => (
  <Icon {...props} name="home" />
);
const SettingsIcon = (props) => (
  <Icon {...props} name="settings" />
);
const CameraIcon = (props) => (
  <Icon {...props} name="camera" />
);

const BottomTabBar = ({ navigation, state, eva }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigateTo = (index) => {
    if (index !== 1) {
      navigation.navigate(state.routeNames[index > 1 ? index - 1 : index]);
      setSelectedIndex(index);
    }
  };

  const openCamera = () => {
    navigation.navigate('Camera');
  };

  return (
    <>
      <Divider />
      {Platform.OS === 'android'
      && (
      <View
        style={{
          position: 'absolute',
          zIndex: 123,
          bottom: 10,
          left: '50%',
          transform: [{
            translateX: -36,
          }],
          backgroundColor: eva.theme['background-basic-color-1'],
          padding: 10,
          borderRadius: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          shape="rounded"
          onPress={openCamera}
          accessoryLeft={CameraIcon}
        />
      </View>
      )}
      <BottomNavigation
        selectedIndex={selectedIndex}
        appearance="noIndicator"
        onSelect={navigateTo}
      >
        <BottomNavigationTab icon={HomeIcon} />
        <BottomNavigationTab
          title={(evaProps) => Platform.OS !== 'android' && (
          <View
            {...evaProps}
            style={{
              position: 'absolute',
              zIndex: 123,
              bottom: 10,
              left: 20,
              backgroundColor: eva.theme['background-basic-color-1'],
              padding: 10,
              borderRadius: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              shape="rounded"
              onPress={openCamera}
              accessoryLeft={CameraIcon}
            />
          </View>
          )}
        />
        <BottomNavigationTab icon={SettingsIcon} />
      </BottomNavigation>
    </>
  );
};

export default withStyles(BottomTabBar);
