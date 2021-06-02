import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { COLORS } from '../constants';

export class BirthChartScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.secondary, justifyContent: 'center', alignItems: 'center' }}>

                <Text> Birth Chart Screen</Text>
            </View>
        )
    }
}