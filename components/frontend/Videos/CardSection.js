import React from 'react';
import {View,StyleSheet} from 'react-native';

// Creating Section and importing video item through props
const CardSection = (props)=>{
    return(
        <View style={styles.cardStyle}>
            {props.children}
        </View>
    );
}


// exporting
export default CardSection;

const styles = StyleSheet.create({
    cardStyle: {
      borderBottomWidth: 0,
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative'

    },
  });