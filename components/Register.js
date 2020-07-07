import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CustomTextInput from './CustomTextInput'
import { register } from '../networking/RegisterHandler'

class Register extends Component {

  state = {

    username: "",
    emailId: "",
    mobileNumber: "",
    password: ""
  }

  setUserName = (text) =>{

    const username = text
    this.setState({username : username})
  }

  setEmailId = (text) =>{

    const emailId = text
    this.setState({emailId : emailId})
  }

  setMobileNumber = (text) =>{

    const mobileNumber = text
    this.setState({mobileNumber : mobileNumber})
  }

  setPassword = (text) =>{

    const password = text
    this.setState({password : password})
  }

  registerUser() {
    console.log(" CALL ")

    this.props.navigation.navigate("HomeScreen")

    // const data = {

    //   userName: this.state.username,
    //   mobileNumber: this.state.mobileNumber,
    //   emailId: this.state.emailId,
    //   password: this.state.password

    // }
    // register("url", data)
    //   .then(response => {
    //     // check if a valid reponse then login
    //     console.log(response)
    //     this.props.navigation.navigate("HomeScreen")
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomTextInput
          placeholder='Username'
          onChangeText={this.setUserName} />
        <CustomTextInput
          placeholder='Email Id'
          onChangeText={this.setEmailId} />
        <CustomTextInput
          placeholder='Mobile Number'
          onChangeText={this.setMobileNumber} />
        <CustomTextInput
          placeholder='Password'
          onChangeText={this.setPasswords} />
          <View style={styles.fullWidth}>
          <Button title="Register" onPress={this.registerUser} />
        </View>
      </View>
    )
  }
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: "100%"
  },
});
