import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <TouchableHighlight
            style={styles.buttonContainer}
            onPress={this.props.onPress}> 
                <Text>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 20,
        flexDirection: 'column',
    }
})