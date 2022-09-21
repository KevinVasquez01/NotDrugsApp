import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Information from '../pages/Information'

const Stack = createNativeStackNavigator()

export default function InformationStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Information"
            component={Information}
            options={{title: 'Information', headerLeft: () => null}}
        />
    </Stack.Navigator>
  )
}