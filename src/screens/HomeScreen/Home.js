import React, { Component } from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, VirtualizedList, LogBox } from 'react-native';
import { COLORS, FONTS, icons } from '../../constants';
import Header from '../../components/header.js'
import { CardNumber } from '../../components';
import { CardInformationModal } from '../../components/CardInformationModal';
import TextCollapse from 'react-native-text-collapse';
import { LifePathNumber } from '../../../data/LifePathNumber';
import calculator from '../../helper/calculator';

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            DATAA: [ // Sau thì dùng cái trong file data.js nha
                // thêm scroll view vào nữa 
                {
                    id: 1,
                    title: 'Mục đích sống',
                    describe: 'Người số 9 luôn tự cảm thấy mình đầy trách nhiệm. Họ phù hợp với nghệ thuật và các lĩnh vực nhân văn hơn là với khoa học hay thương mại. Rất nhiều người đi đầu trong lĩnh vực văn...'
                },
                {
                    id: 2,
                    title: 'Đặc điểm nổi bật',
                    describe: 'Có hoài bão, có trách nhiệm, có lý tưởng là ba giá trị nổi bật trong con đường tiến hóa của Người số 9, nhưng trên hết, trách nhiệm với bản thân mới là điểm nhấn đặc biệt của họ...'
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
                },                {
                    id: 6,
                    title: 'Nghề nghiệp phù hợp',
                    describe: 'Khi người Số 9 không áp được những lý tưởng mà họ đặt ra cho người khác lên chính bản thân mình, họ trở nên tiêu cực. Họ cần đặc biệt lưu ý để không trở thành nạn nhân của thói đạo đức...'
                },                {
                    id: 7,
                    title: 'Nghề nghiệp phù hợp',
                    describe: 'Khi người Số 9 không áp được những lý tưởng mà họ đặt ra cho người khác lên chính bản thân mình, họ trở nên tiêu cực. Họ cần đặc biệt lưu ý để không trở thành nạn nhân của thói đạo đức...'
                },                {
                    id: 8,
                    title: 'Nghề nghiệp phù hợp',
                    describe: 'Khi người Số 9 không áp được những lý tưởng mà họ đặt ra cho người khác lên chính bản thân mình, họ trở nên tiêu cực. Họ cần đặc biệt lưu ý để không trở thành nạn nhân của thói đạo đức...'
                },
            ],
            data1: LifePathNumber, // ??? trùng tên tề
            cardInformationVisible: false
        }


        calculator.calNumber("23112000")
        calculator.nameInfo("Vi huu duc")
    }

    onNumberPress(number) {
        console.log("PRESSSSS", number)
        this.setState({
            cardInformationVisible: !this.state.cardInformationVisible
        })
    }
    renderItemComponent = (data) => (
        <TouchableOpacity style={styles.item}
            onPress={() => this.onNumberPress("3")}>
            <Text style={styles.title}>ABC</Text>
            <Text style={styles.title}>{data.describe}</Text>
        </TouchableOpacity>
    );

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <ScrollView>
                    <View>
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
                                    data={this.state.DATAA}
                                    scrollEnabled={true}
                                    renderItem={item => this.renderItemComponent(item)}
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

// const renderItem=({item})=>(
//     <Item title={item.title} 
//         describe={item.describe} 
//         onPress={()=>console.log("ABC")}
//     />
// );
// const Item = ({ title, describe}) => (
//     <View>
//         <TouchableOpacity
//             style={styles.item}
//         >
//             <Text style={styles.title}>{title}</Text>
//             {/* <Text style={styles.describe}>{describe}</Text> */}
//             <TextCollapse text={describe} />
//         </TouchableOpacity>
//     </View>
// );
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    item: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 16,
        paddingLeft: 16
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