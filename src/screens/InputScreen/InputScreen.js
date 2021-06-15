import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { Component } from 'react';
import {
    View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Dimensions,
} from 'react-native';

import { COLORS, FONTS, images } from '../../constants';

import ultilities from '../../helper/ultilities';

import DatePicker from 'react-native-datepicker'

export class InputScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            date: '',
        }

        this.getData()

        // this.removeData()
    }


    handleSubmit = async () => {
        console.log("Start to explore")

        try {
            await AsyncStorage.setItem('userName', this.state.name)
            await AsyncStorage.setItem('birthDate', this.state.date)

            console.log("Successfully to save username & birthdate")
            this.props.navigation.popToTop()
        } catch (error) {
            console.log(error)
        }
    }

    getData = async () => {
        try {
            const username = await AsyncStorage.getItem('userName')
            const birthdate = await AsyncStorage.getItem('birthDate')
            if (username !== null) {
                this.setState({
                    name: username,
                    date: birthdate
                })
            } else {
                this.setState({
                    name: '',
                    date: '',
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
            await AsyncStorage.removeItem('birthDate')
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

                    <View style={{ height: '10%' }} />

                    {/* Label  */}
                    <View style={{ paddingLeft: 16, flex: 0.8, justifyContent: 'center', }}>
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
                                    returnKeyType='done'
                                />
                            </View>
                            <View style={{
                                height: 1,
                                backgroundColor: COLORS.white
                            }} />
                        </View>

                        <View style={{ paddingTop: 16 }}>
                            <Text style={{ color: COLORS.primary, fontSize: 17 }}>Ngày sinh</Text>

                            <DatePicker
                                style={{
                                    paddingTop: 16,
                                    width: buttonWidth,
                                }}
                                date={this.state.date}
                                mode="date"
                                placeholder="Select Date"
                                format="DD-MM-YYYY"
                                minDate="01-01-1900"
                                maxDate="30-12-2033"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                showIcon={false}
                                customStyles={{
                                    dateText: {
                                        color: 'white',
                                        fontSize: 17,
                                    },
                                    datePicker: {
                                        backgroundColor: '#cfcfc4',
                                        // color: 'black'
                                    }
                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}
                            />

                        </View>

                    </View>

                    {/* Button  */}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{

                                height: 50,
                                width: buttonWidth,
                                backgroundColor: COLORS.primary,
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}

                            onPress={this.handleSubmit}
                        >
                            <Text style={{ ...FONTS.body3 }}>Khám phá</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 50 }}></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
})