import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Account from '../pages/Account'

const Stack = createStackNavigator()

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Account"
          component={Account}
          options={{title: 'Account'}}
      />
    </Stack.Navigator>
  )
}