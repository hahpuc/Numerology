import React, { Component } from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { COLORS, FONTS, icons, images } from '../../constants';
import Header from '../../components/header.js'
import { CardNumber } from '../../components';
import { CardInformationModal } from '../../components/CardInformationModal';
import calculator from '../../helper/calculator';
import TextCollapse from '../../components/TextCollapse.js'
import { LifePathNumber } from '../../../data/LifePathNumber';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cardInformationVisible: false,
            cardtitle: ' ',
            carddescribe: ' ',
            name: '',
            birthdate: '',
            lifePathNumber: 9,
            cardInformationVisible: false,
            indexLifePathNumber: 8,

            unsubscribe: undefined,
        }
    }

    componentDidMount() {

        this.getData()
        const unsubscribe = this.props.navigation.addListener('focus', () => {
            console.log('HOME - Focus')
            this.getData()
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        this.setState({ unsubscribe: unsubscribe })
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }



    // componentDidUpdate(prevState) {
    //     // console.log("COMPONENT DID UPDATE")
    //     if (this.state.name != prevState.name) {
    //         this.getData()
    //     }
    // }
    componentWillUnmount() {
        if (this.state.unsubscribe) {

            console.log("HOME: - Unsubsribe()")
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
            if (username !== null) {
                this.setState({
                    name: username,
                    birthdate: birthdate,
                    lifePathNumber: number.lifePath
                })
            } else {
                this.setState({
                    name: '',
                    birthdate: ''
                })
            }
            if (number.lifePath == 22)
                this.setState({ indexLifePathNumber: 10 })
            else {
                this.setState({ indexLifePathNumber: number.lifePath - 2 })
            }
        } catch (e) {
            console.log(e)
        }
    }


    onNumberPress(title, describe) {
        this.setState({
            cardtitle: title,
            carddescribe: describe,
            cardInformationVisible: !this.state.cardInformationVisible
        })
    }

    renderItemComponent = (item, index) => (
        <TouchableOpacity style={styles.item}
            onPress={() => this.onNumberPress(item.title, item.describe)}>
            <Text style={styles.title}>{item.title}</Text>
            <TextCollapse style={styles.describe} text={item.describe}></TextCollapse>
        </TouchableOpacity>
    );


    render() {

        return (

            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={images.background2}
                    resizeMode='cover'
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute'
                    }}>

                </ImageBackground>

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
                                <Text style={{ ...FONTS.body1 }}>{this.state.name}</Text>
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
                                        data={LifePathNumber[this.state.indexLifePathNumber][this.state.lifePathNumber]}
                                        scrollEnabled={false}
                                        renderItem={({ item, index }) => this.renderItemComponent(item, index)}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
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

            </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 16,
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 8,
        borderRadius: 20,

    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        //textDecorationLine:'underline',
        ...FONTS.body3,
        margin: 6,
    },
    describe: {
    }
})