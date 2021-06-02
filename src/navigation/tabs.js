import React from 'react';

import { View, Text, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { COLORS, icons } from '../constants';
import { BirthChartScreen } from '../screens/BirthChartScreen';

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: '10%',
    },
};

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch (route.name) {
                        case 'Home':
                            return (
                                <Image
                                    source={icons.flash}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );
                        case 'Box':
                            return (
                                <Image
                                    source={icons.cube}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );
                        case 'Search':
                            return (
                                <Image
                                    source={icons.search}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );
                        case 'Favourite':
                            return (
                                <Image
                                    source={icons.heart}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );
                    }
                },
            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Box" component={BirthChartScreen} />
            <Tab.Screen name="Search" component={Home} />
            <Tab.Screen name="Favourite" component={BirthChartScreen} />
        </Tab.Navigator>
    );
};

export default Tabs;
