import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native';
import {
  Layout, Text, TopNavigation,
} from '@ui-kitten/components';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import BottomTabBar from '../components/BottomTabBar';
import SettingsScreen from '../screens/Settings';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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

const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);
const TabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Tab.Screen name="Users" component={HomeNavigator} />
    <Tab.Screen name="Notification" component={NotificationScreen} />
    <Tab.Screen name="Orders" component={OrdersScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
export default AppNavigator;
