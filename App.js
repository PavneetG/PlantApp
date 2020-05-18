import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { AppLoading, Asset} from 'expo';

import Navigation from './navigation';
import {Block} from './components';
import * as constants from './constants';

//import all images
const images = [
  require('./assets/icons/back.png'),
  require('./assets/icons/plants.png'),
  require('./assets/icons/seed.png'),
  require('./assets/icons/flowers.png'),
  require('./assets/icons/sprayers.png'),
  require('./assets/icons/pots.png'),
  require('./assets/icons/fertilizers.png'),
  require('./assets/images/plants_1.png'),
  require('./assets/images/plants_2.png'),
  require('./assets/images/plants_3.png'),
  require('./assets/images/explore_1.png'),
  require('./assets/images/explore_2.png'),
  require('./assets/images/explore_3.png'),
  require('./assets/images/explore_4.png'),
  require('./assets/images/explore_5.png'),
  require('./assets/images/explore_6.png'),
  require('./assets/images/avatar.png'),
];

export default class App extends React.Component{
  state = {
    isLoadingComplete: false,
  }

  handleResourcesAsync = async () => {

    //Caching images
    const cacheImages = images.map(img=>{
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }

  render()
  {
    if(this.state.isLoadingComplete && !this.props.skipLoadingScreen){
      return (
        <AppLoading>
          startAsync = {this.handleResourcesAsync}
          onError = {error => console.warn(error)}
          onFinish={() => this.setState({isLoadingComplete: true})}
        </AppLoading>
      )
    }
    return (
      <View style={StyleSheet.container}>
        <Navigation/>
      </View>
    );
  }
}

const styles = StyleSheet({
  constants: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});