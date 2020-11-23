import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';

const Stack = createStackNavigator();
const AuthRouter = () => (
  <Stack.Navigator initialRouteName="SignIn">
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);
export default AuthRouter;
