import React from 'react';
import { FlatList, View, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right, Spinner } from 'native-base'

var region = "IN"; // others are IN,PK,US,AU,CAcan be utilised with dropdown and state property
var key = "AIzaSyCQXmAB1Nc5ZI2C770jdmqY0tEYidUmauo"
var url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=${region}&key=${key}`;

// const region = [
//   {
//     value: 'IN',
//     label: 'IN'
//   },
//   {
//     value: 'PK',
//     label: 'PK'
//   },
//   {
//     value: 'US',
//     label: 'US'
//   },
//   {
//     value: 'GB',
//     label: 'UK'
//   },
//   {
//     value: 'AU',
//     label: 'AUS'
//   },
//   {
//     value: 'CA',
//     label: 'CAN'
//   }
// ]

export default class VideoList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      }
  }
  static navigationOptions = {
    title: 'Videos'
  }

  componentDidMount(){
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.items,
        }, function(){

        });

      })
      .catch((error) =>{
        <Text>{error}</Text>
      });
  }

   nFormatter = (num) => {
     if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
     }
     if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
     }
     if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
     }
     return num;
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <Spinner/>
        </View>
      )
    }

    return(
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <TouchableOpacity 
          key={item.id}
          onPress={() => this.props.navigation.navigate('PlayVideo', {youtubeId : item.id})}
          >
              <Content padder>
                <Card>
                    <CardItem cardBody>
                      <Image source={{uri: item.snippet.thumbnails.medium}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>

                  <CardItem>
                    <Left>
                        <Text>{item.snippet.title}</Text>
                    </Left>
                  </CardItem>

                  <CardItem>
                    <Text></Text>
                    <Text note>{item.snippet.channelTitle}</Text>
                  </CardItem>
              
                  <CardItem>
                    <Left>
                      <Button transparent>
                        <Icon active name="md-eye" />
                        <Text>{this.nFormatter(item.statistics.viewCount)}</Text>
                      </Button>
                    </Left>
                    <Body>
                      <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>{this.nFormatter(item.statistics.likeCount)}</Text>
                      </Button>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Icon active name="thumbs-down" />
                        <Text>{this.nFormatter(item.statistics.dislikeCount)}</Text>
                      </Button>
                    </Right>
                  </CardItem>

                </Card>
              </Content>
          </TouchableOpacity>}
          keyExtractor={({id}) => id}
        />
      </View>
    );
  }
}
