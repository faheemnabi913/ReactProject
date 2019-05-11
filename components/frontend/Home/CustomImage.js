import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import ImageOverlay from './ImageOverlay';

export default class CustomImage extends React.Component {
    render(){
        return(
            <ImageBackground
                source = {this.props.imageSource}
                style = {styles.image} 
            >
                <ImageOverlay 
                    headerText = {this.props.headerText}
                    
                />
            </ImageBackground>

        );
    }
}


const styles = StyleSheet.create({
    image : {
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    }

  });