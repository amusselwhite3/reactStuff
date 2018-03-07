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
 * This chart contains a scatter chart with a horizontal scroll
 * These four charts all created using the data stored in redux once it loads.
 */
class ChartView2 extends React.Component {
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
            console.log(chartData)
        } 

    }
    //Gets current state and loads chartData from redux (props item references redux store.(Back button)

    componentDidMount(){
        if(this.props.data[0]) {
            for (var i = 0; i<6; i++){
                chartData[i].y = parseInt(this.props.data[i].data);
                chartData[i].label = this.props.data[i].data

            }
            console.log(chartData)
        } 

        this.setState({
            data: chartData
          });
    }
    //Render scatter plot with certain data points colored based on data
    render(){   
        const { navigate } = this.props.navigation;

        return ( 
            <ScrollView contentContainerStyle={styles.container}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                    <VictoryChart 
                        height={400} width={600}
                        domain={{y:[0,200], x:[0,10]}}  
                    >
                        <VictoryScatter
                        data={this.state.data}
                        style={{data: {
                            opacity: (d) =>  d.y % 5 === 0 ? 1 : 0.7,
                            fill: (d) => d.y % 5 === 0 ? "tomato" : "black"
                        }
                        }}
                        />                
                    </VictoryChart>
                </ScrollView>
                <View accessibilityLabel="chartButton3">
                    <Button
                            onPress = {() => navigate('ChartView3')}
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

export default connect(mapStateToProps, mapDispatchToProps)(ChartView2);

AppRegistry.registerComponent('ChartView2', () => ChartView2);
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