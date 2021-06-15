import React, { Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { COLORS, FONTS } from '../../constants';
import calculator from '../../helper/calculator';
import ultilities from '../../helper/ultilities';
import TextCollapse from '../../components/TextCollapse';
import { PyramidPeakData } from '../../../data/PyramidPeakData';
import { CardInformationModal } from '../../components/CardInformationModal';
import AsyncStorage from '@react-native-async-storage/async-storage';




export class PyramidPeak extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            birthdate: '',
            lifePathNumber: 8,
            age:34,
            cardInformationVisible: false,
        }
        this.getData()
    }

    getData = async () => {
        // Get Username + BirthDate 
        try {
            const username = await AsyncStorage.getItem('userName')
            const birthdate = await AsyncStorage.getItem('birthDate')

            // Get LifePathNumber 
            var number = calculator.calNumber(birthdate)
            console.log("LIFE PATH: ", number)
            if (username !== null) {
                this.setState({
                    name: username,
                    birthdate: birthdate,
                    lifePathNumber: number.lifePath,
                    age:36-lifePathNumber
                })
                console.log('bbbbbbbbbbbbbbbbbb',this.state)
            } else {
                this.setState({
                    name: '',
                    birthdate: ''
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    //     console.log(PyramidPeakData[0][1].content)
    //     var lifePath = calculator.calNumber("04-04-2000")
    //     var name = calculator.nameInfo(ultilities.removeVietNameseTone("Nguyễn Thành Long"))
    //     console.log(lifePath)
    //     console.log(name)
    // }


    render() {
        console.log("aaaaaaaaaaaaaaaaaaaa",this.state)
        return (

            <SafeAreaView style={styles.safeArea}>

                {/* Header  */}
                <View style={styles.header}>
                    <Text style={{ ...FONTS.largeTitle }}>Độ tuổi đạt bốn đỉnh cao</Text>
                </View>

                <View style={styles.container} >

                    {/* Title  */}
                    <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'Roboto-Light', fontSize: 20 }}>Số chủ đạo: </Text>
                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 20 }}>9</Text>
                    </View>

                    {/* Info */}
                    <View style={{ flex: 1 }}>

                        {/* Item 1 */}
                        <View style={{ height: 100, marginTop: 16 }}>
                            <View style={styles.item}>
                                <View style={{ backgroundColor: COLORS.brownCard, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, width: '30%', height: 98, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ ...FONTS.logoTitle, color: COLORS.white }}>{this.state.age}</Text>
                                </View>
                                <View style={{ width: 1, backgroundColor: COLORS.black }}></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 8, paddingRight: 8 }}>
                                    <TextCollapse text={PyramidPeakData[0][1].content} initialTextLength={80} ></TextCollapse>
                                </View>
                            </View>
                        </View>

                        {/* Item 2 */}
                        <View style={{ height: 100, marginTop: 16 }}>
                            <View style={styles.item}>
                                <View style={{ backgroundColor: COLORS.brownCard, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, width: '30%', height: 98, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ ...FONTS.logoTitle, color: COLORS.white }}>{this.state.age + 9}</Text>
                                </View>
                                <View style={{ width: 1, backgroundColor: COLORS.black }}></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 8, paddingRight: 8 }}>
                                    <TextCollapse text={PyramidPeakData[0][1].content} initialTextLength={80} ></TextCollapse>
                                </View>
                            </View>
                        </View>

                        {/* Item 3 */}
                        <View style={{ height: 100, marginTop: 16 }}>
                            <View style={styles.item}>
                                <View style={{ backgroundColor: COLORS.brownCard, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, width: '30%', height: 98, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ ...FONTS.logoTitle, color: COLORS.white }}>{PyramidPeakData[0][1].content}</Text>
                                </View>
                                <View style={{ width: 1, backgroundColor: COLORS.black }}></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 8, paddingRight: 8 }}>
                                    <TextCollapse text={PyramidPeakData[0][1].content} initialTextLength={80}></TextCollapse>
                                </View>
                            </View>
                        </View>

                        {/* Item 4 */}
                        <View style={{ height: 100, marginTop: 16 }}>
                            <View style={styles.item}>
                                <View style={{ backgroundColor: COLORS.brownCard, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, width: '30%', height: 98, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ ...FONTS.logoTitle, color: COLORS.white }}>{PyramidPeakData[0][1].content}</Text>
                                </View>
                                <View style={{ width: 1, backgroundColor: COLORS.black }}></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 8, paddingRight: 8 }}>
                                    <TextCollapse text={PyramidPeakData[0][1].content} initialTextLength={80}></TextCollapse>
                                </View>
                            </View>
                        </View>


                    </View>
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