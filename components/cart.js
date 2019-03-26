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
export default class Cart extends Component {

    componentWillMount() {
        console.log(this.props);
    }


  render() {
    var items = [
        {img:require('./src/dish1.jpg')},
        {img:require('./src/dish2.jpg')},
        {img:require('./src/dish3.jpg')},
        {img:require('./src/dish4.jpg')},
       
        
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

                           
                                <Image style={{width:80, height:80}} source={item.img}/> 
                                
                                </Left>
                                <Body style={styles.DishBodyWraper}>

                                    <View style={styles.DishTitleWraper}>
                                        <Text>Sankhadeep</Text>
                                    </View>
                                    
                                    <View style={styles.DishDescWraper}>
                                        
                                    </View>

                                    <View style={styles.DishPriceWraper}>
                                        <Text   numberOfLines={1} style={styles.DishPriceTxt}>$ 100.00 </Text>


                                        <Button icon transparent>
                                            <Icon name={'arrow-left'} type="FontAwesome5" style={styles.arrowsIcon}  />
                                        </Button>


                        

                                        <Text numberOfLines={1} style={styles.quantityTxt} > 1 </Text>


                                        <Button icon transparent >
                                            <Icon name={'arrow-right'} type="FontAwesome5" style={styles.arrowsIcon}  />
                                        </Button>

                                        <Button icon transparent >
                                            <Icon name={'trash'} type="FontAwesome5" style={styles.trashIcon}  />
                                        </Button>


                                    </View>

                                </Body>
                                
                            </ListItem>
                            
                }
                />
                            <List style={{ marginTop: 10}}>
                                <ListItem noIndent >
                                    <Left>
                                        <Text note>Subtotal </Text>
                                    </Left>
                                    <Right>
                                        <Text>$560</Text>
                                    </Right>
                                </ListItem>
                                <ListItem noIndent>
                                    <Left>
                                        <Text note>Shipping </Text>
                                    </Left>
                                    <Right>
                                        <Text>$60</Text>
                                    </Right>
                                </ListItem>
                                <ListItem  noIndent>
                                    <Left>
                                        <Text style={styles.totalTxt}>Total </Text>
                                    </Left>
                                    <Right>
                                        <Text style={styles.totalTxt}>$620</Text>
                                    </Right>
                                </ListItem>
                            </List>

                            <Button full success>
                                <Text>CHECKOUT</Text>
                            </Button>
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
        borderWidth:1,
        borderBottomWidth:0
    },
    DishTitleWraper:{
        //borderWidth:1,
        height:20
    },
    DishDescWraper:{
        //borderWidth:1,
        height:10
    },
    DishPriceWraper:{
        //borderWidth:1,
        height:60,
        flexDirection:'row'
    },
    trashIcon:{
        //borderWidth:1,
        color:'#888',
        fontSize:18,
        paddingTop:5
    },
    arrowsIcon:{
        //borderWidth:1,
        color:'#333',
        fontSize:16,
        paddingTop:5
    },
    DishPriceTxt:{
        flex:1,
        //borderWidth:1,
        color:"#75CC8D",
        fontWeight:"500",
        paddingTop:15   
    },
    quantityTxt:{
     //   borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        textAlignVertical:'center',
        textAlign:'center',
        fontSize:16,
        width:25,
        paddingTop:14,
        color:"#75CC8D"
        
    },
    totalTxt:{
        fontWeight:"bold",
        color:"#75CC8D"
    }
    

})
