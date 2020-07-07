import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function search() {
  return (
    <View style={styles.container}>
        <Text>You will find SEARCH HERE</Text>
    </View>
  );
}

export default search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
