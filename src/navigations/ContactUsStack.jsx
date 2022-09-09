import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ContactUs from '../pages/ContactUs'

const Stack = createStackNavigator()

export default function ContactUsStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Contact-us"
            component={ContactUs}
            options={{title: 'Contact Us'}}
        />
    </Stack.Navigator>
  )
}