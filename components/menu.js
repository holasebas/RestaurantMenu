import React, { Component } from 'react';
import {
    
    StyleSheet,
    ImageBackground,
    View,
    TouchableHighlight,
    FlatList
  } from 'react-native';
import { Container, Button, Text, Content, List, ListItem, Header, Left, Right, Body, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
import SideMenu from 'react-native-side-menu';
import MenuList from './menuList';



export default class menu extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });


  render() {
    const items = [

        {type:"Breakfast", shortDesc:"Lorem Ipsum has been the industrys standard", img:require('./src/breakfast.jpg')},
        {type:"Dinner", shortDesc:"Lorem Ipsum has been the industrys standard", img:require('./src/dinner.jpg')},
        {type:"Sweets", shortDesc:"Lorem Ipsum has been the industrys standard", img:require('./src/sweets.jpg')  },
        {type:"Drinks", shortDesc:"Lorem Ipsum has been the industrys standard", img:require('./src/drinks.jpg') },
        {type:"Extras", shortDesc:"Lorem Ipsum has been the industrys standard", img:require('./src/extras.jpg')  }
        
      ];
    const menu = <MenuList onItemSelected={this.onMenuItemSelected} />;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
        style={styles.sideMenu}
      >
        <Container>
          <Content>
            <Header style={{backgroundColor:"#FFF"}}>
              <Left>
                <Button  transparent onPress={this.toggle}>
                  <Icon name='ios-menu' style={styles.menuIcon}  />
                </Button>
              </Left>
              <Body>
                <Text style={styles.titleTxt} >M E N U</Text>
              </Body>
              <Right>
                <Button  transparent onPress={() => {
                  Actions.cart()
                }}>
                  <Icon name='ios-cart' style={styles.cartIcon}  />
                </Button>
              </Right>
            </Header>
            <FlatList
            
            data={items}
            keyExtractor={(item, index) => 'key'+index}
            renderItem={({item}) => 
                <TouchableHighlight onPress={() => {
                  Actions.dishes({dishes:item.dishes})
                }}>
                    <ImageBackground style={styles.slide1} source={item.img}>
                      <View style={styles.menuItem}>
                          <Text style={styles.itemTitle} >{item.type}</Text>
                          <Text style={styles.itemSection} >{item.shortDesc}</Text>
                      </View>
                      
                          
                      </ImageBackground>  
                  </TouchableHighlight >
                
              }>
            </FlatList>
          </Content>
        </Container>
      </SideMenu>
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
    },
    sideMenu:{
      borderWidth:1
    },
    menuIcon:{
      color:"#75CC8D"
    },
    cartIcon:{
      color:"#75CC8D"
    },
    titleTxt:{
      color:"#75CC8D",
      fontSize:15,
      paddingTop:5
    }
  
  })