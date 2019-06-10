import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from '../frontend/Home/AppContainer'
import Home from '../frontend/Home/Home'
import HomeScreen from '../frontend/News/screens/home'
//import Videos from '../frontend/Videos/VideoList'
import Music from '../frontend/Music/Music'
import Movies from '../frontend/Movies/Movies'
import Crypto from '../frontend/Crypto/Crypto'
import Petrol from '../frontend/Petrol/Petrol'
import VideoNavigator from './VideoNavigator'
//import PlayVideo from '../frontend/Videos/PlayVideo'


const RootStack = createStackNavigator(
    {
      Main: Main,
      News: HomeScreen,
      Videos: VideoNavigator,
      Music: Music,
      Movies: Movies,
      Crypto: Crypto,
      Petrol: Petrol

    },
  );

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }