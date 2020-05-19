import React from 'react';
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from '../screens/Welcome'
// import Login from '../PlantApp/screens/Login'
// import Browse from '../PlantApp/screens/Browse'
// import Explore from '../PlantApp/screens/Explore'
// import Settings from '../PlantApp/screens/Settings'
// import Product from '../PlantApp/screens/Product'

import { theme } from '../constants'

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Welcome" component={Welcome} />
//     </Stack.Navigator>
//   );
//}

const screens = createStackNavigator(
  {
    Welcome,
    // Login,
    // SignUp,
    // Forgot,
    // Explore,
    // Browse,
    // Product,
    // Settings
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
      headerBackImage: <Image source={require("../assets/icons/back.png")} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
  }
)

export default createAppContainer(screens);