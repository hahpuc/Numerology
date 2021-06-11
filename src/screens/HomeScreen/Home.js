import React, { Component } from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, VirtualizedList, LogBox } from 'react-native';
import { COLORS, FONTS, icons } from '../../constants';
import Header from '../../components/header.js'
import { CardNumber } from '../../components';
import { CardInformationModal } from '../../components/CardInformationModal';
import TextCollapse from 'react-native-text-collapse';
import calculator from '../../helper/calculator';
import { LifePathNumber } from '../../../data/LifePathNumber';



export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            DATAA: LifePathNumber[1]['Số 3'],
            cardInformationVisible: false
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
            <Text style={styles.describe}>{item.describe}</Text>
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
                            <Text style={{ ...FONTS.Medium1 }}>VI HUU DUC</Text>
                            <Text style={{ ...FONTS.light1 }}>1-1-1111</Text>
                        </View>

                        {/*Information */}
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ ...FONTS.body2 }}>Số chủ đạo: </Text>
                                <Text style={{ ...FONTS.h2 }}>9</Text>
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