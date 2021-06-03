import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { COLORS, FONTS, icons } from '../../constants';

export class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ ...FONTS.h1 }}> HOME </Text>
                <Image
                    source={icons.setting}
                    resizeMode='contain'
                    style={{
                        height: 24,
                        width: 24
                    }}
                />
            </View>
        )
    }
}