import React from 'react';
import { Text, View, StyleSheet } from 'react-native'; 

export default class ImageOverlay extends React.Component {
    render(){
        let header = this.props.headerText ?
            this.props.headerText : null;
        return(
            <View>
                <Text style={styles.overlayHeader}>{header}</Text>
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
        borderRadius:3,
        elevation: 0.5,

        alignSelf: 'center',
        fontSize: 20,
        color: 'black',
        padding: 10,
        backgroundColor: '#F5F1F1',
        fontWeight: 'bold',
        flexWrap:'wrap'
    },

  });