import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LogInPage from '../pages/begin/LogInPage'
import Register from '../pages/begin/Register'
import 'react-native-gesture-handler';
import Navigation from './Navigation';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

export default function LogInStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
     screenOptions={({route}) => ({
        headerShown: false
      })}
    >
        <Stack.Screen
            name="Login"
            component={LogInPage}
            options={{title: 'Log In'}}
        />
        <Stack.Screen
            name="Register"
            component={Register}
            options={{title: 'Register', headerShown: true}}
        />
        <Stack.Screen
            name="Begin"
            component={Navigation}
            options={{title: 'Begin', headerShown: false}}
        />
    </Stack.Navigator>
    </NavigationContainer>
  )
}