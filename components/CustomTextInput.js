import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Button, Image } from 'react-native';
import { TextInputLayout } from 'rn-textinputlayout';
import { useLinkProps } from '@react-navigation/native';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function CustomTextInput(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: "http://lorempixel.com/200/400/" }} />
      <TextInputLayout
        style={styles.inputLayout}
        checkValid={t => EMAIL_REGEX.test(t)}>
        <TextInput
          style={styles.textInput}
          placeholder = {props.placeholder} 
          onChangeText = {props.onChangeText}/>
      </TextInputLayout>
    </View>
  );
}

export default CustomTextInput

const styles = StyleSheet.create({
  container: {
    flexDirection : "row",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 16,
    height: 40
  },
  inputLayout: {
    flex:1,
    marginTop: 16,
    marginHorizontal: 36
  },
  image :{
    width : 50,
    height :50
  }

});
