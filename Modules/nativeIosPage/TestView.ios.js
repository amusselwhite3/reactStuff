import {requireNativeComponent} from 'react-native';

import React, {Component} from 'react';

const TestViewNative = requireNativeComponent('TestView', TestView);

/**
 * iOS wrapper that references a native page inside the ios folder. 
 */

class TestView extends Component {
    render() {
        return <TestViewNative/>;
    }
}

module.exports = TestView;