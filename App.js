
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {Content, Item, Input} from 'native-base';
import {Card, List} from 'react-native-paper';
import SearchScreen from './components/SearchScreen';
import HomeScreen from './components/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const TabNavigator = createBottomTabNavigator({
  'Current City': HomeScreen,
  'Select City': SearchScreen,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused,tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Current City') {
        iconName = `md-cloud`;
      } else if (routeName === 'Select City') {
        iconName = `md-options`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    activeBackgroundColor: '#6200EE',
    inactiveBackgroundColor:'#6200EE'
  },
});

export default createAppContainer(TabNavigator);
  
