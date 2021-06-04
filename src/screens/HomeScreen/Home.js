import React, { Component } from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, FlatList } from 'react-native';
import { COLORS, FONTS, icons } from '../../constants';
import Header from '../../components/header.js'

export class Home extends Component {
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
                    <Header headerText={'HOME'} />
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
                            //keyExtractor={item => item.id}
                        />
                    </View>

                </View>

            </SafeAreaView>
        )
    }
}

const DATA = [ // Sau thì dùng cái trong file data.js nha
    // thêm scroll view vào nữa 
    {
        title: 'Mục đích sống',
        describe:'Người số 9 luôn tự cảm thấy mình đầy trách nhiệm. Họ phù hợp với nghệ thuật và các lĩnh vực nhân văn hơn là với khoa học hay thương mại. Rất nhiều người đi đầu trong lĩnh vực văn...'
    },
    {
        title: 'Đặc điểm nổi bật',
        describe:'Có hoài bão, có trách nhiệm, có lý tưởng là ba giá trị nổi bật trong con đường tiến hóa của Người số 9, nhưng trên hết, trách nhiệm với bản thân mới là điểm nhấn đặc biệt của họ...'
    },
    {
        title: 'Khuynh hướng cần khắc phục',
        describe:'Khi người Số 9 không áp được những lý tưởng mà họ đặt ra cho người khác lên chính bản thân mình, họ trở nên tiêu cực. Họ cần đặc biệt lưu ý để không trở thành nạn nhân của thói đạo đức...'
    },
    {
        title: 'Hướng phát triển',
        describe:'Khi người Số 9 không áp được những lý tưởng mà họ đặt ra cho người khác lên chính bản thân mình, họ trở nên tiêu cực. Họ cần đặc biệt lưu ý để không trở thành nạn nhân của thói đạo đức...'
    },
    {
        title: 'Nghề nghiệp phù hợp',
        describe:'Khi người Số 9 không áp được những lý tưởng mà họ đặt ra cho người khác lên chính bản thân mình, họ trở nên tiêu cực. Họ cần đặc biệt lưu ý để không trở thành nạn nhân của thói đạo đức...'
    },
];

const Item = ({ title,describe }) => (
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
        // backgroundColor: '#f9c2ff',
        // padding: 20,
        // marginVertical: 8,
        // marginHorizontal: 16,
    },
    title: {
        fontFamily: 'Roboto-Regular', 
        fontSize: 17, 
        textDecorationLine: 'underline'
    },
    describe: {
        fontFamily: 'Roboto-Regular', 
        fontSize: 17
    }
})