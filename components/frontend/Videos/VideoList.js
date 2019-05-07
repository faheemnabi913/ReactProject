import React from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import VideoDetail from './VideoDetail';

var region = "GB"; // others are IN,PK,US,AU,CA
var key = "AIzaSyCQXmAB1Nc5ZI2C770jdmqY0tEYidUmauo"
var url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=${region}&key=${key}`;

export default class VideoList extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
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



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <VideoDetail video={item}/>}
          keyExtractor={({id}) => id}
        />
      </View>
    );
  }
}