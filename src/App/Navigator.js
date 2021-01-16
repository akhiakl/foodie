import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import CameraScreen from '../screens/Camera';
import BottomTabBar from '../components/BottomTabBar';
import SettingsScreen from '../screens/Settings';
import ThemeSettingsScreen from '../screens/Settings/ThemeSettings';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const SettingsNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="ThemeSettings" component={ThemeSettingsScreen} />
  </Stack.Navigator>
);

const BlogNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);
const TabNavigator = () => (
  <Tab.Navigator sceneContainerStyle={{ position: 'relative', zIndex: 123 }} tabBar={(props) => <BottomTabBar {...props} />}>
    <Tab.Screen name="Blog" component={BlogNavigator} />
    <Tab.Screen name="Settings" component={SettingsNavigator} />
  </Tab.Navigator>
);
const RootStackScreen = () => (
  <RootStack.Navigator mode="modal" headerMode="none">
    <RootStack.Screen
      name="Main"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <RootStack.Screen name="Camera" component={CameraScreen} />
  </RootStack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <RootStackScreen />
  </NavigationContainer>
);
export default AppNavigator;
