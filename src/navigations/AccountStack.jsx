import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Account from '../pages/Account'

const Stack = createNativeStackNavigator()

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Account"
          component={Account}
          options={{title: 'Account', headerLeft: () => null}}
      />
    </Stack.Navigator>
  )
}