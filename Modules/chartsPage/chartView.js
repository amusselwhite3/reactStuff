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


import { VictoryBar, VictoryPie, VictoryLine, VictoryScatter } from 'victory-native';

import SVG from 'react-native-svg';

export default class ChartView extends React.Component {
    render(){    
        return ( 
            <ScrollView>
                <VictoryBar/>
                <VictoryPie/>
                <VictoryLine/>
                <VictoryScatter/>
            </ScrollView>
        );
    }
}

AppRegistry.registerComponent('ChartView', () => ChartView);
