import { Button, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Main/Home/Home';
import HomeDetails from '../pages/Main/Home/HomeDetails';
import Settings from '../pages/Main/Settings/Settings';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeTab" component={HomeTab} />
      <Stack.Screen
        name="HomeDetails"
        component={HomeDetails}
        options={{ headerBackTitle: 'Back' }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const HomeTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);
export default MainStack;
