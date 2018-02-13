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

class ChartView4 extends React.Component {
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


    handleZoom(domain) {
        this.setState({selectedDomain:domain});
    }
    handleBrush(domain) {
        this.setState({zoomDomain:domain});
    }

    changeScroll(scrollEnabled) {
        this.setState({ scrollEnabled });
      }
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
    render(){   
        const { navigate } = this.props.navigation;

        return ( 
            <ScrollView contentContainerStyle={styles.container}>
                <VictoryChart>
                    <VictoryScatter 
                            labelComponent={<VictoryTooltip/>}
                            data={this.state.data}
                            size={13}>
                    </VictoryScatter>
                    <VictoryLine
                        data={this.state.data}
                        labels={() => ''}
                        labelComponent={<VictoryTooltip/>}
                        >
                    </VictoryLine>
                </VictoryChart>
            </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChartView4);

AppRegistry.registerComponent('ChartView4', () => ChartView4);
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