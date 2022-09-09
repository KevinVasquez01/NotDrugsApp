import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Information from '../pages/Information'

const Stack = createStackNavigator()

export default function InformationStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Information"
            component={Information}
            options={{title: 'Information'}}
        />
    </Stack.Navigator>
  )
}