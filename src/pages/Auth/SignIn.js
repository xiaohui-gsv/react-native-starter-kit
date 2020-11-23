import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

class SignIn extends Component {
  constructor() {
    super();
  }

  /**
   * Render
   */
  render = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>SignInScreen</Text>

        <Button
          onPress={() => {
            this.props.signIn({ Token: 'asdf' });
          }}
          title="Sign In"
        />

        <Button onPress={() => this.props.navigation.navigate('SignUp')} title="Go to SignUp" />
      </View>
    );
  };
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  signIn: dispatch.auth.SignIn,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
