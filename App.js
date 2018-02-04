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


import { connect, Provider } from 'react-redux';

import store from './Modules/profile/store';

import { StackNavigator, } from 'react-navigation';



const AppNavigation = StackNavigator({
  Home: { screen:LoginForm },
  ProfileScreen: { screen: ProfileScreen }
});




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

