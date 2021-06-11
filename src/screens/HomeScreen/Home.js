import React, { Component } from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, VirtualizedList, LogBox } from 'react-native';
import { COLORS, FONTS, icons } from '../../constants';
import Header from '../../components/header.js'
import { CardNumber } from '../../components';
import { CardInformationModal } from '../../components/CardInformationModal';
import calculator from '../../helper/calculator';
import TextCollapse from '../../components/TextCollapse.js'
import { LifePathNumber } from '../../../data/LifePathNumber';
import AsyncStorage from '@react-native-async-storage/async-storage';



export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            birthdate: '',
            lifePathNumber: '0',
            DATAA: LifePathNumber[1]['Số 3'],
            cardInformationVisible: false
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
                    lifePathNumber: number.lifePath
                })
            } else {
                this.setState({
                    name: '',
                    birthdate: '',
                })
            }
        } catch (e) {
            console.log(e)
        }
    }


    onNumberPress(number) {
        console.log("PRESSSSS", number)
        this.setState({
            cardInformationVisible: !this.state.cardInformationVisible
        })
    }
    renderItemComponent = (item, index) => (
        <TouchableOpacity style={styles.item}
            onPress={() => this.onNumberPress("3")}>
            <Text style={styles.title}>{item.title}</Text>
            <TextCollapse style={styles.describe} text={item.describe}></TextCollapse>
        </TouchableOpacity>
    );

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/*Header */}
                <View
                    style={{
                        height: 48,
                        borderBottomColor: COLORS.brown,
                        borderBottomWidth: 1,
                    }}>
                    <Header
                        headerText={'HOME'}
                        navigateToSetting={() => this.props.navigation.push("Setting")}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, paddingBottom: 16, }}>
                        {/*Name and BirthDate */}
                        <View style={{
                            height: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{ ...FONTS.Medium1 }}>{this.state.name}</Text>
                            <Text style={{ ...FONTS.light2 }}>{this.state.birthdate}</Text>
                        </View>

                        {/*Information */}
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ ...FONTS.body2 }}>Số chủ đạo: </Text>
                                <Text style={{ ...FONTS.h2 }}>{this.state.lifePathNumber}</Text>
                            </View>
                            <View>
                                {/* FlatList */}
                                <FlatList
                                    //horizontal={true}
                                    data={this.state.DATAA}
                                    scrollEnabled={true}
                                    renderItem={({ item, index }) => this.renderItemComponent(item, index)}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <CardInformationModal
                    isVisible={this.state.cardInformationVisible}
                    onRequestClose={() => this.setState({ cardInformationVisible: !this.state.cardInformationVisible })}
                />
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    item: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 16,
        paddingTop: 8,
        paddingLeft: 8,
        paddingBottom: 8,
        borderRadius: 20,

    },
    title: {
        ...FONTS.body3,
        margin: 6,
    },
    describe: {
        ...FONTS.light3,
        margin: 6
    }
})