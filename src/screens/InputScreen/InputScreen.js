import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { Component } from 'react';
import {
    View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Dimensions,
} from 'react-native';

import { COLORS, FONTS, images } from '../../constants';

export class InputScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            birthDate: '',
        }

        this.getData()
        // this.removeData()
    }


    handleSubmit = async () => {
        console.log("Start to explore")

        try {

            await AsyncStorage.setItem('userName', this.state.name)

            console.log("Successfully to save username")
        } catch (error) {
            console.log(error)
        }
    }

    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('userName')
            if (value !== null) {
                this.setState({
                    name: value
                })
            } else {
                this.setState({
                    name: '',
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    removeData = async () => {
        console.log("Remove")
        try {
            await AsyncStorage.removeItem('userName')
        } catch (e) {
            console.log(e)
        }
    }


    render() {
        const buttonWidth = Dimensions.get('window').width - 32;

        return (
            <View style={styles.container}>

                {/* Background  */}
                <View style={styles.background}>
                    <Image
                        source={images.background}
                        resizeMode='cover'
                        style={{
                            height: '100%',
                            width: '100%'
                        }}
                    />
                </View>

                {/* Input Frame  */}
                <View style={styles.inputFrame}>

                    {/* Label  */}
                    <View style={{ paddingLeft: 16, flex: 1, justifyContent: 'center' }}>
                        <Text style={{ ...FONTS.logoTitle, color: COLORS.primary }}>Khám phá</Text>
                        <Text style={{ ...FONTS.logoTitle, color: COLORS.primary }}>Bản thân</Text>
                        <Text style={{ ...FONTS.logoTitle, color: COLORS.primary }}>Bằng những con số</Text>

                    </View>

                    {/* Input Field */}
                    <View style={{ paddingRight: 16, paddingLeft: 16, flex: 1, justifyContent: 'center' }}>

                        <View>
                            <Text style={{ color: COLORS.primary, fontSize: 17 }}>Họ và tên</Text>

                            <View style={{ height: 48 }}>
                                <TextInput
                                    style={{
                                        height: '100%',
                                        fontSize: 17,
                                        color: COLORS.white,
                                    }}

                                    placeholderTextColor={COLORS.gray}
                                    defaultValue={this.state.name}
                                    value={this.state.name}
                                    onChangeText={(text) => this.setState({ name: text })}
                                    returnKeyType="go"
                                />
                            </View>
                            <View style={{
                                height: 1,
                                backgroundColor: COLORS.white
                            }} />
                        </View>

                        <View style={{ paddingTop: 16 }}>
                            <Text style={{ color: COLORS.primary, fontSize: 17 }}>Ngày sinh</Text>

                            <View style={{ height: 48 }}>
                                <TextInput
                                    style={{
                                        height: '100%',
                                        fontSize: 17,
                                        color: COLORS.white,
                                    }}

                                    // placeholder="Enter your birth date"
                                    placeholderTextColor={COLORS.gray}
                                // defaultValue="Nguyen Thanh Long"
                                />
                            </View>
                            <View style={{
                                height: 1,
                                backgroundColor: COLORS.white
                            }} />
                        </View>

                    </View>

                    {/* Button  */}
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity
                            style={[styles.button, { width: buttonWidth }]}
                            onPress={this.handleSubmit}
                        >
                            <Text style={{ ...FONTS.body3 }}> Khám phá </Text>
                        </TouchableOpacity>

                    </View>


                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: COLORS.lightGray
    },
    inputFrame: {
        height: '80%',
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
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    }
})