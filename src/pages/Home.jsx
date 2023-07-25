import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/rehabilitacion.jpg')}
        resizeMode='contain'
        style={styles.image}
      />
      <Text style={styles.frase}>"La vida te puede llevar más alto que cualquier tipo de droga"</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30
  },
  frase: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7da453'
  },
  image: {
    height: 300,
    width: '100%',
    textAlign: 'center'
  }
})