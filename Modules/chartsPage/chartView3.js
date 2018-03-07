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


import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

import Button from './../../components/Button';

import store from './../profile/store';
import * as Actions from './../profile/actions';


import { VictoryBar, VictoryPie, VictoryLine, VictoryTooltip, VictoryChart, VictoryScatter, VictoryTheme, VictoryZoomContainer, VictorySelectionContainer } from 'victory-native';

import SVG from 'react-native-svg';

var chartData = [
    {x:1, y:20, label:"Test"},
    {x:2, y:25,label:"Test"},
    {x:3, y:30,label: "Test"},
    {x:4, y:35,label:"Test"},
    {x:5, y:50,label: "Test"},
    {x:6, y:55,label: "Test"},

]
/**
 * Chartview Class, this was split into four seperate pages and components to improve performance
 * 
 * This chart contains a pie chart that changes colors when pie pieces are clicked on
 * These four charts all created using the data stored in redux once it loads.
 */
class ChartView3 extends React.Component {
    //Gets current state and loads chartData from redux (props item references redux store.)
    constructor(props) {
        super(props);
        this.state = {
            totalValue: 0,
            data: chartData,
            scrollEnabled:true
        }
        
        if(this.props.data[0]) {
            for (var i = 0; i<6; i++){
                chartData[i].y = parseInt(this.props.data[i].data);
                chartData[i].label = this.props.data[i].data
            }
            console.log(chartData)
        } 

    }
    //Combines values of selected pie pieces and displays them on the bottom.
    combineValue(value) {
        let aVal = this.state.totalValue;
        aVal += value;
        this.setState({
            totalValue:aVal
        });
        this.state.totalValue = this.state.totalValue + value;
        
    }
    //Gets current state and loads chartData from redux (props item references redux store.(Back button)
    componentDidMount(){
        if(this.props.data[0]) {
            for (var i = 0; i<6; i++){
                chartData[i].y = parseInt(this.props.data[i].data);
                chartData[i].label = this.props.data[i].data

            }
        } 

        this.setState({
            data: chartData
          });
    }
    //Render pie pieces, and calls the mutation methods using an event handler when a Pie Piece is selected 
    render(){   
        const { navigate } = this.props.navigation;

        return ( 
            <ScrollView contentContainerStyle={styles.container}>
                    <VictoryPie data = {this.state.data}
                        events={[
                            {
                                target:"data",
                                eventHandlers:{
                                    onPressIn: (evt)=> {
                                        return [
                                            {
                                                mutation: (props, evt) => {
                                                    if (props.style.fill === "green") {
                                                        this.combineValue(-parseFloat(props.data[props.index].label));
                                                        return null
                                                    } else {
                                                        this.combineValue(parseFloat(props.data[props.index].label));
                                                        return { style: { fill: "green" } };                                                    style: { fill: "green" }
                                                    }
                                                }
                                              }
                                        ]
                                    } 
                                }
                                    
                            }
                        ]}
                    />
                    <Text>{this.state.totalValue}
                    </Text>
                    <View accessibilityLabel="chartButton4">

                        <Button
                            onPress = {() => navigate('ChartView4')}
                            text = "Open Next Chart"
                            onValueChange = {this.onValueChange}
                        />
                    </View>
            </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChartView3);

AppRegistry.registerComponent('ChartView3', () => ChartView3);
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
    }
  });