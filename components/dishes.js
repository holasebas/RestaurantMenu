import React, { Component } from 'react';
import { Container, Button, Text,Content,List,ListItem,Thumbnail,Body,Left, Right, Icon } from 'native-base';
import {
    StyleSheet,
    ImageBackground,
    View,
    TouchableHighlight
  } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Dishes extends Component {

    componentWillMount() {
        console.log(this.props);
    }


  render() {
    var items = [
        'Simon Mignolet',
        'Nathaniel Clyne',
        'Dejan Lovren',
        'Mama Sakho',
        'Emre Can'
      ];
    
   
    return (
        <Container>
         
            <Content>
            <List dataArray={this.props.dishes}
                renderRow={(item) =>
                   
                        <ListItem thumbnail onPress={() => {
                            Actions.singleDish({dish:item})
                        }}>
                            <Left>
                            <Thumbnail square source={{ uri: 'https://picsum.photos/200/?random' }} />
                            </Left>
                            <Body>
                            <Text>Sankhadeep</Text>
                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                            <Text numberOfLines={1}>$ 100.00 </Text>
                            </Body>
                            <Right>
                        
                                <Icon name='ios-arrow-forward' />
                            
                            </Right>
                        </ListItem>
               
                }>
            </List>
            </Content>
        </Container>  
    );
  }
}