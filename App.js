/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Router, Stack, Scene, Modal} from 'react-native-router-flux';
import { Icon } from 'native-base';
import Intro from './components/intro';
import Menu from './components/menu';
import Dishes from './components/dishes';
import SingleDish from './components/singleDish';
import Cart from './components/cart';
import Favorites from './components/favorites';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <Router >
      
        <Stack key="root" >
          <Scene key="intro" component={Intro} title="Intro" initial hideNavBar />
          <Scene key="menu" component={Menu} title="Menu" hideNavBar/>
          <Scene key="dishes" component={Dishes} title="" tintColor ="#75CC8D" navigationBarStyle={{ backgroundColor: '#fff' }}  />
          <Scene key="cart" component={Cart} title="" tintColor="#75CC8D"  />
          <Scene key="favorites" component={Favorites} title="" tintColor="#75CC8D" tintColor ="#75CC8D" navigationBarStyle={{ backgroundColor: '#fff' }}  />
          <Scene key="singleDish" component={SingleDish} title="" navTransparent={true} hideNavBar />
        </Stack>
        
        
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
 
});
