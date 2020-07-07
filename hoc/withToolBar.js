import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function withToolBar() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

export default withToolBar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height : 56,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
