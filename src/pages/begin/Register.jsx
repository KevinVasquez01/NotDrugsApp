import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'
import 'react-native-gesture-handler';
import { Formik, useField } from 'formik';
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

import StyledTextInput from '../../components/StyledTextInput.jsx'
import StyledText from '../../components/StyledText.jsx'
import { registerValidationSchema } from '../../validationSchemas/register'
import { registerUser, getCurrentUser } from '../../utils/actions.js';
import Loading from '../../components/Loading.jsx';

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  return (
    <>
    <StyledTextInput
      error={meta.error}
      value={field.value}
      onChangeText={value => helpers.setValue(value)}
      {...props}
    />
    {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

export default function Register() {

    const [showPassword, setShowPassword] = useState(true)
    const [formData, setFormData] = useState(initialValues)
    const [errorEmail, setErrorEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    const doRegisterUser = async (email, password) => {
      formData.email = email;
      formData.password = password
      if(!(registerValidationSchema)){
        return
      }
  
      setLoading(true)
      const result = await registerUser(formData.email, formData.password)
      setLoading(false)
      
      if(!result.statusResponse){
        setErrorEmail(result.error)
        return
      }
  
      navigation.navigate('Begin')
    }
    

  return (
    <Formik validationSchema={registerValidationSchema} initialValues={initialValues} onSubmit={(values, actions) => {
      doRegisterUser(values.email, values.password)
      actions.resetForm({
        values: {
          email: '',
          password: '',
          confirm: ''
        }
      })
    }}>
      { ({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name='email'
              containerStyle={styles.input}
              placeholder='Ingresa tu email'
              keyboardType='email-address'
              errorMessage={errorEmail}
              
            />
            <FormikInputValue
              name='password'
              containerStyle={styles.input}
              placeholder='Ingresa tu contraseña'
              password={true}
              secureTextEntry={!showPassword}              
              rightIcon={
                <Icon
                    type='material-community'
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    iconStyle={styles.icon}
                    onPress={() => setShowPassword(!showPassword)}
                />
              }
            />
            <FormikInputValue
              name='confirm'
              containerStyle={styles.input}
              placeholder='Confirma tu contraseña'
              password={true}
              secureTextEntry={!showPassword}
              rightIcon={
                <Icon
                    type='material-community'
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    iconStyle={styles.icon}
                    onPress={() => setShowPassword(!showPassword)}
                />
              }
            />
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <LinearGradient style={styles.linear}
                        // Button Linear Gradient
                        colors={['#7da453', '#aed581']}
                        start={{x: 1, y: 0}}
                        end={{x: 0, y: 1}}
                        >
                        <Text style={styles.text}>Sing In New User</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Loading isVisible={loading} text='Creating Account...'/>
          </View>
             ) } }
    </Formik>
  )
}

const initialValues = {
  email: '',
  password: '',
  confirm: ''
}

const styles = StyleSheet.create({
    form: {
        marginTop: 30,
        flex: 1,
        alignItems: 'center'
    },
    input: {
        width: "100%"
    },
    button: {
        marginTop: 20,
        width: '60%'
    },
    linear: {
      height: 50,
      borderRadius: 25,
      padding: 8,
      alignItems: 'center',
      justifyContent: 'center'
    },
    error: {
      color: 'red',
      fontSize: 12,
      marginBottom: 10,
      marginTop: 3
    },
    text: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold'
    },
    icon: {
      color: '#c1c1c1'
    }
})