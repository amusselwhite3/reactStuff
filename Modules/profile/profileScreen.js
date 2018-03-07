import React, { Component } from 'react';
import { 
     Text,
     AppRegistry, 
     FlatList, 
     View,
     Image,
     StyleSheet
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

import store from './store';
import * as Actions from './actions';
/**
 * Profile Screen that references data stored in redux and then displays the data as a listview containing a placeholder image.
 * 
 * This page was created to compare to a similiar native ios listview
 */
class ProfileScreen extends React.Component {
    static networkData = {
        tile:"Placeholder Text"
    };
    //Create page with no daata
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    //Change navigation page title and styling
    static navigationOptions = {
      title: 'Transaction List',     
      headerTintColor: '#ffffff',
      headerStyle:{backgroundColor:'#000080'}
    };
    //Load data from redux once listview is loaded, wait for full rendering so a network request can be completed before attempting to load redux if the network code is active.
    componentDidMount(){
        this.props.getData();
    }
    //Uses flatlist react native component to create 500 item listview to test scrolling.
    render() {
      const { navigate } = this.props.navigation;
      return (
            <View style = {styles.container}>
                <FlatList
                    data={this.props.data}
                    ItemSeparatorComponent={ () => <View style={ { height: 1 , backgroundColor:'grey'} } /> }
                    renderItem = {({item}) => (
                            <View style = {styles.listItem}>
                                <Image source={require('../../avatar.png')} style={styles.listImage} />
                                <Text style = {styles.titleText}> {item.title} </Text>
                                <Text style = {styles.priceValue}> {item.data} </Text>
                            </View>
                        )
                    }
                    keyExtractor={(item, index) => index}
                />
            </View>   
      );
    }
  }
  //Required Methods for Redux Plugin
  function mapStateToProps(state, props) {
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
          flexDirection: 'row',
      },
      item: {
          padding: 10,
      },
      priceValue: {
          textAlign:'right',
          color: '#ffffff',
          flex:1
      },
      titleText: {
          color:'#ffffff',
      },
      listImage: {
		width:50,
		height:50,
      },
      listItem: {
          padding: 10,
          flex: .5,
          backgroundColor: '#00f',
          flexDirection:'row'
      }
  })

  AppRegistry.registerComponent('ProfileScreen', () => ProfileScreen);
