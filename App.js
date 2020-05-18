import React from 'react';
import {Image} from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Welcome from '../PlantApp/screens/Welcome'
import Login from '../PlantApp/screens/Login'
import Browse from '../PlantApp/screens/Browse'
import Explore from '../PlantApp/screens/Explore'
import Settings from '../PlantApp/screens/Settings'
import Product from '../PlantApp/screens/Product'

import {theme} from '../PlantApp/constants'

const screens = createStackNavigator({
  Welcome,
  Login,
  Explore,
  Browse,
  Product,
  Settings,
}, {
  defaultNavigationOptions: {
    headerStyle: {}, 
    headerBlackImage: <Image/>,
    headerBlackTitle: null,
    headerLeftContainerStyle: {}, 
    headerRightContainerStyle: {}, 
  }
});

export default createAppContainer(screens);