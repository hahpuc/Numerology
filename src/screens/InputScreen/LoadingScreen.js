import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { Component } from 'react';
import {
    SafeAreaView, ImageBackground,
    View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Dimensions,
} from 'react-native';

import { COLORS, FONTS, images } from '../../constants';

import ultilities from '../../helper/ultilities';

import DatePicker from 'react-native-datepicker'

export class LoadingScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const buttonWidth = Dimensions.get('window').width - 32;

        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={images.loadingScreen}
                    resizeMode='cover'
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute'
                    }}>

                </ImageBackground>

            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        // justifyContent: 'center',
        // backgroundColor: COLORS.lightGray
    },
    inputFrame: {
        height: '100%',
        // backgroundColor: 'red',
    },

    background: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },

    button: {
        top: 50,
        height: 50,
        backgroundColor: COLORS.primary,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 20,
    },
    header: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: COLORS.brown,
        borderBottomWidth: 1,
    },
})