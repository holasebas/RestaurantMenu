import React, { Component } from 'react';
import { Container, Button, Text,Content,List,ListItem,Thumbnail,Body,Left, Right, Icon } from 'native-base';
import {
    StyleSheet,
    ImageBackground,
    View,
    TouchableHighlight,
    FlatList,
    Image
  } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Dishes extends Component {

   


  render() {
    var items = [
        {img:require('./src/dish1.jpg')},
        {img:require('./src/dish2.jpg')},
        {img:require('./src/dish3.jpg')},
        {img:require('./src/dish4.jpg')},
        {img:require('./src/dish5.jpg')}
        
      ];
    
   
    return (
        <Container style={styles.Container}>
         
            <Content>
            

                <FlatList
                data={items}
                keyExtractor={(item, index) => 'key'+index}
                renderItem={({item}) => 
                <ListItem thumbnail onPress={() => {
                                Actions.singleDish({dish:item})
                            }} style={styles.DishItemWraper}>
                                <Left>

                           
                                <Image style={{width:100, height:100}} source={item.img}/> 
                                
                                </Left>
                                <Body style={styles.DishBodyWraper}>

                                    <View style={styles.DishTitleWraper}>
                                        <Text>Sankhadeep</Text>
                                    </View>
                                    
                                    <View style={styles.DishDescWraper}>
                                        <Text note numberOfLines={2}>Its time to build a difference and innovate...</Text>
                                    </View>

                                    <View style={styles.DishPriceWraper}>
                                        <Text   numberOfLines={1} style={styles.DishPriceTxt}>$ 100.00 </Text>
                                        <Icon name={'ios-heart'} style={styles.DishHeartIcon}  />
                                        <Text  note numberOfLines={1} >1562 </Text>
                                    </View>

                                </Body>
                                <Right style={styles.DishRightWraper}>
                            
                                    <Icon name='ios-arrow-forward' />
                                
                                </Right>
                            </ListItem>
                }
                />
            </Content>
        </Container>  
    );
  }


}

const styles = StyleSheet.create({
    Container:{
        backgroundColor:"#f3f3f3"
    },

    DishItemWraper: {
     marginLeft:5,
     marginTop:5,
     marginRight:5,
     padding:10,
     backgroundColor:"#fff"
    },
    DishBodyWraper:{
        borderBottomWidth:0,
        paddingTop:0,
        paddingBottom:0,
        marginLeft:10,
        marginTop:0,
        marginBottom:0
    },
    DishRightWraper:{
        borderBottomWidth:0
    },
    DishTitleWraper:{
        //borderWidth:1,
        height:30
    },
    DishDescWraper:{
        //borderWidth:1,
        height:50
    },
    DishPriceWraper:{
        //borderWidth:1,
        height:20,
        flexDirection:'row'
    },
    DishHeartIcon:{
        //borderWidth:1,
        color:'#F7ABAD',
        fontSize:16,
        paddingRight:3
    },
    DishPriceTxt:{
        flex:1,
        //borderWidth:1,
        color:"#75CC8D",
        fontWeight:"500"    
    }
    

})
