import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../auth/Login';
import Register from '../auth/Register';
const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="login" component={Login} />
        <AppStack.Screen name="register" component={Register} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
