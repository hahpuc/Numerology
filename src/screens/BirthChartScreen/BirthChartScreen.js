import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { CardNumber } from '../../components';
import { CardInformationModal } from '../../components/CardInformationModal';
import { COLORS, FONTS } from '../../constants';
import calculator from '../../helper/calculator';
import ultilities from '../../helper/ultilities';
import { BirthChartData, DataBirth } from '../../../data/BirthChartData';
import CheckIsolated from '../../helper/CheckIsolated';
import { SoulNumberData } from '../../../data/SoulNumberData';
import { OuterNumerData } from '../../../data/OuterNumberData';

export class BirthChartScreen extends Component {

    constructor(props) {

        super(props)

        this.state = {
            cardInformationVisible: false,
            name: '',
            birthdate: '',
            number: {
                lifePath: '',
                soul: '',
                outer: '',
            },
            filterChart: '',

            //Card Information
            cardtitle: ' ',
            carddescribe: ' ',
            unsubscribe: undefined,

            //Những số bị cô lập
            isolatedTitle: '',
            isolatedDescribe: '',

            // Type show: only dateBirth or (dateBirth + name) 
            isOnlyDateBirth: true,
            typeName: 'Biểu đồ ngày sinh',
        }
    }


    componentDidMount() {
        this.getData()

        const unsubscribe = this.props.navigation.addListener('focus', () => {
            console.log('BIRTH CHART- Focus')
            this.getData()
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        this.setState({ unsubscribe: unsubscribe })
    }

    componentWillUnmount() {
        if (this.state.unsubscribe) {

            console.log("BIRTH CHART: - Unsubsribe()")
            this.state.unsubscribe()
        }
    }

    getData = async () => {
        // Get Username + BirthDate 
        try {
            const username = await AsyncStorage.getItem('userName')
            const birthdate = await AsyncStorage.getItem('birthDate')

            // Get LifePathNumber 
            var lifePath = calculator.calNumber(birthdate)
            var nameNumber = calculator.nameInfo(ultilities.removeVietNameseTone(username))

            if (this.state.isOnlyDateBirth == true) {
                var chartResult = calculator.filterBirthChart(birthdate)
            } else {
                var chartResult = calculator.filterFullBirthChart(birthdate, ultilities.removeVietNameseTone(username))
            }

            if (username !== null) {
                this.setState({
                    name: username,
                    birthdate: birthdate,
                    number: {
                        lifePath: lifePath.lifePath,
                        soul: nameNumber.soul,
                        outer: nameNumber.outer
                    },
                    filterChart: chartResult,
                    typeName: (this.state.isOnlyDateBirth) ? 'Biểu đồ ngày sinh' : 'Biểu đồ tên & ngày sinh',
                })
            } else {
                this.setState({
                    name: '',
                    birthdate: '',
                    name: '',
                    filterChart: '',
                    typeName: (this.state.isOnlyDateBirth) ? 'Biểu đồ ngày sinh' : 'Biểu đồ tên & ngày sinh',
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    // Đổ data vào cardInformation
    onNumberPress(numberfilled, numbercard) {

        var numberValidate = ultilities.checkOutOfIndexBirthChartData(numberfilled)

        console.log("NUMBER VALIDATE ", numberValidate)

        var isolated = CheckIsolated.isIsolated(this.state.filterChart, numbercard)

        this.setState({
            cardtitle: BirthChartData[numberValidate].title + isolated.isolatedTitle,
            carddescribe: BirthChartData[numberValidate].describe + '\n\n' + isolated.isolatedDescribe,
            cardInformationVisible: !this.state.cardInformationVisible
        })
    }

    handleChangeToNameType = () => {
        console.log("Handle Change Name Type")

        this.setState({
            isOnlyDateBirth: !this.state.isOnlyDateBirth,
        })

        this.getData()
    }

    onSoulNumberPress = (value) => {
        // console.log(SoulNumberData[value])

        this.setState({
            cardtitle: SoulNumberData[value].title,
            carddescribe: SoulNumberData[value].describe,
            cardInformationVisible: !this.state.cardInformationVisible
        })
    }

    onOuterNumberPress = (value) => {
        this.setState({
            cardtitle: OuterNumerData[value].title,
            carddescribe: OuterNumerData[value].describe,
            cardInformationVisible: !this.state.cardInformationVisible
        })
    }

    render() {
        const buttonWidth = Dimensions.get('window').width - 32;

        return (
            <SafeAreaView style={styles.safeArea}>
                {/* Header  */}
                <View style={styles.header}>
                    <Text style={{ ...FONTS.largeTitle }}>Khám phá ngày sinh</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Chart  */}
                    <View style={styles.container}>
                        <View style={{}}>
                            <View style={{ marginTop: 16, height: 32, paddingLeft: 16 }}>
                                <Text style={{ ...FONTS.light2 }}>{this.state.typeName}</Text>
                            </View>

                            {/* 3 - 6 - 9 */}
                            <View style={{ marginTop: 16, flexDirection: 'row' }}>
                                <TouchableOpacity
                                    style={{ paddingLeft: 16 }}
                                    onPress={() => this.onNumberPress(this.state.filterChart[2], 3)}
                                >
                                    <CardNumber color={COLORS.brownCard} title='Trí não' number={this.state.filterChart[2]} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onNumberPress(this.state.filterChart[5], 6)}
                                >
                                    <CardNumber color={COLORS.brownCard} title='Sáng tạo' number={this.state.filterChart[5]} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onNumberPress(this.state.filterChart[8], 9)}
                                >
                                    <CardNumber color={COLORS.brownCard} title='Lý tưởng' number={this.state.filterChart[8]} />
                                </TouchableOpacity>
                            </View>

                            {/* 2 - 5 - 8 */}
                            <View style={{ marginTop: 16, flexDirection: 'row' }}>
                                <TouchableOpacity
                                    style={{ paddingLeft: 16 }}
                                    onPress={() => this.onNumberPress(this.state.filterChart[1], 2)}
                                >
                                    <CardNumber color={COLORS.brownCard} title='Trực giác' number={this.state.filterChart[1]} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onNumberPress(this.state.filterChart[4], 5)}

                                >
                                    <CardNumber color={COLORS.brownCard} title='Cảm xúc' number={this.state.filterChart[4]} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onNumberPress(this.state.filterChart[7], 8)}
                                >
                                    <CardNumber color={COLORS.brownCard} title='Nghĩa vụ' number={this.state.filterChart[7]} />
                                </TouchableOpacity>
                            </View>

                            {/* 1 - 4 - 7 */}
                            <View style={{ marginTop: 16, flexDirection: 'row' }}>
                                <TouchableOpacity
                                    style={{ paddingLeft: 16 }}
                                    onPress={() => this.onNumberPress(this.state.filterChart[0], 1)}
                                >
                                    <CardNumber color={COLORS.brownCard} title='Tính cách' number={this.state.filterChart[0]} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onNumberPress(this.state.filterChart[3], 4)}
                                >
                                    <CardNumber color={COLORS.brownCard} title='Thực tế' number={this.state.filterChart[3]} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onNumberPress(this.state.filterChart[6], 7)}
                                >
                                    <CardNumber color={COLORS.brownCard} title='Hy sinh' number={this.state.filterChart[6]} />
                                </TouchableOpacity>
                            </View>

                            {/* Button  */}
                            <View style={{ marginTop: 16, marginBottom: 16, height: 50, alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={[styles.button, { width: buttonWidth }]}
                                    // onPress={() => { this.props.navigation.push("BirthChartResult") }}
                                    onPress={this.handleChangeToNameType}
                                >
                                    <Text style={{ ...FONTS.body3, color: COLORS.white }}> Khám phá </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Personal Number  */}
                        <View style={{}}>
                            <View style={{ height: 32, paddingLeft: 16 }}>
                                <Text style={{ ...FONTS.light2 }}>Con số cá nhân</Text>
                            </View>

                            <View style={{ marginBottom: 16, marginTop: 16, flexDirection: 'row' }}>
                                <TouchableOpacity
                                    style={{ paddingLeft: 16 }}
                                    onPress={() => this.onOuterNumberPress(this.state.number.outer)}
                                >
                                    <CardNumber color={COLORS.brownCard} title='Số biểu đạt' number={this.state.number.outer} />
                                </TouchableOpacity>

                                <View
                                    style={{ paddingLeft: 8 }}
                                // onPress={() => this.onNumberPress("4")}
                                >
                                    <CardNumber color={COLORS.orangeCard} title='Số chủ đạo' number={this.state.number.lifePath} />
                                </View>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onSoulNumberPress(this.state.number.soul)}
                                >
                                    <CardNumber color={COLORS.brownCard} title='Số linh hồn' number={this.state.number.soul} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ height: 50 }}></View>

                        </View>
                    </View>
                </ScrollView>

                <CardInformationModal
                    cardTitle={this.state.cardtitle}
                    cardDescribe={this.state.carddescribe}
                    isVisible={this.state.cardInformationVisible}
                    onRequestClose={() => this.setState({ cardInformationVisible: !this.state.cardInformationVisible })}
                />

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