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

/**
 * Main file for the application, contains navigator set up and declarations of all files and pages on the app.
 * 
 * Referenced in index.js, work here, not in the index file.
 */


/**
 * Stack Navigator provided by a plugin, contains all the screens in the app.
 */
const AppNavigation = StackNavigator({
  Home: { screen:LoginForm },
  ProfileScreen: { screen: ProfileScreen },
  TestView: {screen: TestView},
  ChartView: {screen: ChartView},
  ChartView2: {screen: ChartView2},
  ChartView3: {screen: ChartView3},
  ChartView4: {screen: ChartView4},
  

}, {transitionConfig});

//Animation transition config file. Changes animations between every page, usNativeDriver attribute makes it animate using iOS animation libraries instead of JS ones.
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



//Main app class container, Provider declaration is from Redux plugin that stores data centrally. 
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
});

