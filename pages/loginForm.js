import React, { Component } from 'react';
import { Alert, AppRegistry, View, Text, TextInput, StyleSheet, Image, Switch, setState } from 'react-native';
import Container from './../components/Container'
import Button from './../components/Button'

export default class LoginForm extends Component {
	constructor() {
		super();
		this.state = {aThing:true};
		this.onValueChange = this.onValueChange.bind(this);
	}

	  
	forgotPress() {
		Alert.alert("FORGOT PASS")
	}
	onValueChange() {
		this.setState(previousState => {
			return {aThing: !previousState.aThing};
		});
	}
  	render() {
		const { navigate } = this.props.navigation;
    	return (
        	<View>
				<Image source={require('./../diamond.jpg')} style={styles.mainIcon} />
				<Text style={styles.titleText}> Hello! </Text>
          		<Container>
					<View style={{flex:4}}>
						<TextInput style = {styles.input}
							placeholder="Email" />
					</View>
					<View style={styles.buttonContainer}>
						<Button
							onPress={() => navigate('ProfileScreen')}
							text = "->"
						/>
					</View>
				</Container>
				<View style={styles.toggleContainer}>
					<Text> Remember Me </Text>
					<Switch
						value = {this.state.aThing}
						onValueChange = {this.onValueChange}
						>
					</Switch>
				</View>
				<View style={styles.forgotContainer}>
					<Button
						onPress = {this.forgotPress}
						text = "Forgot Username/Password"
						onValueChange = {this.onValueChange}
					/>
				</View>
        	</View>
      );
  }
}

const styles = StyleSheet.create({
	container: {
    	borderWidth: 4,
	},
	  
	titleText: {
		alignSelf:'center',
		flexDirection: 'column',
		margin:5,
	},
	mainIcon: {
		width:150,
		height:150,
		marginTop: 100,
		flexDirection: 'column',
		alignSelf:'center',
		margin:20
	},

	buttonContainer: {
		flexDirection: 'column',
		backgroundColor: '#00C01E',
		flex:1
	},
	toggleContainer: {
		margin: 20,
		flexDirection: 'column',
		alignSelf: 'center',
		flexDirection: 'row', 

	},
	forgotContainer: {
		margin:20,
		alignSelf:'flex-end'
	},
	input: {
		height: 40,
		marginBottom: 10,
		padding: 8,
		color: '#000'
	}
})

AppRegistry.registerComponent('LoginForm', () => LoginForm);
