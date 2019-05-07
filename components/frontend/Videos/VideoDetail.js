import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import VideoCard from './VideoCard';
import CardSection from './CardSection';
//import YouTubePlayer from 'youtube-player';
import {StackNavigator} from 'react-navigation'


// Creating Details
const VideoDetail = ({video}) =>  {
    const {snippet, id} = video;
    
    _onPress = (ide)=>{
        let player;
     
    player = YouTubePlayer('video-player');
     
    player.loadVideoById(ide);
     
    player.playVideo();
     
    // 'stopVideo' is queued after 'playVideo'.
    player
        .stopVideo()
        .then(() => {
            // Every function returns a promise that is resolved after the target function has been executed.
        });
    }
        
    
    
        return(
        
        <TouchableOpacity  onPress ={this._onPress(id)}>
            <VideoCard>
            <CardSection>
                        <View style={styles.viewStyle}>
                            <Image
                                style = {styles.imageStyle}
                                source={{uri: snippet.thumbnails.default.url}}
                            />
                        </View>
                        <View style={styles.contentStyle}>
                            <Text>{snippet.title}</Text>
                            <Text>{snippet.channelTitle}</Text>
                        </View>

                </CardSection>
                  
            
        </VideoCard>
        </TouchableOpacity>
        
         )

}


// exporting
export default VideoDetail;

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