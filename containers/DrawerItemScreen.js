import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class DrawerItemScreen extends Component{

  render()
  {
    return (
      <View style={styles.container}>
         <Text>You will DRAWER SELECTED SCREEN HERE</Text>
      </View>
    )
  }
  
}

export default DrawerItemScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
