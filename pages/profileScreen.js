import React, { Component } from 'react';
import { 
     Text,
     AppRegistry
} from 'react-native';


export default class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
       <Text> Hello this is a placeholder page </Text>
        
      );
    }
  }

  AppRegistry.registerComponent('ProfileScreen', () => ProfileScreen);
