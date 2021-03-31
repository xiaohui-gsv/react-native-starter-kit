import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

class HomeDetails extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Home Details</Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
          title="Go to Home"
        />
      </View>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeDetails);
