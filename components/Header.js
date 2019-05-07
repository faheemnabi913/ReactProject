import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

const Header = ()=>{
    return(
        <View style={styles.headerStyle}>
            <ImageBackground
                source = {require('./images/icon.jpg')}
                style = {styles.icon}
            />
            <Text style={styles.headerTextStyle}>SiMpLiFy</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    headerStyle : {
        flex: 1,
        height: 60,
        marginTop: 20, 
        backgroundColor: '#E7E5E5',
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 4,
        borderBottomColor:'#ccc',
        shadowColor:'#000',
        shadowOpacity:0.6,
    },
    headerTextStyle : {
        fontSize:20,
        marginLeft: 10,
        fontStyle: 'italic',
        color: 'black',
    },
    icon : {
        width: 40,
        height: 40,
    }

  });