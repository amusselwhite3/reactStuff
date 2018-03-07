import React, { Component } from 'react';

import { 
    Text,
    AppRegistry, 
    FlatList, 
    View,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native';
import Button from './../../components/Button';


import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

import store from './../profile/store';
import * as Actions from './../profile/actions';


import { VictoryBar, VictoryPie, VictoryLine, VictoryTooltip, VictoryChart, VictoryScatter, VictoryTheme, VictoryZoomContainer, VictorySelectionContainer } from 'victory-native';

import SVG from 'react-native-svg';
//Placeholder data in case redux data fails.
var chartData = [
    {x:1, y:20, label:"Test"},
    {x:2, y:25,label:"Test"},
    {x:3, y:30,label: "Test"},
    {x:4, y:35,label:"Test"},
    {x:5, y:50,label: "Test"},
    {x:6, y:55,label: "Test"},

]
/**
 * Initial Chartview Class, this was split into four seperate pages and components to improve performance
 * 
 * This chart contains a zoomable bar chart. zooming and panning is fairly slow, due to limitations with plugin
 * These four charts all created using the data stored in redux once it loads.
 */
class ChartView extends React.Component {
    //Gets current state and loads chartData from redux (props item references redux store.)
    constructor(props) {
        super(props);
        this.state = {
            data: chartData,
            scrollEnabled:true
        }
        
        if(this.props.data[0]) {
            for (var i = 0; i<6; i++){
                chartData[i].y = parseInt(this.props.data[i].data);
                chartData[i].label = this.props.data[i].data
            }
        } 

    }

    //Built in method from Victory to handle pinch zoom
    handleZoom(domain) {
        this.setState({selectedDomain:domain});
    }
    //Built in method from Victory to handle brush touch action
    handleBrush(domain) {
        this.setState({zoomDomain:domain});
    }
    //Turn off screen scrolling during zoom/pan
    changeScroll(scrollEnabled) {
        this.setState({ scrollEnabled });
      }
      //loads chartData from redux (props item references redux store.
    componentDidMount(){
        if(this.props.data[0]) {
            for (var i = 0; i<6; i++){
                chartData[i].y = parseInt(this.props.data[i].data);
                chartData[i].label = this.props.data[i].data

            }
            console.log(chartData)
        } else {
                this.props.getData();
        }

        this.setState({
            data: chartData
          });
    }
    //Renders bar chart and button to go to another chart page
    render(){   
        const { navigate } = this.props.navigation;

        return ( 
             <View accessibilityLabel="chartButton6">
                        <VictoryChart accessibilityLabel="chartButton6"
                            containerComponent={
                                <VictoryZoomContainer
                                onTouchStart={() => this.changeScroll(false)}
                                onTouchEnd={() => this.changeScroll(true)}
                                />
                            }
                            >
                            <VictoryBar accessibilityLabel="chartButton6"/>
                        </VictoryChart>

                        <View style={styles.buttonContainer} accessibilityLabel="chartButton2">
                            <Button
                                onPress = {() => {console.log("CHARTVIEW");navigate('ChartView2')}}
                                text = "Open Next Chart"
                            />
                        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChartView);

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",

    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 10,
      marginBottom: 30
    },
    buttonContainer:{
        marginTop: 20,
        marginBottom: 40,
        width: 200,
    }
  });
  AppRegistry.registerComponent('ChartView', () => ChartView);
