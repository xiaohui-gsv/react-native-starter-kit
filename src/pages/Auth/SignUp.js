import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

const SignUp = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text>SignUpScreen</Text>
    <Button onPress={() => navigation.navigate('SignIn')} title="Go to SignIn" />
  </View>
);

export default SignUp;
