import React from 'react';
import {View,StyleSheet} from 'react-native';

// Creating Section
const VideoCard = (props)=>{
    return(
        <View style={styles.cardStyle}>
            {props.children}
        </View>
    );
}


// exporting
export default VideoCard;

const styles = StyleSheet.create({
    cardStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: 'black',
      shadowOffset: {width: 0,height: 2},
      shadowOpacity:0.6,
      shadowRadius:2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,

    },
  });