import {requireNativeComponent} from 'react-native';

import React, {Component} from 'react';

const TestViewNative = requireNativeComponent('TestView', TestView);

class TestView extends Component {
    render() {
        return <TestViewNative/>;
    }
}

module.exports = TestView;