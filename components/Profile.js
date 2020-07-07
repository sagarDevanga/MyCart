import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function profile() {
  return (
    <View style={styles.container}>
        <Text>You will find PROFILE HERE</Text>
    </View>
  );
}

export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
