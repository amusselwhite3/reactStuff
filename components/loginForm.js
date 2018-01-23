import React, { Component } from 'react';
import { Alert, AppRegistry, Button, View, Text, TextInput, StyleSheet } from 'react-native';

export default class LoginForm extends Component {

  onPress() {
    Alert.alert("BUTTON HIT");
  }
  render() {
      return (
        <View>
          <View style={styles.container}>
            <TextInput style = {styles.input}
                      placeholder="Email" />
            <TextInput style = {styles.input}
                        placeholder = "Password" />

          </View> 
          <View style={styles.buttonContainer}>
              <Button
                onPress={this.onPress}
                title="Click me"
                raised={true}
                theme='dark'
              />
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 4
  },

  buttonContainer: {
    margin: 20,
    flexDirection: 'column' ,
    backgroundColor: '#00C01E'
  }, 


  input: {
    height: 40,
    marginBottom: 10,
    padding: 8,
    color: '#000'
  }

})

AppRegistry.registerComponent('LoginForm', () => LoginForm);
