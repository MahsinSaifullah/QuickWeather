
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  StatusBar,
} from 'react-native';
import MyHeader from './MyHeader'
import WeatherInfo from './WeatherInfo'
import {Content, Item, Input} from 'native-base';
import {Card, List} from 'react-native-paper';

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const apiKey = 'a248e750241f32d29b938724efbb4e3d';
const getWeatherApi = (cityName, apiKey) => {
  return `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
}


class HomeScreen extends Component {
  state = {
    weatherInfo: {
      name: "Loading!!!",
      temp: "loading",
      humidity: "loading",
      desc: "loading",
      icon: "loading"
    }
  };

  //fetch weather info from Api
  getWeather = () => {
    const cityName = this.props.navigation.getParam('city', 'london')
    fetch(getWeatherApi(cityName, apiKey))
     .then(res =>res.json())
     .then(data =>{
      //  console.log(data);
       this.setState({
         weatherInfo:{
          name: data.name,
          temp: data.main.temp,
          humidity: data.main.humidity,
          desc: data.weather[0].description,
          icon: data.weather[0].icon
         }
       })
       console.log(this.state.weatherInfo);
       
     })
     .catch(e => {
       console.log(e)
     })
  }

  componentDidMount(){
    this.getWeather();
  }

  render() {
    if (this.props.navigation.getParam('city')){
      this.getWeather();
    }
    return (
      <View style={styles.container} >
        <MyHeader/>
        <View style={styles.container}>
          <WeatherInfo info={this.state.weatherInfo}/>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6200EE',
    
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;
