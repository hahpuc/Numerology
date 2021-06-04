import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { LifePathNumber } from '../../../data/LifePathNumber';
import { COLORS, FONTS, icons } from '../../constants';
import calculator from '../../helper/calculator';

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: LifePathNumber
        }

        calculator.calNumber("23112000")
        calculator.nameInfo("Vi huu duc")
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ ...FONTS.light3 }}>{LifePathNumber[1]["Số 3"]["Hướng phát triển"].text}</Text>

            </View>
        )
    }
}