import React, { Component } from 'react';
import {
    
    StyleSheet,
    ImageBackground,
    View,
    TouchableHighlight
  } from 'react-native';
import { Container, Button, Text, Content, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class menu extends Component {
  render() {
    var items = [

        {type:"Breakfast", shortDesc:"Lorem Ipsum has been the industrys standard", img:"https://picsum.photos/320/180/?random", dishes:['2','1'] },
        {type:"Dinner", shortDesc:"Lorem Ipsum has been the industrys standard", img:"https://picsum.photos/320/180/?random", dishes:['2','1']  },
        {type:"Sweets", shortDesc:"Lorem Ipsum has been the industrys standard", img:"https://picsum.photos/320/180/?random", dishes:['2','1']  },
        {type:"Drinks", shortDesc:"Lorem Ipsum has been the industrys standard", img:"https://picsum.photos/320/180/?random", dishes:['2','1']  },
        {type:"Extras", shortDesc:"Lorem Ipsum has been the industrys standard", img:"https://picsum.photos/320/180/?random", dishes:['2','1']  }
        
      ];
    return (
        <Container>
  
        <Content>
          <List dataArray={items}
            renderRow={(item) =>
              <TouchableHighlight onPress={() => {
                Actions.dishes({dishes:item.dishes})
               }}>
                   <ImageBackground style={styles.slide1} source={{ uri: item.img}}>
                    <View style={styles.menuItem}>
                        <Text style={styles.itemTitle} >{item.type}</Text>
                        <Text style={styles.itemSection} >{item.shortDesc}</Text>
                    </View>
                    
                        
                    </ImageBackground>  
                </TouchableHighlight >
              
            }>
          </List>
        </Content>
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
    menuItem:{
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTitle:{
        color:'#FFF',
        fontSize: 30,
        fontWeight: '400',
        fontWeight:'bold'
    },
    itemSection:{
        color:'#FFF',
        fontSize: 16,
        fontWeight: '400',
    }
  
  })