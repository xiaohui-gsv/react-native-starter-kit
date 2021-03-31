import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class Settings extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Settings</Text>

        <Button onPress={() => this.props.navigation.navigate('Home')} title="Go to Home" />

        <Button
          onPress={() => {
            this.props.navigation.navigate('HomeDetails');
          }}
          title="Go to Home Details"
        />
      </View>
    );
  }
}
