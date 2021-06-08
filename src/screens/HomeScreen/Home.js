import React, { Component } from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, FlatList } from 'react-native';
import { COLORS, FONTS, icons } from '../../constants';
import Header from '../../components/header.js'

import { LifePathNumber } from '../../../data/LifePathNumber';
import calculator from '../../helper/calculator';
import { CardInformationModal } from '../../components/CardInformationModal';
export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: LifePathNumber,

            isVisible: false
        }

        // calculator.calNumber("23112000")
        // calculator.nameInfo("Vi huu duc")
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/*Header */}
                <View
                    style={{
                        height: 48,
                        borderBottomColor: COLORS.black,
                        borderBottomWidth: 1
                    }}>
                    <Header
                        headerText={'HOME'}
                        navigateToSetting={() => {
                            this.props.navigation.push('Setting')
                        }}
                    />
                </View>

                {/*Name and BirthDate */}
                <View style={{
                    height: '15%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ ...FONTS.h2 }}>VI HUU DUC</Text>
                    <Text style={{ ...FONTS.body2 }}>1-1-1111</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', paddingTop: 16, justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 20 }}>Số chủ đạo: </Text>
                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 20 }}>9</Text>
                    </View>

                    {/* FlatList */}
                    <View>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>

                </View>

                <CardInformationModal
                    isVisible={this.state.isVisible}
                />
            </SafeAreaView>
        )
    }
}

const DATA = [ // Sau thì dùng cái trong file data.js nha
    // thêm scroll view vào nữa 
    {
        id: 1,
        title: 'Mục đích sống',
        describe: LifePathNumber[0]['Số 2']['Mục đích sống'].text
    },
    {
        id: 2,
        title: 'Đặc điểm nổi bật',
        describe: LifePathNumber[0]['Số 2']['Đặc điểm nổi bật'].text
    },
    {
        id: 3,
        title: 'Khuynh hướng cần khắc phục',
        describe: 'Khi người Số 9 không áp được những lý tưởng mà họ đặt ra cho người khác lên chính bản thân mình, họ trở nên tiêu cực. Họ cần đặc biệt lưu ý để không trở thành nạn nhân của thói đạo đức...'
    },
    {
        id: 4,
        title: 'Hướng phát triển',
        describe: 'Khi người Số 9 không áp được những lý tưởng mà họ đặt ra cho người khác lên chính bản thân mình, họ trở nên tiêu cực. Họ cần đặc biệt lưu ý để không trở thành nạn nhân của thói đạo đức...'
    },
    {
        id: 5,
        title: 'Nghề nghiệp phù hợp',
        describe: 'Khi người Số 9 không áp được những lý tưởng mà họ đặt ra cho người khác lên chính bản thân mình, họ trở nên tiêu cực. Họ cần đặc biệt lưu ý để không trở thành nạn nhân của thói đạo đức...'
    },
];

const Item = ({ title, describe }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.describe}>{describe}</Text>
    </View>
);

const renderItem = ({ item }) => (
    <Item title={item.title} describe={item.describe} />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    item: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 16
    },
    title: {
        fontFamily: 'Roboto-Regular',
        fontSize: 17,
        textDecorationLine: 'underline',
        margin: 6
    },
    describe: {
        fontFamily: 'Roboto-Regular',
        fontSize: 17,
        margin: 6
    }
})