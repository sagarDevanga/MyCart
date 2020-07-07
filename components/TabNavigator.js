import { StatusBar } from 'expo-status-bar';
import React, { Component, Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home'
import HotOffers from './HotOffers'
import MyCart from './MyCart'
import Search from './Search'
import Profile from './Profile'

const Tab = createBottomTabNavigator();

function tabNavigator(){

  return (
    <Tab.Navigator tabBarOptions={{ showIcon: true, style: styles.container}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Hot Offer" component={HotOffers} />
      <Tab.Screen name="My Cart" component={MyCart} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );

}

export default tabNavigator

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'powderblue'
  },
});
