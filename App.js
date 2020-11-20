import React from 'react';
import Root from './src/index';
import configureStore from './src/store/index';

const { persistor, store } = configureStore();

export default function App() {
  return <Root store={store} persistor={persistor} />;
}
// npx react-native-rename "Service On Demand" -b com.glbaloiler.sod
