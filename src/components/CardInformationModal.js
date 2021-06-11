import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Modal, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, icons } from '../constants';


export class CardInformationModal extends Component {
    render() {
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={this.props.isVisible}
            // onRequestClose={this.props.onRequestClose}
            >
                <View style={styles.background}>
                    <View style={styles.container}>

                        {/* Header  */}
                        <View style={{ paddingLeft: 16, paddingRight: 16, height: 48, flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                style={{ height: 16, width: 16 }}
                                onPress={this.props.onRequestClose}
                            >
                                <Image
                                    source={icons.cancel}
                                    resizeMode='contain'
                                    style={{
                                        height: 16,
                                        width: 16,
                                    }}
                                />
                            </TouchableOpacity>
                            <Text style={{ flex: 1, textAlign: 'center', ...FONTS.light3,textDecorationLine: 'underline', }}> {this.props.cardTitle} </Text>
                            <View style={{ height: 24, width: 24 }}></View>
                        </View>

                        {/* Information  */}
                        <ScrollView>
                            <View style={{ flex: 1, paddingLeft: 16, paddingRight: 16, justifyContent: 'center' }}>
                                <Text style={styles.info}>{this.props.cardDescribe}</Text>
                            </View>

                            {/* <Text style={{ ...FONTS.light3 }}>
                                Người Số 9 luôn tự cảm thấy mình đây trách nhiệm. Họ phù hợp với nghệ thuật và các lĩnh vực nhân văn hơn là với khoa học hay thương mại.

                                Rất nhiều người đi đầu trong lĩnh vực văn hóa hoặc xuất sắc trong ngành diễn xuất có Con số chủ đạo là Số 9 - họ đều có lý tưởng cống hiến cháy bỏng cho sự nghiệp và cho cuộc sống, mặc dù các ý tưởng của họ không phải lúc nào cũng ứng dụng được. Vì thế, một điều quan trọng trong

                                MỤC ĐÍCH SỐNG của họ chính là học cách biến lý tưởng thành thực tế.

                            </Text> */}
                        </ScrollView>

                    </View>
                </View>

            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: COLORS.blackBlur,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        height: '70%',
        width: '90%',
        backgroundColor: COLORS.primary,
        borderRadius: 20,

        // Shadow 
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 9.98,

        elevation: 10
    },
    info:{
        ...FONTS.light3,        
        marginTop:54,
        textAlign:'justify'
    }
})