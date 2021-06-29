import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import { CardNumber } from '../../components';
import { COLORS, FONTS, icons } from '../../constants';

export class BirthChartResultScreen extends Component {

    constructor(props) {
        super(props)

        console.log("BIRTH RESULT - CONSTRUCTOR")

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
            isolatedDescribe: ''
        }
    }

    onNumberPress(number) {
        console.log("PRESSSSS", number)
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
            var chartResult = calculator.filterChart(birthdate, ultilities.removeVietNameseTone(username))

            if (username !== null) {
                this.setState({
                    name: username,
                    birthdate: birthdate,
                    number: {
                        lifePath: lifePath.lifePath,
                        soul: nameNumber.soul,
                        outer: nameNumber.outer
                    },
                    filterChart: chartResult
                })
            } else {
                this.setState({
                    name: '',
                    birthdate: '',
                    name: '',
                    filterChart: '',
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    // Đổ data vào cardInformation
    onNumberPress(numberfilled, numbercard) {
        var isolated = CheckIsolated.isIsolated(this.state.filterChart, numbercard)

        this.setState({
            cardtitle: BirthChartData[numberfilled].title + isolated.isolatedTitle,
            carddescribe: BirthChartData[numberfilled].describe + '\n\n' + isolated.isolatedDescribe,
            cardInformationVisible: !this.state.cardInformationVisible
        })
    }

    render() {

        console.log("BIRTH RESULT - RENDER")
        const buttonWidth = Dimensions.get('window').width - 64;

        return (
            <SafeAreaView style={styles.safeArea}>
                {/* Header  */}
                <View style={styles.header}>
                    <TouchableOpacity
                        style={{ marginLeft: 16, height: 24, width: 24 }}
                        onPress={() => {
                            console.log("BACKKK to Home")
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
                    <Text style={{ ...FONTS.largeTitle, flex: 1, textAlign: 'center' }}>Các con số ngày sinh</Text>
                    <View style={{ marginRight: 16, height: 24, width: 24 }} />
                </View>
                {/* Information */}

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
                                    onPress={() => { this.props.navigation.push("BirthChartResult") }}
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
                                    onPress={() => this.onNumberPress("1")}
                                >
                                    <CardNumber color={COLORS.brownCard} title='Số biểu đạt' number={this.state.number.outer} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onNumberPress("4")}
                                >
                                    <CardNumber color={COLORS.orangeCard} title='Số chủ đạo' number={this.state.number.lifePath} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ paddingLeft: 8 }}
                                    onPress={() => this.onNumberPress("7")}
                                >
                                    <CardNumber color={COLORS.brownCard} title='Số linh hồn' number={this.state.number.soul} />
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