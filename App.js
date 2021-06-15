import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// Screens
// import { PlantDetail } from './screens/';
import Tabs from './src/navigation/tabs';
import { BirthChartScreen } from './src/screens/BirthChartScreen/BirthChartScreen';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import calculator from './src/helper/calculator';
import { LoadingScreen } from './src/screens/InputScreen/LoadingScreen';
import { InputScreen } from './src/screens/InputScreen/InputScreen';

// Tabs
const Stack = createStackNavigator();

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      username: '',
      birthdate: '',
    }
    this.getData()

    
  }

  getData = async () => {
    // Get Username + BirthDate 
    try {
      const username = await AsyncStorage.getItem('userName')
      const birthdate = await AsyncStorage.getItem('birthDate')

      if (username !== null) {
        this.setState({
          username: username,
          birthdate: birthdate,
        })
      } else {
        this.setState({
          username: '',
          birthdate: '',
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }

  ContentView = () => {
    return (
      (this.state.username && this.state.birthdate) ?
        <Tabs />
        :
        <InputScreen />
    )
  }

  render() {

    if (this.state.isLoading) {
      return <LoadingScreen />
    }

    return (
      <NavigationContainer>
        <this.ContentView />
        {/* <Tabs /> */}
      </NavigationContainer>
    )
  }
}

export default () => {
  return <App />;
};
