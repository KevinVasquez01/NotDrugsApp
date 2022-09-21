import { StyleSheet, Text, View } from 'react-native'
import react, { useEffect, useState } from 'react'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native' 
import Toast from 'react-native-toast-message'

import { closeSesion } from '../utils/actions'
import { getCurrentUser } from '../utils/actions'
import InfoUser from '../components/account/InfoUser'
import Loading from '../components/Loading'

export default function Account() {

  const navigation = useNavigation()

  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(getCurrentUser())
  }, [])

  return (
    <View style={styles.container}>
      {
        user && <InfoUser user={user}/>
      }
      <Text>Account Info</Text>
      <Button
        title='Sign Off'
        buttonStyle={styles.btnCloseSession}
        titleStyle={styles.btnCloseSessionTitle}
        onPress={() => {
          closeSesion()
          navigation.navigate('Login')
        }}
      />
      <Toast position='center' opacity={0.9}/>
      <Loading isVisible={loading} text={loadingText}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#f9f9f9'
  },
  btnCloseSession: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#7da453',
    borderBottomWidth: 1,
    borderBottomColor: '#7da453',
    paddingVertical: 10
  },
  btnCloseSessionTitle: {
    color: '#7da453'
  }
})