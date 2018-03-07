import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

/**
 * Button Component, can be inserted into any form and then built upon.
 * 
 * Styles can be overwritten in main page
 */

export default class Button extends Component {
    render() {
        return (
            <TouchableHighlight
            style={styles.buttonContainer}
            onPress={this.props.onPress}> 
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 20,
        flexDirection: 'column',
    },
    buttonText:{
        fontSize: 18,
        color: '#cccccc'
    }
})