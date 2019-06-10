import React from 'react';
import { FlatList, ActivityIndicator, View, TouchableOpacity, StyleSheet,Image, Text } from 'react-native';
import VideoDetail from './VideoDetail'; //no need if this works
import VideoCard from './VideoCard';
import CardSection from './CardSection';

var region = "GB"; // others are IN,PK,US,AU,CAcan be utilised with dropdown and state property
var key = "AIzaSyCQXmAB1Nc5ZI2C770jdmqY0tEYidUmauo"
var url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=${region}&key=${key}`;

export default class VideoList extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
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
          renderItem={({item}) => <TouchableOpacity 
          key={item.id}
          onPress={() => this.props.navigation.navigate('PlayVideo', {youtubeId : key})}
          >
              <VideoCard>
                  <CardSection>
                      <View style={styles.viewStyle}>
                          <Image
                              style = {styles.imageStyle}
                              source={{uri: item.snippet.thumbnails.default.url}}
                          />
                      </View>
                      <View style={styles.contentStyle}>
                          <Text>{item.snippet.title}</Text>
                          <Text>{item.snippet.channelTitle}</Text>
                      </View>

                  </CardSection>
                  
              
              </VideoCard>
          </TouchableOpacity>}
          keyExtractor={({id}) => id}
        />
      </View>
    );
  }
}

 const styles = StyleSheet.create({
     contentStyle :{
         justifyContent : 'space-around',
         flexShrink : 1,
         flexDirection :'column',
         paddingLeft : 15,
         
     },
     imageStyle : {
         width : 100,
         height :100,
         justifyContent:'center'
     },
     viewStyle:{
         justifyContent:'center'
     }
 })