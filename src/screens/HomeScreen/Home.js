import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { LifePathNumber } from '../../../data/LifePathNumber';
import { COLORS, FONTS, icons } from '../../constants';

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: LifePathNumber
        }

        this.parseData()
    }

    parseData = () => {
        var number = 0
        console.log(LifePathNumber[0]["Số " + (number + 2)]["Nghề nghiệp phù hợp"].text)
    }

    render() {


        return (
            <View style={{ flex: 1, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ ...FONTS.light3 }}>{LifePathNumber[1]["Số 3"]["Hướng phát triển"].text}</Text>

            </View>
        )
    }
}