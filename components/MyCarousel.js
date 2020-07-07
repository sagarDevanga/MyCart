import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View ,Image } from 'react-native';
import {  } from 'react-native'
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

class MyCarousel extends Component {

  constructor(props)
  {
    super(props)
    console.log(this.props.customFlex)
  }

  state={
    entries : [{title:"HI"},{title:"Heello"}]
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>{`Item ${item}`}</Text>
      </View>
    );

    // <View>
      //   <Image 
      //   style={{flex: 1,height:50, width: 50}}
      //   source={{uri: "http://lorempixel.com/200/400/"}}/>
      //   {/* <Text>HELLO TEHRE</Text> */}
      // </View>s
  }

  render(){

    return (
      <View style={styles.container}>
        <Text>MY CAROUSEL</Text>
      {/* <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.state.entries}
        renderItem={this._renderItem}
        containerCustomStyle={styles.container}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        useScrollView={true} 
      /> */}
      </View>
    )
  }

}

export default MyCarousel

const styles = StyleSheet.create({
  container :{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor :"#3AF"
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    backgroundColor: 'dodgerblue'
  },
  itemLabel: {
    color: 'white',
    fontSize: 24
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
