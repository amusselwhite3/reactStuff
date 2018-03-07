import React, { Component } from 'react';
import { Alert, AppRegistry, View, Text, TextInput, StyleSheet, Image, Switch, setState } from 'react-native';
import Container from './../components/Container'
import Button from './../components/Button'
import TestView from './nativeIosPage/TestView';
import codePush from 'react-native-code-push'
/**
 * First page of the app, contiains a ton of different plugins, 
 * but basically is several links to other pages, and a login form.
 * 
 * JSX at the bottom is the display of the page
 */

export default class LoginForm extends Component {
	//Constructer sets initial state of the form and binds onValueChange method to JSX
	constructor() {
		super();
		this.state = {onState:true};
		this.onValueChange = this.onValueChange.bind(this);
	}

	//Codepush load to grab anything new from central codeupush store. 
	componentDidMount() {
		codePush.sync({updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE, checkFrequency: codePush.CheckFrequency.MANUAL});
	}
	
	//Codepush load to grab anything new from central codeupush store. 
	onButtonPress() {
        codePush.sync({
            updateDialog: true,
            installMode: codePush.InstallMode.IMMEDIATE
        });
    }
	//Navication Options Title Styling and page. This is referenced by a plugin, so it is not directly added to the JSX.
	static navigationOptions = {
		title: 'Welcome',
		headerTintColor: '#ffffff',
		headerStyle:{backgroundColor:'#000080'},
		footerStyle:{backgroundColor:'#000080'}
	  };

	//handles the toggle button inside the JSX
	onValueChange() {
		this.setState(previousState => {
			return {onState: !previousState.onState};
		});
	}
	//Renders the JSX of the page, including all four buttons, and the login form. 
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
						value = {this.state.onState}
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
//Stylesheet for profile page, these are all exclusive to the profile screen.
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
