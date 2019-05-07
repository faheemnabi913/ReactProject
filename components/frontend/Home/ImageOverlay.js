import React from 'react';
import { Text, View, StyleSheet } from 'react-native'; 

export default class ImageOverlay extends React.Component {
    render(){
        let header = this.props.headerText ?
            <Text style={styles.overlayHeader}>{this.props.headerText}</Text> : null;
        let aboutInfo = this.props.aboutInfo ?
            <Text style={styles.overlayInfo}>{this.props.aboutInfo}</Text> : null;
        return(
            <View>
                {header}
                {aboutInfo}
            </View>
        );
    
    }
}


const styles = StyleSheet.create({
    overlayHeader : {
        shadowColor:'#000',
        shadowOpacity: 0.8,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        elevation: 1,

        alignSelf: 'center',
        fontSize: 26,
        color: 'black',
        padding: 10,
        backgroundColor: '#F5F1F1',
        fontWeight: 'bold',
    },
    overlayInfo : {
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        elevation: 1,
        
        alignSelf: 'center',
        fontSize: 18,
        fontStyle: 'italic',
        color: 'black',
        padding: 7,
        backgroundColor: '#F5F1F1',
        marginTop: 6,
    }

  });