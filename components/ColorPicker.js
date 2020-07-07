import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var radio_props = [
  { label: 'red', value: 0 },
  { label: 'blue', value: 1 },
  { label: 'green', value: 2 },
  { label: 'yellow', value: 3 },
  { label: 'white', value: 4 },
  { label: 'black', value: 5 }
];

function colorPicker() {

  const [value, setValue] = useState(0);

  return (
    <RadioForm
      style={styles.container}
      radio_props={radio_props}
      formHorizontal={true}
      labelHorizontal={false}
      initial={0}
      onPress={(value) => setValue(value)}
    />
  );
}

export default colorPicker

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
