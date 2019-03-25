import React, { Component } from 'react';
import {
    
    StyleSheet,
    ImageBackground,
    View
  } from 'react-native';
import { Container, Button, Text, Icon } from 'native-base';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class Intro extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
      }
    
      onPress = () => {
       Actions.menu()
      }


  render() {
      
    const resizeMode = 'center';
    
    return (
      <Container>
        
        <Swiper style={styles.wrapper} showsButtons={false} activeDotColor="#75CC8D">
            
            <ImageBackground style={styles.slide1}
                source={require('./src/slide1.jpg')}
            >
                <Text style={styles.tittle}>Lorem Ipsum</Text>
                <Text style={styles.section}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>

            </ImageBackground>

            
            <ImageBackground style={styles.slide2}
                source={require('./src/slide2.jpg')}
            >
                <Text style={styles.tittle}>Lorem Ipsum</Text>
                <Text style={styles.section}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
            </ImageBackground>


            <ImageBackground style={styles.slide3}
                source={require('./src/slide3.jpg')}
            >
                <Text style={styles.tittle}>Lorem Ipsum</Text>
                <Text style={styles.section}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>

                <View style={styles.menuButtom}>
                <Button iconLeft success full onPress={this.onPress}>
                    <Icon type='MaterialCommunityIcons' name='food-fork-drink' />
                    <Text>Go to Menu</Text>
                </Button>
                
                </View>
                
                
            </ImageBackground>
           
           
        </Swiper>
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
      
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    tittle: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    section: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '400',
        paddingTop: 15,
        paddingLeft: 5,
        paddingRight:5
      },
      menuButtom: {
        paddingTop: 100
      }
  })