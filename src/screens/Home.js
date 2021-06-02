import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FONTS } from '../constants';

export class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ ...FONTS.h3 }}> HOME </Text>
            </View>
        )
    }
}