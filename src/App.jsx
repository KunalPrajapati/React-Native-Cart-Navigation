import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Home from './screens/Home';
import Details from './screens/Details';


function App(){

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{title: 'Trending Products'}}/>
        <Stack.Screen name="Details" component={Details} options={{title: 'Product Details'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
