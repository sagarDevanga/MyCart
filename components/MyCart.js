import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function myCart() {
  return (
    <View style={styles.container}>
        <Text>You will find MY CART HERE</Text>
    </View>
  );
}

export default myCart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
