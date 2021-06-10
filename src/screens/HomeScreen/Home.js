import React, { Component } from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, VirtualizedList, LogBox } from 'react-native';
import { COLORS, FONTS, icons } from '../../constants';
import Header from '../../components/header.js'
import { CardNumber } from '../../components';
import { CardInformationModal } from '../../components/CardInformationModal';
import calculator from '../../helper/calculator';
import TextCollapse from '../../components/TextCollapse.js'
import { LifePathNumber } from '../../../data/LifePathNumber';

export class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            DATA: LifePathNumber[0][2],
            cardInformationVisible: false,
            lifePathNum:9,
            cardtitle:'A',
            carddescribe:'B'
        }
    }

    onNumberPress(title,describe) {
        this.setState({
            cardtitle:title,
            carddescribe:describe,
            cardInformationVisible: !this.state.cardInformationVisible
        })
    }
    renderItemComponent = (item, index) => (
        <TouchableOpacity style={styles.item}
            onPress={() => this.onNumberPress(item.title,item.describe)}>
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
                        borderBottomColor: COLORS.black,
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
                            <Text style={{ ...FONTS.h2 }}>VI HUU DUC</Text>
                            <Text style={{ ...FONTS.body2 }}>1-1-1111</Text>
                        </View>

                        {/*Information */}
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', paddingTop: 16, justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 20 }}>Số chủ đạo: </Text>
                                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 20 }}>9</Text>
                            </View>
                            <View>
                                {/* FlatList */}
                                <FlatList
                                    //horizontal={true}
                                    data={this.state.DATA}
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
        paddingLeft: 8
    },
    title: {
        fontFamily: 'Roboto-Regular',
        fontSize: 17,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        margin: 6,
    },
    describe: {
        // fontFamily: 'Roboto-Regular',
        // fontSize: 17,
        // margin: 6,
        // textAlign:'center',
        // justifyContent:'center'
    }
})