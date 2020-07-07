import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SplashScreen extends Component {

  navigate = () =>{

    this.props.navigation.navigate('WelcomeScreen')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={.5} onPress={this.navigate}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: "http://lorempixel.com/200/400/" }} />
        </TouchableOpacity>
        <StatusBar hidden={true} style="auto" />
      </View>
    );
  }

}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
