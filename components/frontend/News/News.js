import React from 'react';
import { Button, View, Text } from 'react-native';

class News extends React.Component {
  static navigationOptions = {
    title: 'News'
  }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>News Screen</Text>
        </View>
      );
    }
  }

  export default News;
  