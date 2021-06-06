import React, { Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { COLORS, FONTS } from '../../constants';
import calculator from '../../helper/calculator';

export class PyramidPeak extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (

            <SafeAreaView style={styles.safeArea}>

                {/* Header  */}
                <View style={styles.header}>
                    <Text style={{ ...FONTS.largeTitle }}>Your Pinnacles</Text>
                </View>

                <View style={styles.container} >

                    {/* Title  */}
                    <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'Roboto-Light', fontSize: 20 }}>Số chủ đạo: </Text>
                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 20 }}>9</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: COLORS.primary
    },
    container: {
        height: '100%',
        backgroundColor: COLORS.primary
    },
    header: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: COLORS.brown,
        borderBottomWidth: 1,
    },
})