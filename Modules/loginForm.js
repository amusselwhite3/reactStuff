import React, { Component } from 'react';
import { Alert, AppRegistry, View, Text, TextInput, StyleSheet, Image, Switch, setState } from 'react-native';
import Container from './../components/Container'
import Button from './../components/Button'
import TestView from './nativeIosPage/TestView';
import codePush from 'react-native-code-push'

export default class LoginForm extends Component {
	constructor() {
		super();
		this.state = {aThing:true};
		this.onValueChange = this.onValueChange.bind(this);
	}

	componentDidMount() {
		codePush.sync({updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE, checkFrequency: codePush.CheckFrequency.MANUAL});
	}

	onButtonPress() {
        codePush.sync({
            updateDialog: true,
            installMode: codePush.InstallMode.IMMEDIATE
        });
    }

	static navigationOptions = {
		title: 'Welcome',
		headerTintColor: '#ffffff',
		headerStyle:{backgroundColor:'#000080'},
		footerStyle:{backgroundColor:'#000080'}
	  };



	forgotPress() {
		navigate('ProfileScreen');
	}
	onValueChange() {
		this.setState(previousState => {
			return {aThing: !previousState.aThing};
		});
	}
  	render() {
		const { navigate } = this.props.navigation;
    	return (
        	<View style = {{backgroundColor:'#1f1fb0', height: '100%'}}>
				<Image source={require('./../diamond.jpg')} style={styles.mainIcon} />
				<Text style={styles.titleText}> Hello there</Text>
          		<Container>
					<View style={{flex:4}}>
						<TextInput style = {styles.input}
							placeholder="ENTER PERSONAL ID"
							placeholderTextColor="#FFFFFF" />
					</View>
					<View style={styles.buttonContainer} accessibilityLabel="profileButton" >
						<Button
							onPress={() => navigate('ProfileScreen')}
							text = "->"
						/>
					</View>
				</Container>
				<View style={styles.toggleContainer}>
					<Text style={styles.rememberMeText}> Remember Me </Text>
					<Switch
						value = {this.state.aThing}
						onValueChange = {this.onValueChange}
						>
					</Switch>
				</View>
				<View style={styles.forgotContainer}>
					<Button
						onPress = {() => navigate('TestView')}
						text = "Open Native iOS page"
						onValueChange = {this.onValueChange}
					/>	
					<Button style={styles.container}
					onPress = {this.onButtonPress}
					text = "Check for updates"
					onValueChange = {this.onValueChange}
					/>
					

				</View>
			
				<View style={styles.container}
				 accessibilityLabel="chartButton" >
					<Button
						onPress = {() => navigate('ChartView')}
						text = "Open Chart View"
					/>
				</View>
        	</View>
      );
  }
}

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center'

	},

	titleText: {
		color:'#FFFFFF',
		alignSelf:'center',
		flexDirection: 'column',
		margin:5,
		fontSize: 20
	},
	rememberMeText: {
		margin:5,
		fontSize: 16,
		color:'#FFFFFF'
	},
	mainIcon: {
		width:100,
		height:100,
		marginTop: 60,
		flexDirection: 'column',
		alignSelf:'center',
		margin:20
	},
	buttonContainer: {
		flexDirection: 'column',
		backgroundColor: '#ffffff',
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
		alignSelf: 'center'
	},
	input: {
		textAlign: 'center',
		height: 40,
		padding: 8,
		color: '#ffffff'
	}
})

AppRegistry.registerComponent('LoginForm', () => LoginForm);
