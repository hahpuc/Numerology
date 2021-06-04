import React from 'react';

import { View, Text, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/HomeScreen/Home';
import { COLORS, icons } from '../constants';
import { BirthChartContainer } from '../screens/BirthChartScreen/BirthChartContainer';
import { BirthChartScreen } from '../screens/BirthChartScreen/BirthChartScreen';
import { PyramidPeak } from '../screens/PyramidPeak/PyramidPeak';

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: '10%',
        backgroundColor: COLORS.primary,

        // Drop Shadow 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
};

const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.white : COLORS.black;

                    switch (route.name) {
                        case 'Home':
                            return (
                                <Image
                                    source={icons.home}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );
                        case 'BirthChart':
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
                        case 'Pyramid':
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
                    }
                },
            })}

        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="BirthChart" component={BirthChartContainer} />
            <Tab.Screen name="Pyramid" component={PyramidPeak} />
        </Tab.Navigator>
    );
};

export default Tabs;
