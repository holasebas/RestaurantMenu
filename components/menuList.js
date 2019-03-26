import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    
    StyleSheet,
    ImageBackground,
    View,
    TouchableHighlight,
    FlatList
  } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';



export default class menuList extends Component {
    render() {
      return (
         <Container>
        <Header style={{backgroundColor:"#FFF", borderBottomWidth:0}} />
        <Content>

            <View style={styles.brandWraper}>
                <Text style={styles.brandTxt}> <Text style={{color:"#75CC8D"}}>R E S T</Text> A U R A N T</Text>
            </View>
      
          <ListItem icon >
            <Left>
                <Icon name="home" style={styles.menuIcon} />
            </Left>
            <Body style={{borderBottomWidth:0}}>
              <Text note>Home</Text>
            </Body>
           
          </ListItem>

          <ListItem icon >
            <Left>
                <Icon name="restaurant-menu" type="MaterialIcons"  style={styles.menuIcon}  />
            </Left>
            <Body style={{borderBottomWidth:0}}>
              <Text note>Menu</Text>
            </Body>
            
          </ListItem>


          <ListItem icon onPress={() => Actions.favorites()} >
            <Left>
                <Icon name="star" type="Entypo"  style={styles.menuIcon}  />
            </Left>
            <Body style={{borderBottomWidth:0}}>
              <Text note>Favorites</Text>
            </Body>
            
          </ListItem>

          <ListItem icon >
            <Left>
                <Icon name="person" type="MaterialIcons"  style={styles.menuIcon}  />
            </Left>
            <Body style={{borderBottomWidth:0}}>
              <Text note>Profile</Text>
            </Body>
           
          </ListItem>


        </Content>
      </Container>
      );
    }
  }

  menuList.propTypes = {
    onItemSelected: PropTypes.func.isRequired,
  };

const styles = StyleSheet.create({
    menuIcon: {
      color:"#75CC8D"
    },
    brandWraper:{
        borderWidth:1,
        borderColor:"#CCC",
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        height:70,
        margin:30,
        marginBottom:60
    },
    brandTxt:{
        color:"#333"
    }
    
   
  });