/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import LoginForm from './Modules/loginForm';
import ProfileScreen from './Modules/profile/profileScreen';
import ChartView from './Modules/chartsPage/chartView';
import ChartView2 from './Modules/chartsPage/chartView2';
import ChartView3 from './Modules/chartsPage/chartView3';
import ChartView4 from './Modules/chartsPage/chartView4';


const TestView = require('./Modules/nativeIosPage/TestView.ios.js');

import { connect, Provider } from 'react-redux';

import store from './Modules/profile/store';

import { StackNavigator, } from 'react-navigation';



const AppNavigation = StackNavigator({
  Home: { screen:LoginForm },
  ProfileScreen: { screen: ProfileScreen },
  TestView: {screen: TestView},
  ChartView: {screen: ChartView},
  ChartView2: {screen: ChartView2},
  ChartView3: {screen: ChartView3},
  ChartView4: {screen: ChartView4},
  

}, {transitionConfig});

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
  }
}




export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <AppNavigation />
      </Provider>    

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f1fb0',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

