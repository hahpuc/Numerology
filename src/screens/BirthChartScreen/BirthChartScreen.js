import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { CardNumber } from '../../components';
import { COLORS, FONTS } from '../../constants';

export class BirthChartScreen extends Component {


    onNumberPress(number) {
        console.log("PRESSSSS", number)
    }

    render() {
        const buttonWidth = Dimensions.get('window').width - 64;

        return (
            <SafeAreaView style={styles.safeArea}>
                {/* Header  */}
                <View style={styles.header}>
                    <Text style={{ ...FONTS.largeTitle }}>Birth Chart</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Chart  */}
                    <View style={styles.container}>
                        <View style={{}}>
                            <View style={{ marginTop: 16, height: 32, paddingLeft: 16 }}>
                                <Text style={{ ...FONTS.light2 }}>Biểu đồ ngày sinh</Text>
                            </View>

                            {/* 3 - 6 - 9 */}
                            <View style={{ marginTop: 16, flexDirection: 'row' }}>
                                <TouchableOpacity
                                    style={{ paddingLeft: 16 }}
                                    onPress={() => this.onNumberPress("3")}
                                >
                                    <CardNumber title='Trí não' number='3' />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onNumberPress("6")}
                                >
                                    <CardNumber title='Sáng tạo' number='6' />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onNumberPress("9")}
                                >
                                    <CardNumber title='Lý tưởng' number='9' />
                                </TouchableOpacity>
                            </View>

                            {/* 2 - 5 - 8 */}
                            <View style={{ marginTop: 16, flexDirection: 'row' }}>
                                <TouchableOpacity
                                    style={{ paddingLeft: 16 }}
                                    onPress={() => this.onNumberPress("2")}
                                >
                                    <CardNumber title='Trực giác' number='2' />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onNumberPress("5")}

                                >
                                    <CardNumber title='Cảm xúc' number='5' />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onNumberPress("8")}
                                >
                                    <CardNumber title='Nghĩa vụ' number='8' />
                                </TouchableOpacity>
                            </View>

                            {/* 1 - 4 - 7 */}
                            <View style={{ marginTop: 16, flexDirection: 'row' }}>
                                <TouchableOpacity
                                    style={{ paddingLeft: 16 }}
                                    onPress={() => this.onNumberPress("1")}
                                >
                                    <CardNumber title='Tính cách' number='1' />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onNumberPress("4")}
                                >
                                    <CardNumber title='Thực tế' number='4' />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onNumberPress("7")}
                                >
                                    <CardNumber title='Hy sinh' number='7' />
                                </TouchableOpacity>
                            </View>

                            {/* Button  */}
                            <View style={{ marginTop: 16, marginBottom: 16, height: 50, alignItems: 'center' }}>
                                <TouchableOpacity style={[styles.button, { width: buttonWidth }]}>
                                    <Text style={{ ...FONTS.body3, color: COLORS.white }}> Khám phá </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Personal Number  */}
                        <View style={{}}>
                            <View style={{ height: 32, paddingLeft: 16 }}>
                                <Text style={{ ...FONTS.light2 }}>Con số cá nhân</Text>
                            </View>

                            {/* 1 - 4 - 7 */}
                            <View style={{ marginBottom: 16, marginTop: 16, flexDirection: 'row' }}>
                                <TouchableOpacity
                                    style={{ paddingLeft: 16 }}
                                    onPress={() => this.onNumberPress("1")}
                                >
                                    <CardNumber title='Số biểu đạt' number='4' />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onNumberPress("4")}
                                >
                                    <CardNumber color={COLORS.pink} title='Số chủ đạo' number='10' />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onNumberPress("7")}
                                >
                                    <CardNumber title='Số linh hồn' number='8' />
                                </TouchableOpacity>
                            </View>

                            <View style={{ height: 50 }}></View>

                        </View>
                    </View>
                </ScrollView>

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
    button: {
        height: 50,
        backgroundColor: COLORS.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    }
})