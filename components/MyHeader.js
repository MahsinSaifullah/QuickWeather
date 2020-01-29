import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';
import { Appbar } from 'react-native-paper';



class MyHeader extends Component {
  render() {
    return (
      <Appbar.Header>
          
          <Appbar.Content
            title="QuickWeather"
            subtitle="Select city"
            style={{alignItems:"center"}}
          />
        </Appbar.Header>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default MyHeader;