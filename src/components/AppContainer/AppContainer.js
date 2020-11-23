import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRouter from '../../routes/AuthRouter';
import MainRouter from '../../routes/MainRouter';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

class AppContainer extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <NavigationContainer>
        {!!this.props.Token ? <MainRouter /> : <AuthRouter />}
      </NavigationContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  Token: state.auth.Token,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps())(AppContainer);

//  "resolutions": {
//    "@react-native-community/cli-debugger-ui": "4.7.0"
//  },
