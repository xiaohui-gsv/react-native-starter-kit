import { Button, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Main/Home';
import Settings from '../pages/Main/Settings';

const Tab = createBottomTabNavigator();
const MainRouter = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);
export default MainRouter;
