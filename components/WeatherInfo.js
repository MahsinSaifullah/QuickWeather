import React, {Component} from 'react';
import { Title } from 'react-native-paper';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image,
    StatusBar,
  } from 'react-native';


  class WeatherInfo extends Component{

    render(){
        const {info} = this.props;
        
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{info.name}</Text>
                <Image style={{width: 100, height:100}}
                    source={{uri:'http://openweathermap.org/img/w/'+info.icon+'.png'}}
                />
                <View style={styles.tempContainer}>
                    <Text style={styles.temp}>{info.temp} °C</Text>
                </View>
                <Text style={{fontSize: 20, color: 'white'}}>{info.desc}</Text>
            </View>
        )
    }

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        margin: 30
    },
    tempContainer: {
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 100,
        marginBottom: 20,
        padding: 20
    },
    temp:{
        fontSize: 40,
        color: 'white'
        
    }
  });

  export default WeatherInfo