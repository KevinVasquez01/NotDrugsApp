import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Donate from '../pages/Donate'

const Stack = createNativeStackNavigator()

export default function DonateStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Donate"
            component={Donate}
            options={{title: 'Donate', headerLeft: () => null}}
        />
    </Stack.Navigator>
  )
}