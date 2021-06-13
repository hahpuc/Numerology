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

// Tabs
const Stack = createStackNavigator();

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
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

  ContentView = () => {
    return (
      (!this.state.username && !this.state.birthdate) ?
        <InputScreen />
        :
        <Tabs />
    )
  }

  render() {
    console.log("STATE INPUT:", this.state)
    return (
      <NavigationContainer>
        {/* <this.ContentView /> */}
        <Tabs />
        {/* <LoadingScreen /> */}
      </NavigationContainer>
    )
  }
}

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tabs />
//       {/* <InputScreen /> */}
//     </NavigationContainer>
//   );
// };

export default () => {
  return <App />;
};
