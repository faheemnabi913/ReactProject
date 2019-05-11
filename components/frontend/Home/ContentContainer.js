import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
 
import CustomImage from './CustomImage'

export default class ContentContainer extends React.Component {
    render(){
        return(
            <View style={styles.contentContainer}>
                <View style={styles.news}>
                    <CustomImage
                        imageSource={require('../../images/news.jpg')}
                        headerText={<Text>{'News'}</Text>}
                    />
                </View>
                <View style={styles.videos}>
                    <CustomImage 
                        imageSource={require('../../images/videos.jpg')}
                        headerText={<Text>{'Videos'}</Text>}
                    />
                </View>
                <View style={styles.music}>
                    <CustomImage 
                        imageSource={require('../../images/music.jpg')}
                        headerText={<Text>{'Music'}</Text>}
                    />
                </View>
                <View style={styles.movies}>
                    <CustomImage 
                        imageSource={require('../../images/movies.jpg')}
                        headerText={<Text>{'Movies'}</Text>}
                    />
                </View>
                <View style={styles.crypto}>
                    <CustomImage 
                        imageSource={require('../../images/bitcoin.jpg')}
                        headerText={<Text>{'CryptoCurrency'}</Text>}
                    />
                </View>
                <View style={styles.petrol}>
                    <CustomImage 
                        imageSource={require('../../images/petrol.jpg')}
                        headerText={<Text>{'Petrol'}</Text>}
                    />
                </View>
            </View>        
        );
    }
}


const styles = StyleSheet.create({
    contentContainer : {
        flex: 1,
        flexDirection : 'row',
        flexWrap: 'wrap',
        padding: 3,
    },
    news : {
        width : '100%',
        padding: 3,
    },
    videos : {
        flex : 1,
        padding : 3,
    },
    music : {
        flex : 1,
        padding : 3,
    },
    movies : {
        width : '100%',
        padding : 3,
    },
    crypto : {
        flex : 1,
        padding : 3,
    },
    petrol : {
        flex : 1,
        padding : 3,
        flexWrap : 'wrap'
    },

  });
