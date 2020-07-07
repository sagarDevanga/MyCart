import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function WelcomeText() {
  return (
    <View style={styles.container}>
      <Text style={{flex:1 ,width : "100%", backgroundColor:"#ff0"}}>Header TEXT</Text>
      <Text style={{flex:1 ,width : "100%", backgroundColor:"#f00"}}>Content TEXT</Text>
    </View>
  );
}

export default WelcomeText

const styles = StyleSheet.create({
  container: {
    flex : 1,  
    width : "100%",
    height : "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
