import React, { Component } from "react";
import { View, FlatList, Image } from "react-native";
import axios from "axios";
 
import { Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class Crypto extends Component {
  state = {
    coins: [],
    refreshing: false,
    color:'',
    arrow:''
  };

  componentDidMount() {
    this.fetchCoins();
  }

  fetchCoins = () => {
    axios
      .get("https://projectbackendheroku.herokuapp.com/coins")
      .then(resp => {
        const extractedData = resp.data;
        this.setState({ coins: extractedData, refreshing: false });
        console.log(this.state.coins);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleRefresh = () => {
    this.setState({ refreshing: true }, () => {
      this.fetchCoins();
    });
  };

  // reduceNum =(num) => { for reducing digits after the decimal
  // }

  checkColorArrow = (num) => {
    if(num < 0){
      this.setState({color: 'red', arrow: 'md-arrow-up'})
    } else{
      this.setState({color:'green', arrow: 'md-arrow-down'})
    }
    return num
  }
  render() {
    const coinsToShow = (
      <View style={{backgroundColor:'#213644'}}>
        <FlatList
          data={this.state.coins}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
              <Content padder>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: item.imgSrc}} />
                <Body>
                  <Text>{item.symbol}</Text>
                  <Text note>{item.name}</Text>
                </Body>
              </Left>
              <Right>
                <Text>$ {item.priceUsd}</Text>
                <Right>
                  <Button style={{backgroundColor:'green'}}><Icon name={this.state.arrow}/><Text>{this.checkColorArrow(item.changePercent24Hr)}</Text></Button>
                </Right>
              </Right>
            </CardItem>
          </Card>
        </Content>
          )}
        />
      </View>
    );
    return <View>{coinsToShow}</View>;
  }
}

export default Crypto;