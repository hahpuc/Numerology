import React from 'react';

import { View, Text, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/HomeScreen/Home';
import { COLORS, icons } from '../constants';
import { BirthChartContainer } from '../screens/BirthChartScreen/BirthChartContainer';
import { BirthChartScreen } from '../screens/BirthChartScreen/BirthChartScreen';
import { PyramidPeak } from '../screens/PyramidPeak/PyramidPeak';
import { HomeContainer } from '../screens/HomeScreen/HomeContainer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
import { PyramidPeakContainer } from '../screens/PyramidPeak/PyramidPeakContainer';

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

    const getTabBarVisibility = (route) => {
        const routeName = getFocusedRouteNameFromRoute(route);

        if (routeName === 'InputScreen') {
            return false;
        }

        return true;
    }

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.orangeCard : COLORS.black;

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
                                    source={icons.birthchart}
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
                                    source={icons.pyramid}
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
            <Tab.Screen name="Home" component={HomeContainer}
                options={({ route }) => ({
                    tabBarVisible: getTabBarVisibility(route)
                })}
            />
            <Tab.Screen name="BirthChart" component={BirthChartContainer}

            />
            <Tab.Screen name="Pyramid" component={PyramidPeakContainer} />
        </Tab.Navigator>
    );
};

export default Tabs;
