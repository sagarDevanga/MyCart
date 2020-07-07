import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Grid from 'react-native-grid-component';
import { TouchableOpacity } from 'react-native-gesture-handler';

class ProductsScreen extends Component {

  state = {

    data: ['black', 'yellow', 'red', 'green', 'blue']
  }

  _renderItem = (data, index) => (
    <View
      key={index}
      style={[{ backgroundColor: data }, styles.item]}>
      <Button
      title="Helloo ${index}"
      onPress={() => this.props.navigation.navigate('ProductDetailsScreen')}></Button>
      {/* <TouchableOpacity style={styles.item}  > 
        <Image
          style={styles.image}
          source={{ uri: "http://lorempixel.com/200/400/" }} />
      </TouchableOpacity> */}
    </View>
  );

  _renderPlaceholder = i => <View style={styles.item} key={i} />;

  render() {
    return (
      <Fragment>
        <Grid
          style={styles.list}
          renderItem={this._renderItem}
          renderPlaceholder={this._renderPlaceholder}
          data={this.state.data}
          numColumns={2} />
      </Fragment>
    );
  }

}

export default ProductsScreen

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  item: {
    flex: 1,
    height: 230,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    margin: 1
  },
  text: {
    backgroundColor: "#fff",
    width: "100%"
  }

});
