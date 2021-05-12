import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import AuthRouter from '../../routes/AuthRouter';
import MainStack from '../../routes/MainRouter';

class AppContainer extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <NavigationContainer>{this.props.Token ? <MainStack /> : <AuthRouter />}</NavigationContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  Token: state.auth.Token,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps())(AppContainer);
