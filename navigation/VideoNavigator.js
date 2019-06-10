import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Videos from '../frontend/Videos/VideoList'
import PlayVideo from '../frontend/Videos/PlayVideo'


const RootStack = createStackNavigator(
    {
      Videos: Videos,
      PlayVideo: PlayVideo,

    },
  );

const Container = createAppContainer(RootStack)

export default class VideoNavigator extends React.Component {
    render() {
      return <Container />;
    }
  }