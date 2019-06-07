import React from 'react';
import {StyleSheet, View} from 'react-native'
import { StackNavigator } from 'react-navigation'
import Youtube from 'react-native-youtube'

export default class PlayVideo extends React.Component{
    static navigationOptions = {
        headerTitle: 'Youtube',
        headerStyle: {
            backgroundColor: '#000'
        },
        headerTitleStyle: {
            color: '#fff'
        }
    }

    render(){
        return(
            <View style={StyleSheet.container}>
                <Youtube 
                    videoId={this.props.navigation.state.params.youtubeId}
                    play={true}
                    fullscreen={true}
                    loop={false}
                    apiKey={"AIzaSyCQXmAB1Nc5ZI2C770jdmqY0tEYidUmauo"}
                    onChangeState={ e => this.setState({status :e.state})}
                    onChangeQuality={ e => this.setState({quality :e.quality})}
                    onError={ e => this.setState({error :e.error})}
                    style={{alignSelf: 'stretch', height: 300}}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})
