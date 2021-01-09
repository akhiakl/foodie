import React from 'react';
import { View } from 'react-native';
import {
  BottomNavigation, BottomNavigationTab, Button, Divider, Icon,
} from '@ui-kitten/components';

const PersonIcon = (props) => (
  <Icon {...props} name="person-outline" />
);

const BellIcon = (props) => (
  <Icon {...props} name="bell-outline" />
);

const EmailIcon = (props) => (
  <Icon {...props} name="email-outline" />
);
const SettingsIcon = (props) => (
  <Icon {...props} name="settings" />
);
const CameraIcon = (props) => (
  <Icon {...props} name="camera" />
);

const BottomTabBar = ({ navigation, state }) => (
  <>
    <Divider />
    <BottomNavigation
      selectedIndex={state.index}
      appearance="noIndicator"
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab icon={PersonIcon} />
      <BottomNavigationTab icon={BellIcon} />
      <View style={{ position: 'relative' }}>
        <View style={{
          position: 'absolute',
          bottom: 10,
          left: -10,
          backgroundColor: '#fafafa',
          padding: 10,
          borderRadius: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <Button
            appearance="filled"
            shape="rounded"
            accessoryLeft={CameraIcon}
            onPress={() => {}}
          />
        </View>
      </View>
      <BottomNavigationTab icon={EmailIcon} />
      <BottomNavigationTab icon={SettingsIcon} />
    </BottomNavigation>
  </>
);

export default BottomTabBar;
