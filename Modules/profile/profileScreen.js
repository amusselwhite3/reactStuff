import React, { Component } from 'react';
import { 
     Text,
     AppRegistry, 
     FlatList, 
     View,
     StyleSheet
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

import store from './store';
import * as Actions from './actions';

class ProfileScreen extends React.Component {
    static networkData = {
        tile:"PLACEHOLDER TEEEEEXT"
    };
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    static navigationOptions = {
      title: 'Welcome',
    };

    componentDidMount(){
        this.props.getData();
    }
    // async getData() {
    //     try {
    //         let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         let responseJson = await response.json();
    //         networkData = responseJson;
    //         console.log(networkData)
    //         this.setState({data:networkData});
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    render() {
      console.log(this.state);
      const { navigate } = this.props.navigation;
      return (
            <View style = {styles.container}>
                <Text> {this.networkData} </Text>
                <FlatList
                    data={this.props.data}
                    renderItem = {({item}) => (<Text> {item.title} </Text>)}
                />
            </View>   
      );
    }
  }

  function mapStateToProps(state, props) {
      console.log("MAPING");
      console.log(state);
      return {
          loading:state.dataReducer.loading,
          data:state.dataReducer.data
      }
  }

  function mapDispatchToProps(dispatch) {
      return bindActionCreators(Actions, dispatch);
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

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
