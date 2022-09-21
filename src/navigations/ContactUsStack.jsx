import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ContactUs from '../pages/ContactUs'

const Stack = createNativeStackNavigator()

export default function ContactUsStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Contact-us"
            component={ContactUs}
            options={{title: 'Contact Us', headerLeft: () => null}}
        />
    </Stack.Navigator>
  )
}