
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { COLORS, FONTS } from '../constants';

export class CardNumber extends Component {

    render() {

        const cardWidth = (Dimensions.get('window').width - 48) / 3

        return (
            <View style={[styles.container, { width: cardWidth, height: cardWidth }]}>

                {/* Header */}
                <View style={styles.header}>
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{this.props.title}</Text>
                </View>

                {/* Number */}
                <View style={styles.number}>
                    <Text style={{ color: COLORS.white, ...FONTS.body1 }}>{this.props.number}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.brownCard,
        borderRadius: 20,
    },

    header: {
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1
    },
    number: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})