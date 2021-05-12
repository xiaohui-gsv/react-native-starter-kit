import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';

export class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Home</Text>

        <Button
          onPress={() => {
            this.props.logout();
          }}>
          Logout
        </Button>

        <Button
          onPress={() => {
            this.props.navigation.navigate('Settings');
          }}>
          Go to Settings
        </Button>
        <Button
          onPress={() => {
            this.props.navigation.navigate('HomeDetails');
          }}>
          Go to Home Details
        </Button>
      </View>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  logout: dispatch.auth.Logout,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
