import React, { Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { COLORS, FONTS } from '../../constants';
import calculator from '../../helper/calculator';
import ultilities from '../../helper/ultilities';

export class PyramidPeak extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    id: 0,
                    age: 26,
                    describe: "Những người Số 2 đặc biệt có năng lực làm việc dưới trướng một người lãnh đạo năng động. Nếu không gặp được nhà lãnh đạo như thế, họ có thể cảm thấy lạc lối. Thường thì bản thân những người này khó trờ thành nhà lãnh đạo, cũng hiếm khi có tham vọng lãnh đạo, nhưng họ có một khả năng độc đáo trong việc tìm kiếm và hợp tác với những người hoặc những tổ chức đánh giá cao sự tận tụy của họ. Vai trò đặc biệt của họ là hỗ trợ bằng sự trung thành, tận tụy cùng trực giác của họ. "
                },
                {
                    id: 1,
                    age: 35,
                    describe: "Những người Số 2 đặc biệt có năng lực làm việc dưới trướng một người lãnh đạo năng động. Nếu không gặp được nhà lãnh đạo như thế, họ có thể cảm thấy lạc lối. Thường thì bản thân những người này khó trờ thành nhà lãnh đạo, cũng hiếm khi có tham vọng lãnh đạo, nhưng họ có một khả năng độc đáo trong việc tìm kiếm và hợp tác với những người hoặc những tổ chức đánh giá cao sự tận tụy của họ. Vai trò đặc biệt của họ là hỗ trợ bằng sự trung thành, tận tụy cùng trực giác của họ. "
                },
                {
                    id: 2,
                    age: 44,
                    describe: "Những người Số 2 đặc biệt có năng lực làm việc dưới trướng một người lãnh đạo năng động. Nếu không gặp được nhà lãnh đạo như thế, họ có thể cảm thấy lạc lối. Thường thì bản thân những người này khó trờ thành nhà lãnh đạo, cũng hiếm khi có tham vọng lãnh đạo, nhưng họ có một khả năng độc đáo trong việc tìm kiếm và hợp tác với những người hoặc những tổ chức đánh giá cao sự tận tụy của họ. Vai trò đặc biệt của họ là hỗ trợ bằng sự trung thành, tận tụy cùng trực giác của họ. "
                },
                {
                    id: 3,
                    age: 53,
                    describe: "Những người Số 2 đặc biệt có năng lực làm việc dưới trướng một người lãnh đạo năng động. Nếu không gặp được nhà lãnh đạo như thế, họ có thể cảm thấy lạc lối. Thường thì bản thân những người này khó trờ thành nhà lãnh đạo, cũng hiếm khi có tham vọng lãnh đạo, nhưng họ có một khả năng độc đáo trong việc tìm kiếm và hợp tác với những người hoặc những tổ chức đánh giá cao sự tận tụy của họ. Vai trò đặc biệt của họ là hỗ trợ bằng sự trung thành, tận tụy cùng trực giác của họ. "
                }
            ]
        }

        // var lifePath = calculator.calNumber("04-04-2000")
        // var name = calculator.nameInfo(ultilities.removeVietNameseTone("Nguyễn Thành Long"))
        // console.log(lifePath)
        // console.log(name)
        // console.log(calculator.filterBirthChart('04042000', 'Nguyen Thanh Long'))
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
                                    <Text style={{ ...FONTS.logoTitle, color: COLORS.white }}>{this.state.data[0].age}</Text>
                                </View>
                                <View style={{ width: 1, backgroundColor: COLORS.black }}></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 8, paddingRight: 8 }}>
                                    <Text style={{ ...FONTS.light3 }}>{this.state.data[0].describe}</Text>
                                </View>
                            </View>
                        </View>

                        {/* Item 2 */}
                        <View style={{ height: 100, marginTop: 16 }}>
                            <View style={styles.item}>
                                <View style={{ backgroundColor: COLORS.brownCard, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, width: '30%', height: 98, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ ...FONTS.logoTitle, color: COLORS.white }}>{this.state.data[1].age}</Text>
                                </View>
                                <View style={{ width: 1, backgroundColor: COLORS.black }}></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 8, paddingRight: 8 }}>
                                    <Text style={{ ...FONTS.light3 }}>{this.state.data[1].describe}</Text>
                                </View>
                            </View>
                        </View>

                        {/* Item 3 */}
                        <View style={{ height: 100, marginTop: 16 }}>
                            <View style={styles.item}>
                                <View style={{ backgroundColor: COLORS.brownCard, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, width: '30%', height: 98, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ ...FONTS.logoTitle, color: COLORS.white }}>{this.state.data[2].age}</Text>
                                </View>
                                <View style={{ width: 1, backgroundColor: COLORS.black }}></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 8, paddingRight: 8 }}>
                                    <Text style={{ ...FONTS.light3 }}>{this.state.data[2].describe}</Text>
                                </View>
                            </View>
                        </View>

                        {/* Item 4 */}
                        <View style={{ height: 100, marginTop: 16 }}>
                            <View style={styles.item}>
                                <View style={{ backgroundColor: COLORS.brownCard, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, width: '30%', height: 98, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ ...FONTS.logoTitle, color: COLORS.white }}>{this.state.data[3].age}</Text>
                                </View>
                                <View style={{ width: 1, backgroundColor: COLORS.black }}></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 8, paddingRight: 8 }}>
                                    <Text style={{ ...FONTS.light3 }}>{this.state.data[3].describe}</Text>
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