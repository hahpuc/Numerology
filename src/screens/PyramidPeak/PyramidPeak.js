import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS, FONTS } from '../../constants';
import calculator from '../../helper/calculator';

export class PyramidPeak extends Component {

    constructor(props) {
        super(props)

        console.log(calculator.calNumber("442000"))
        console.log(calculator.nameInfo("Nguyen Thanh Long"))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ ...FONTS.h2 }}>NTLONG</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
})