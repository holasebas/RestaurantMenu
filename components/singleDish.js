import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity
  } from 'react-native';
import { Container, Button, Text, Icon, Right, Content, Item, Input } from 'native-base';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';
export default class singleDish extends Component {

  constructor(props) {
    super(props)
    this.state = { heart: this.props.fav ? true : false }
    
  }
  toggleHeart(){
    this.setState({heart:!this.state.heart})
  }
  render() {
    return (

      
      <View style={{backgroundColor:'#FFF', flex:1}}>

        <View style={styles.wrapper}>
            <Swiper  showsButtons={true} showsButtons={false} dotColor="#FFF" activeDotColor="#75CC8D">
                <View style={styles.slide1}>
                  <Image style={{width: '100%', height: '100%'}} source={require('./src/single1.jpg')}/>
                </View>
                <View style={styles.slide2}>
                  <Image style={{width: '100%', height: '100%'}} source={require('./src/single2.jpg')}/>
                </View>
                <View style={styles.slide3}>
                  <Image style={{width: '100%', height: '100%'}} source={require('./src/single3.jpg')}/> 
                </View>
            </Swiper>
            <View style={styles.topSlideInfo}>
           
              <TouchableOpacity style={styles.backButtom} onPress={() => {Actions.pop();}}>
                <Icon name='ios-arrow-back' style={styles.backIcon}  />
              </TouchableOpacity>

              <View style={styles.heartButtomContainer}>
                <TouchableOpacity style={styles.heartButtom} onPress={() => {this.toggleHeart()}}>
                  <Icon name={this.state.heart ? 'ios-heart' : 'ios-heart-empty'} style={styles.heartIcon}  />
                </TouchableOpacity> 
              </View>                    

            </View>

            <View style={styles.bottomSlideInfo}>
              
              <Text style={styles.dishName}>It is simply dummy text of the printing</Text>
              <Text style={styles.dishPrice}>$70.00</Text>
            </View>
         </View>

         <Content style={styles.contentWraper}> 
          <Text style={styles.dishTxtDetail}>
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

              in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>

          <View>
            <Item regular>
              <Input 
                placeholder='Enter Quantity Here...'
                keyboardType='numeric' 
                />
            </Item>
            <Button full success>
              <Text>ADD TO CART</Text>
            </Button>
          </View>
          
          </Content> 
      </View>
     

       
      
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
     height:320
    },
    slide1: {
      flex: 1,
     
 
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
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    topSlideInfo:{
      flexDirection: 'row',
      position: 'absolute',
      width:'100%',
      height: 90,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      paddingTop:50,
    },
    bottomSlideInfo:{
      position: 'absolute',
      width:'100%',
      height: 110,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      marginTop:210
    },
    dishTxtDetail:{
      fontSize: 18,
      padding:15,
      color:'#555'
    },
    backButtom:{
      width:32,   
      justifyContent:'center',
      alignItems:'center',
    },
    backIcon:{
      color:'#75CC8D',
    },
    heartButtomContainer:{
      flex:1,
      alignItems:'flex-end',
    },
    heartButtom:{
      width:50,
      height:39,   
      justifyContent:'center',
      alignItems:'center'
    },
    heartIcon:{
      color:'#75CC8D',
    },
    dishName:{
      padding:10,
      color: '#fff',
      fontSize: 20, 
    },
    dishPrice:{
      padding:5,
      color: '#fff',
      fontSize: 20,
      color:'#75CC8D',
      fontWeight:'bold'
    },
    contentWraper:{
        marginBottom:30
    }
    

  })
  