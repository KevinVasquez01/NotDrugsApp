import { StyleSheet, Text, View, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import React from 'react'
import { Marker } from 'react-native-maps'

export default function Information() {
  return (
    <View>
      <MapView style={styles.map}
          initialRegion={{
            latitude: 4.71094,
            longitude: -74.07110,
            latitudeDelta: 0,
            longitudeDelta: 0.05,
          }}
      >
    <Marker
      key={1}
      coordinate={{latitude: 4.62115, longitude: -74.15073}}
      title={'Grupo La Gratitud'}
      description={'Narcoticos Anonimos - 3707031'}
    />
    <Marker
      key={2}
      coordinate={{latitude: 4.63242, longitude: -74.13442}}
      title={'Juntos Construimos Sueños'}
      description={'Centro de Rehabilitación - 305 2627514'}
    />
    <Marker
      key={3}
      coordinate={{latitude: 4.59456, longitude: -74.13860}}
      title={'Templo llanero fe y esperanza'}
      description={'Centro de Rehabilitación'}
    />
    <Marker
      key={4}
      coordinate={{latitude: 4.63906, longitude: -74.11688}}
      title={'Fundación La Luz'}
      description={'IPS - 300 8294982'}
    />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})