import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native';
import {
  Layout, Text, TopNavigation,
} from '@ui-kitten/components';
import HomeScreen from '../screens/Home';
import CameraScreen from '../screens/Camera';
import BottomTabBar from '../components/BottomTabBar';
import SettingsScreen from '../screens/Settings';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const RootStack = createStackNavigator();

const NotificationScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <TopNavigation title="MyApp" alignment="center" />
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">Notification</Text>
    </Layout>
  </SafeAreaView>
);
const OrdersScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">ORDERS</Text>
    </Layout>
  </SafeAreaView>
);

const BlogNavigator = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);
const TabNavigator = () => (
  <Tab.Navigator sceneContainerStyle={{ position: 'relative', zIndex: 123 }} tabBar={(props) => <BottomTabBar {...props} />}>
    <Tab.Screen name="Blog" component={BlogNavigator} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
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
