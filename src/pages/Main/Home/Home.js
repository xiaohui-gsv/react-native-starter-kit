import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

export class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Home</Text>

        <Button
          onPress={() => {
            this.props.logout();
          }}
          title="Logout"
        />
        <Button
          onPress={() => {
            this.props.navigation.navigate('Settings');
          }}
          title="Go to Settings"
        />
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

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  logout: dispatch.auth.Logout,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
