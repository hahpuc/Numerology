import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, icons } from '../constants';


const Header = (props) => {
  return (
    <View style={styles.Header}>
      <Text style={{ ...FONTS.largeTitle }}>{props.headerText}</Text>
      <TouchableOpacity
        style={styles.icon}
        onPress={props.navigateToSetting}
      >
        <Image style={styles.icon} source={icons.setting} />
      </TouchableOpacity>

    </View>
  );
};


const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    height: 48,
  },
  title: {
    fontFamily: 'Roboto-Light',
    fontSize: 20
  },
  icon: {
    height: 24,
    width: 24,
    position: 'absolute',
    right: '5%'
  }
});

module.exports = Header;