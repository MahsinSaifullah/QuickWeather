/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import MyHeader from './components/MyHeader'
import {Content, Item, Input} from 'native-base';
import {Card, List} from 'react-native-paper'

class App extends Component {
  state = {
    text:'',
    cities: []
  };

  //fetch suggested cities from Api
  fetchCities = text => {
    
    this.setState({text})

    fetch('http://autocomplete.wunderground.com/aq?query=' + text)
     .then(res =>res.json())
     .then(city =>{
       this.setState({
         cities: city.RESULTS.splice(0,9)
       })
     })

     console.log(this.state.cities)

  }

  render() {
    let renderCity = <Card><List.Item title=''/></Card>

    if(this.state.cities.length > 0 && this.state.text != ''){
      //display the cities in a list
      renderCity = this.state.cities.map(city => {
        return (
          <Card style={{margin: 2}} key={city.zmw}>
            <List.Item title={city.name}/>
          </Card>
        )
      })
    }
    return (
      <View style={styles.container}>
        <MyHeader/>
        <Content>
          <Item style={{marginTop: 10, marginBottom: 5}} rounded>
            <Input
            placeholder="Enter City"
            onChangeText={text => this.fetchCities(text)}
            value={this.state.text}
            />
          </Item>
          <ScrollView>
          {renderCity}
          </ScrollView>
        </Content>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff'
  }
});

export default App;
