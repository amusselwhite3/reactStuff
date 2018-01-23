import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, StyleSheet } from 'react-native';

export default class LoginForm extends Component {
  render() {
      return (
          <View style={styles.container}>
            <TextInput style = {styles.input}
                      placeholder="Email" />
            <TextInput style = {styles.input}
                        placeholder = "Password" />

          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 4
  },

  input: {
    height: 40,
    marginBottom: 10,
    padding: 8,
    color: '#000'
  }

})

AppRegistry.registerComponent('LoginForm', () => LoginForm);
