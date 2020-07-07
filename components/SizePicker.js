import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
  {label: 'S', value: 0 },
  {label: 'M', value: 1 },
  {label: 'L', value: 2 },
  {label: 'XL', value: 3 },
  {label: 'XXL', value: 4 }
];

function sizePicker() {

  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <RadioForm
          radio_props={radio_props}
          formHorizontal={true}
          labelHorizontal={false}
          initial={0}
          onPress={(value) => setValue(value)}
        />
    </View>
  );
}

export default sizePicker

const styles = StyleSheet.create({
  container: {
    flex : 1,  
    width : "100%",
    height : "100%",
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
