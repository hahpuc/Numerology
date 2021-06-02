import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { COLORS, FONTS } from '../constants';

export class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ ...FONTS.h1 }}> HOME </Text>
            </View>
        )
    }
}