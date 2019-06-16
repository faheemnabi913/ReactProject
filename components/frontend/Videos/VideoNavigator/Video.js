import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Videos from '../VideoList'
import PlayVideo from '../PlayVideo'


const RootStack = createStackNavigator(
    {
      Videos: Videos,
      PlayVideo: PlayVideo,

    },
  );

export default createAppContainer(RootStack)