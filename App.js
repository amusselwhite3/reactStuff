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
import LoginForm from './pages/loginForm';
import ProfileScreen from './pages/profileScreen';

import { StackNavigator, } from 'react-navigation';



const AppNavigation = StackNavigator({
  Home: { screen:LoginForm },
  ProfileScreen: { screen: ProfileScreen }
});



export default class App extends Component {
  render() {
    return (
        <AppNavigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

