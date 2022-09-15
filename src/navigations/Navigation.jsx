import React, { useEffect, useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import InformationStack from './InformationStack'
import AccountStack from './AccountStack'
import ContactUsStack from './ContactUsStack'
import DonateStack from './DonateStack'
import HomeStack from './HomeStack'
import { isUserLogged, getCurrentUser } from '../utils/actions'
import Loading from '../components/Loading'
import LogInStack from './LogInStack'


const Tab = createBottomTabNavigator()

export default function Navigation() {

  const ScreenOptins = (route, color) => {
    let iconName
    switch (route.name) {
      case "home":
        iconName = 'home-outline'
        break;
      case "contact-us":
        iconName = 'phone-in-talk-outline'
        break;
      case "donate":
        iconName = 'heart-outline'
        break;
      case "information":
        iconName = 'information-outline'
        break;
      case "account":
        iconName = 'account-outline'
        break;
    }

    return (
      <Icon
        type='material-community'
        name={iconName}
        size={22}
        color={color}
      />
    )
  }

    return (
    <Tab.Navigator
      initialRouteName='home'
      screenOptions={({route}) => ({
        tabBarInactiveTintColor:  '#aed581',
        tabBarActiveTintColor: '#7da453',
        tabBarIcon: ({color}) => ScreenOptins(route, color),
        headerShown: false
      })}
  >
          <Tab.Screen
          name='account'
          component={AccountStack}
          options={{ title: 'Account' }} />
          <Tab.Screen
            name='home'
            component={HomeStack}
            options={{ title: 'Home' }} />
            <Tab.Screen
            name='contact-us'
            component={ContactUsStack}
            options={{ title: 'Contact Us' }} />
            <Tab.Screen
            name='information'
            component={InformationStack}
            options={{ title: 'Information' }} />
            <Tab.Screen
            name='donate'
            component={DonateStack}
            options={{ title: 'Donate' }} />
          </Tab.Navigator>
          )

  }

    