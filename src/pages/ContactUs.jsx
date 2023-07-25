import { StyleSheet, Text, ScrollView, Linking, View } from 'react-native'
import React from 'react'
import { Card, Button, Icon, Avatar } from 'react-native-elements';

export default function ContactUs() {

  const handleCallPress = async () => {
    await Linking.openURL('tel:+573115889653')
  }

  const handleCallPress2 = async () => {
    await Linking.openURL('tel:+573026210330')
  }

  const handleWhatsAppPress = async () => {
    await Linking.openURL('https://wa.me/+573115889653?text=Hola, estoy interesado en NotDrugs!')
  }

  return (
    <ScrollView style={styles.container}>
      <Card>
          <Card.Title>Jhonathan Gonzalez</Card.Title>
          <Card.Divider />
          <Avatar
            rounded
            size='large'
            source={require('../../assets/avatar.jpg')}
            containerStyle={{display: 'flex', alignSelf: 'center'}}
          />
          <Text style={{ marginBottom: 10 }}>
              Agente Principal
          </Text>
          <Button
            icon={
              <Icon
              type='material-community'
              name='phone-in-talk'
              size={22}
              color='#ffffff'
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor: '#7da453'
            }}
            title="Llamar"
            onPress={handleCallPress}
          />
        </Card>
        <Card>
          <Card.Title>Kevin Vasquez</Card.Title>
          <Card.Divider />
          <Avatar
            rounded
            size='large'
            source={require('../../assets/avatar.jpg')}
            containerStyle={{display: 'flex', alignSelf: 'center'}}
          />
          <Text style={{ marginBottom: 10 }}>
              Agente Secundario
          </Text>
          <Button
            icon={
              <Icon
              type='material-community'
              name='phone-in-talk'
              size={22}
              color='#ffffff'
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor: '#7da453'
            }}
            title="Llamar"
            onPress={handleCallPress2}
          />
        </Card>
        <View style={styles.iconWhatsapp}>
        <Icon
          type='material-community'
          name='whatsapp'
          size={55}
          color='#7da453'
          onPress={handleWhatsAppPress}
        />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  contacto1: {
    marginTop: 40
  },
  contacto2: {
    marginTop: 20
  },
  iconWhatsapp: {
    display: 'flex',
    alignItems: 'flex-end',
    margin: 20,
    marginTop: 150,
    justifyContent: 'flex-end'
  }
})