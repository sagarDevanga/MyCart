import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from '../components/Login';
import Register from '../components/Register'

const Tab = createMaterialTopTabNavigator();

class LoginOrRegisterScreen extends Component {

  constructor(props)
  {
    super(props)
    console.log(`The props from login/ register ${this.props}`)
  }

  render()
  {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Login" component={()=><Login props={this.props}/>} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    );
  }
}

export default LoginOrRegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
