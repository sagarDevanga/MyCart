import { StatusBar } from 'expo-status-bar';
import React, { Component, Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from '../components/TabNavigator'
import DrawerItemScreen from './DrawerItemScreen';

const Drawer = createDrawerNavigator();

class HomeScreen extends Component {

  render() {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Item" component={DrawerItemScreen} />
      </Drawer.Navigator>
    );
  }

}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
