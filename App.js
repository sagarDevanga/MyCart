import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './containers/SplashScreen'
import Welcome from './containers/WelcomeScreen'
import LoginOrRegister from './containers/LoginOrRegisterScreen'
import Home from './containers/HomeScreen'
import Products from './containers/ProductsScreen'
import ProductDetails from './containers/ProductDetailsScreen'
import DrawerItem from './containers/DrawerItemScreen'

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="LoginOrRegisterScreen" component={Home}/>
        <Stack.Screen name="HomeScreen" component={Home}/>
        <Stack.Screen name="ProductsScreen" component={Products}/>
        <Stack.Screen name="ProductDetailsScreen" component={ProductDetails}/>
        <Stack.Screen name="DrawerItemScreen" component={DrawerItem}/>
      </Stack.Navigator>
    </NavigationContainer>
    )


  // return (
  //   <View style={styles.container}>
  //     <Text>Finally you are here</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
