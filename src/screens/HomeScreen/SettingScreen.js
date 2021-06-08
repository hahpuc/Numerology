import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import { CardNumber } from '../../components';
import { COLORS, FONTS, icons } from '../../constants';

export class SettingScreen extends Component {


    onNumberPress(number) {
        console.log("PRESSSSS", number)
    }

    render() {
        const buttonWidth = Dimensions.get('window').width - 64;

        return (
            <SafeAreaView style={styles.safeArea}>
                {/* Header  */}
                <View style={styles.header}>
                    <TouchableOpacity
                        style={{ marginLeft: 16, height: 24, width: 24 }}
                        onPress={() => {
                            this.props.navigation.pop()
                        }}
                    >
                        <Image
                            source={icons.back}
                            resizeMode='contain'
                            style={{
                                height: 24,
                                width: 24,
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{ ...FONTS.largeTitle, flex: 1, textAlign: 'center' }}>Setting</Text>
                    <View style={{ marginRight: 16, height: 24, width: 24 }} />
                </View>

                {/* Body */}
                <View style={styles.container}>

                    <TouchableOpacity
                        style={styles.button}

                        onPress={() => {
                            this.props.navigation.push('InputScreen')
                        }}
                    >
                        <Image
                            source={icons.profile}
                            style={{
                                height: 24,
                                width: 24,
                            }}
                            resizeMode='contain'
                        />
                        <Text style={{ paddingLeft: 8, flex: 1, ...FONTS.light3 }}>Thay đổi thông tin</Text>
                        <Image
                            source={icons.chevron}
                            style={{
                                height: 24,
                                width: 24,
                                tintColor: COLORS.black
                            }}

                            resizeMode='contain'
                        />
                    </TouchableOpacity>

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
        alignItems: 'center',
        borderBottomColor: COLORS.brown,
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    button: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        borderBottomLeftRadius: 16,
        borderBottomColor: COLORS.brown,
        borderBottomWidth: 1,
    }
})