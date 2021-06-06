import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import { CardNumber } from '../../components';
import { COLORS, FONTS, icons } from '../../constants';

export class BirthChartResultScreen extends Component {


    onNumberPress(number) {
        console.log("PRESSSSS", number)
    }

    render() {
        const buttonWidth = Dimensions.get('window').width - 64;

        return (
            <SafeAreaView style={styles.safeArea}>
                {/* Header  */}
                <View style={styles.header}>
                    <View style={{ marginLeft: 16, height: 24, width: 24 }}>
                        <Image
                            source={icons.back}
                            resizeMode='contain'
                            style={{
                                height: 24,
                                width: 24,
                            }}
                        />
                    </View>
                    <Text style={{ ...FONTS.largeTitle, flex: 1, textAlign: 'center' }}>Các con số ngày sinh</Text>
                    <View style={{ marginRight: 16, height: 24, width: 24 }} />
                </View>

                {/* Information */}
                <View style={styles.container}>



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
        backgroundColor: COLORS.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    }
})