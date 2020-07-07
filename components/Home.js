import React from 'react';
import { StyleSheet, ScrollView, View, Text,Button,Image } from 'react-native';
import MyCarousel from './MyCarousel';

function home({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contents}>
        {/* <MyCarousel style={{ flex: 2}}/> */}
        <Image
          style={styles.myImage}
          source={{uri: "http://lorempixel.com/200/400/"}}/>
        <View style={styles.fullWidth}>
          <Button title="Navigate To Products" onPress={()=>navigation.navigate("ProductsScreen")} />
        </View> 
        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>
    </ScrollView >
  );
}

export default home

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contents : {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myImage :{
    height : 300,
    width: "100%"
  },
  text: {
    fontSize:20
  },
  inputLayout: {
    marginTop: 16,
  },
  fullWidth: {
    width: "100%"
  },

});
