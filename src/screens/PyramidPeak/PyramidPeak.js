import React, { Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, images } from '../../constants';
import calculator from '../../helper/calculator';
import ultilities from '../../helper/ultilities';
import TextCollapse from '../../components/TextCollapse';
import { PyramidPeakData } from '../../../data/PyramidPeakData';
import { CardInformationModal } from '../../components/CardInformationModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import pyramidCalculator from '../../helper/pyramidCalculator';


export class PyramidPeak extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            birthdate: '',
            lifePathNumber: 8,
            cardInformationVisible: false,
            cardtitle: ' ',
            carddescribe: ' ',
            age: 32,
            firstPeak: 1,
            secondPeak: 1,
            thirdPeak: 1,
            fourthPeak: 1,

            unsubscribe: undefined,
        }
    }

    componentDidMount() {

        this.getData()
        const unsubscribe = this.props.navigation.addListener('focus', () => {
            console.log('Pyramid Peak - Focus')
            this.getData()
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        this.setState({ unsubscribe: unsubscribe })
    }


    componentWillUnmount() {
        if (this.state.unsubscribe) {

            console.log("Pyramid: - Unsubsribe()")
            this.state.unsubscribe()
        }
    }

    getData = async () => {
        // Get Username + BirthDate 
        try {
            const username = await AsyncStorage.getItem('userName')
            const birthdate = await AsyncStorage.getItem('birthDate')

            // Get LifePathNumber 
            var number = calculator.calNumber(birthdate)
            var numberTop = pyramidCalculator.calNumberPyramid(birthdate)

            if (username !== null && number.lifePath != 22) {
                this.setState({
                    name: username,
                    birthdate: birthdate,
                    lifePathNumber: number.lifePath,
                    age: 36 - number.lifePath,
                    firstPeak: numberTop.firstTop,
                    secondPeak: numberTop.secondTop,
                    thirdPeak: numberTop.thirdTop,
                    fourthPeak: numberTop.fourthTop
                })
            }
            else if (number.lifePath == 22) {
                this.setState({
                    name: username,
                    birthdate: birthdate,
                    lifePathNumber: number.lifePath,
                    age: 32,
                    firstPeak: numberTop.firstTop,
                    secondPeak: numberTop.secondTop,
                    thirdPeak: numberTop.thirdTop,
                    fourthPeak: numberTop.fourthTop
                })
            }
            else {
                this.setState({
                    name: '',
                    birthdate: ''
                })
            }
        } catch (e) {
            console.log(e)
        }
    }


    onItemPress(title, describe) {
        this.setState({
            cardtitle: title,
            carddescribe: describe,
            cardInformationVisible: !this.state.cardInformationVisible
        })
    }

    render() {
        return (

            <SafeAreaView style={styles.safeArea}>

                {/* Header  */}
                <View style={styles.header}>
                    <Text style={{ ...FONTS.largeTitle }}>Độ tuổi đạt bốn đỉnh cao</Text>
                </View>

                <View style={styles.container} >

                    {/* Title  */}
                    <TouchableOpacity style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                        <Text style={{ fontFamily: 'Roboto-Light', fontSize: 20 }}>Số chủ đạo: </Text>
                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 20 }}>{this.state.lifePathNumber}</Text>
                    </TouchableOpacity>

                    {/* Info */}
                    <View style={{ flex: 1 }}>

                        {/* Item 1 */}
                        <TouchableOpacity style={{ height: 105, marginTop: 16 }}
                            onPress={() => this.onItemPress("Năm " + this.state.age + " tuổi", PyramidPeakData[this.state.firstPeak - 1][this.state.firstPeak].content)}>
                            <View style={styles.item}>
                                <View style={{ backgroundColor: COLORS.brownCard, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, width: '30%', height: 103, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ ...FONTS.logoTitle, color: COLORS.white }}>{this.state.age}</Text>
                                </View>
                                <View style={{ width: 1, backgroundColor: COLORS.black }}></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 8, paddingRight: 8 }}>
                                    <TextCollapse text={PyramidPeakData[this.state.firstPeak - 1][this.state.firstPeak].content} initialTextLength={110} ></TextCollapse>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* Item 2 */}
                        <TouchableOpacity style={{ height: 105, marginTop: 16 }}
                            onPress={() => this.onItemPress("Năm " + (this.state.age + 9) + " tuổi", PyramidPeakData[this.state.secondPeak - 1][this.state.secondPeak].content)}>
                            <View style={styles.item}>
                                <View style={{ backgroundColor: COLORS.brownCard, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, width: '30%', height: 103, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ ...FONTS.logoTitle, color: COLORS.white }}>{this.state.age + 9}</Text>
                                </View>
                                <View style={{ width: 1, backgroundColor: COLORS.black }}></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 8, paddingRight: 8 }}>
                                    <TextCollapse text={PyramidPeakData[this.state.secondPeak - 1][this.state.secondPeak].content} initialTextLength={110} ></TextCollapse>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* Item 3 */}
                        <TouchableOpacity style={{ height: 105, marginTop: 16 }}
                            onPress={() => this.onItemPress("Năm " + (this.state.age + 18) + " tuổi", PyramidPeakData[this.state.thirdPeak - 1][this.state.thirdPeak].content)}>
                            <View style={styles.item}>
                                <View style={{ backgroundColor: COLORS.brownCard, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, width: '30%', height: 103, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ ...FONTS.logoTitle, color: COLORS.white }}>{this.state.age + 18}</Text>
                                </View>
                                <View style={{ width: 1, backgroundColor: COLORS.black }}></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 8, paddingRight: 8 }}>
                                    <TextCollapse text={PyramidPeakData[this.state.thirdPeak - 1][this.state.thirdPeak].content} initialTextLength={110}></TextCollapse>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* Item 4 */}
                        <TouchableOpacity style={{ height: 105, marginTop: 16 }}
                            onPress={() => this.onItemPress("Năm " + (this.state.age + 27) + " tuổi", PyramidPeakData[this.state.fourthPeak - 1][this.state.fourthPeak].content)}>
                            <View style={styles.item}>
                                <View style={{ backgroundColor: COLORS.brownCard, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, width: '30%', height: 103, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ ...FONTS.logoTitle, color: COLORS.white }}>{this.state.age + 27}</Text>
                                </View>
                                <View style={{ width: 1, backgroundColor: COLORS.black }}></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 8, paddingRight: 8 }}>
                                    <TextCollapse text={PyramidPeakData[this.state.fourthPeak - 1][this.state.fourthPeak].content} initialTextLength={110}></TextCollapse>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

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
        backgroundColor: COLORS.primary,
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
    item: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16,
        // backgroundColor: 'yellow',
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 20,
    }
})