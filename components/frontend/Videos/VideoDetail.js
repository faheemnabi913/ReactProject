import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import VideoCard from './VideoCard';
import CardSection from './CardSection';
import PlayVideo from './PlayVideo'
import VideoList from './VideoList';

//import 
//import {StackNavigator} from 'react-navigation'


export default class VideoDetail extends React.Component  {
    
    render(){
        const {snippet, id} = this.props.video;
        return(
        
            <TouchableOpacity 
            key={id}
            onPress={() => this.props.navigation.navigate('PlayVideo', {youtubeId : id})}
            >
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
