import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import WelcomeText from '../components/WelcomeText';
import MyCarousel from '../components/MyCarousel'
import { TouchableHighlight } from 'react-native-gesture-handler';


class WelcomeScreen extends Component {

  navigate = () =>{

    this.props.navigation.navigate('LoginOrRegisterScreen')
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <MyCarousel style={{ flex: 2}}/> */}
        <Image
          style={styles.myImage}
          source={{uri: "http://lorempixel.com/200/400/"}}/>
        <WelcomeText
          style={styles.myWelcome}/>
        <View style={styles.fullWidth}>
          <Button 
          title = "Navigate"
          onPress={this.navigate}></Button>
        </View>  
      </View>
    );
  }

}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myWelcome :{
    flex: 1,
    width: "100%",
    backgroundColor: "#ff0"
  },
  myImage :{
    flex: 2,
    width: "100%"
  },
  fullWidth : {
    width:"100%"
  },
});
