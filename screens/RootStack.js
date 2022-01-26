import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RootStack() {
  return <Stack.Navigator>{/* will add */}</Stack.Navigator>;
}

export default RootStack;
