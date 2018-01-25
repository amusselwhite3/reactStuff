import React, { Component } from 'react';
import { 
     Text,
     AppRegistry, 
     FlatList, 
     View,
     StyleSheet
} from 'react-native';


export default class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style = {styles.container}>
            <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'}, 
                    {key: 'evin'},
                    {key: 'ackson'},
                    {key: 'ames'},
                    {key: 'oel'},
                    {key: 'ohn'},
                    {key: 'illian'},
                    {key: 'immy'},
                    {key: 'ulie'}, 
                    {key: 'vin'},
                    {key: 'ckson'},
                    {key: 'mes'},
                    {key: 'el'},
                    {key: 'hn'},
                    {key: 'llian'},
                    {key: 'mmy'},
                    {key: 'lie'},
                  ]}
                  renderItem = {({item}) => <Text style={styles.item}>{item.key}</Text>}
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
