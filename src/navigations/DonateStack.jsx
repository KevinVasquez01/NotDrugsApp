import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Donate from '../pages/Donate'

const Stack = createStackNavigator()

export default function DonateStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Donate"
            component={Donate}
            options={{title: 'Donate'}}
        />
    </Stack.Navigator>
  )
}