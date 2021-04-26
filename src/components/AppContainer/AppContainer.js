import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRouter from '../../routes/AuthRouter';
import MainStack from '../../routes/MainRouter';
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
        {!!this.props.Token ? <MainStack /> : <AuthRouter />}
      </NavigationContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  Token: state.auth.Token,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps())(AppContainer);

