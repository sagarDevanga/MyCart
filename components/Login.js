import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, TextInput, View, Button } from 'react-native';
import CustomTextInput from './CustomTextInput'
import { login } from '../networking/LoginHandler'


const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Login extends Component {

  constructor(props,{navigation})
  {
    super(props)
    console.log(`The props from login ${this.props}`)
  }

  state = {
    username: "",
    password: ""
  }

  login = () => {

    this.navigation.navigate("HomeScreen")

    // login('https://reactnative.dev/movies.json')
    //   .then(response => {

    //     // check if a valid reponse then login
    //     console.log(response)
    //     this.props.navigation.navigate("HomeScreen")
    //   })
    //   .catch(error => console.log(error))

  }

  onChangeUserName = (text) => {

    const username = text
    this.setState({ username: username })

  }

  onChangePassword = (text) => {

    const password = text
    this.setState({ password: password })
  }

  render() {

    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={this.state.showLoader}
          size="large"
          color="#0000ff" />
        <CustomTextInput
          placeholder='Username'
          onChangeText={this.onChangeUserName} />
        <CustomTextInput
          placeholder='Password'
          onChangeText={this.onChangePassword} />
        <View style={styles.fullWidth}>
          <Button title="Login" onPress={this.login} />
        </View>
      </View>
    );
  }

}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 16,
    height: 40
  },
  inputLayout: {
    marginTop: 16,
    marginHorizontal: 36
  },
  fullWidth: {
    width: "100%"
  },

});
