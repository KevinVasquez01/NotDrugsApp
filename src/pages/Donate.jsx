import { StyleSheet, View, Image, ScrollView , Text, TouchableOpacity, Linking} from 'react-native'
import { Card } from 'react-native-elements'; 
import React from 'react'

export default function Donate() {

  const handleNequiPress = async () => {
    await Linking.openURL('https://recarga.nequi.com.co/bdigitalpsl/#!/')
  }

  const handleDaviPress = async () => {
    await Linking.openURL('https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=2508')
  }

  return (
    <ScrollView>
      <Card>
          <Card.Title>MEDIOS DE DONACIÓN</Card.Title>
          <Card.Divider />
              <View style={styles.user}>
                <TouchableOpacity onPress={handleNequiPress}>
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={require('../../assets/nequi-logo.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.name}>NEQUI: 3208703484</Text>
              </View>
              <Card.Divider />
              <View style={styles.user}>
              <TouchableOpacity onPress={handleDaviPress}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={require('../../assets/daviplata-logo2.png')}
                />
              </TouchableOpacity>
                <Text style={styles.name}>DAVIPLATA: 3208703484</Text>
              </View>
        </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  name: {
    fontSize: 16
  }
})