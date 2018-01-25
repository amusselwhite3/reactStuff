import React, { Component } from 'react';
import { 
     Text,
     AppRegistry, 
     FlatList, 
     View,
     StyleSheet
} from 'react-native';


export default class ProfileScreen extends React.Component {
    static networkData = {
        tile:"PLACEHOLDER TEEEEEXT"
    };
    constructor() {
        super();
        this.state = {
            data: []
        }
        this.getData();
    }
    static navigationOptions = {
      title: 'Welcome',
    };

    async getData() {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let responseJson = await response.json();
            networkData = responseJson;
            console.log(networkData)
            this.setState({data:networkData});
        } catch (error) {
            console.log(error);
        }
    }
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style = {styles.container}>
            <Text> {this.networkData} </Text>
            <FlatList
                data={this.state.data}
                renderItem = {({item}) => (<Text> {item.title} </Text>)}
            />
        </View>       
      );
    }
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          padding:20
      },
      item: {
          padding: 10,
      }
  })

  AppRegistry.registerComponent('ProfileScreen', () => ProfileScreen);
