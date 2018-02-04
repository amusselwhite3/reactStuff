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
      title: 'Transaction List',     
      headerTintColor: '#ffffff',
      headerStyle:{backgroundColor:'#000080'}
    };

    componentDidMount(){
        this.props.getData();
    }
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
