import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export default class Container extends Component {
	render() {
		return (
			<View style={styles.container}>
				{this.props.children}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
		flexDirection: 'row', 
		margin:20,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth:2,
		borderBottomColor: '#FFFFFF'
	}
})
