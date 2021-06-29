import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Screens
// import { PlantDetail } from './screens/';
import Tabs from './src/navigation/tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoadingScreen } from './src/screens/InputScreen/LoadingScreen';
import { InputScreen } from './src/screens/InputScreen/InputScreen';


class App extends Component {

  constructor(props) {

    super(props)
    this.state = {
      isLoading: true,
      username: '',
      birthdate: '',

      result: 'Error',
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
          result: 'Successfully',
        })
      } else {
        this.setState({
          username: '',
          birthdate: '',
          result: 'Error',
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

  handleSubmit = (value) => {
    console.log("Result: ", value)

    this.setState({
      result: value
    })
  }

  componentDidUpdate(prevProp, prevState) {

    if (prevState.result != this.state.result) {
      this.getData()
    }
  }

  ContentView = () => {
    if (this.state.result == 'Error' || this.state.username == '' || this.state.birthdate == '')
      return <InputScreen type='FirstScreen' handleSubmit={this.handleSubmit} />

    else (this.state.result == 'Successfully' && this.state.username != '' && this.state.birthdate != '')
    return <Tabs />
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
