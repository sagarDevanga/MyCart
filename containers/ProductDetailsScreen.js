import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button ,Image} from 'react-native';
import MyCarousel from '../components/MyCarousel';
import ColorPicker from '../components/ColorPicker';
import SizePicker from '../components/SizePicker';

class ProductDetailsScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        {/* <MyCarousel style={{ flex: 2}}/> */}
        <Image
          style={styles.myImage}
          source={{uri: "http://lorempixel.com/200/400/"}}/>
        <View style={styles.details}>
          <Text>Red Blue Striped Top</Text>
          <Text>Rs 3999</Text>
        </View>
        <ColorPicker style={{ flex: 2 }}/>
        <SizePicker style={{ flex: 2 }}/>
        <View style={styles.fullwidth}>
          <Button
            title="Qty:2"
            onPress={() => this.props.navigation.navigate('SplashScreen')} />
          {/* <Button
            title="ADD TO CART"
            onPress={() => this.props.navigation.navigate('SplashScreen')} /> */}
        </View>
      </View>
    )
  }

}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: "row" ,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myImage :{
    flex: 5,
    width : "100%",
    backgroundColor: "#30F"
  },
  fullwidth:{
    flexDirection : "row",
    width : "100%",
  }
});
