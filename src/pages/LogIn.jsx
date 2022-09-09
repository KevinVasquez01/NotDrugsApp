import React from 'react'
import { Formik, useField } from 'formik'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import StyledTextInput from '../components/StyledTextInput.jsx'
import StyledText from '../components/StyledText.jsx'
import { loginValidationSchema } from '../validationSchemas/login'
import TitleLogIn from '../components/TtitleLogIn.jsx'

const initialValues = {
  email: '',
  password: ''
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    marginTop: 3
  },
  forgotPassword:{
    fontSize: 14,
    color: 'gray',
    marginTop: 20
  }, 
  button: {
    width: '50%',
    marginTop: 60
  }, 
  linear: {
    height: 50,
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  dontAccount: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  }, 
  createAccount: {
      fontWeight: 'bold',
      color: '#32404A'
  }
})

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

export default function LogInPage () {

  return (
  <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
        { ({ handleSubmit }) => {
          return (
            <View style={styles.form}>
                <TitleLogIn/>
                <FormikInputValue
                    name='email'
                    placeholder='user@email.com'
                    />
                <FormikInputValue
                    name= 'password'
                    placeholder='password'
                    secureTextEntry
                    />
                <Text style={styles.forgotPassword}>Forgot your password?</Text> 
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <LinearGradient style={styles.linear}
                        // Button Linear Gradient
                        colors={['#7da453', '#aed581']}
                        start={{x: 1, y: 0}}
                        end={{x: 0, y: 1}}
                        >
                        <Text style={styles.text}>Log In</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.dontAccount}>Don't have an account?</Text> 
                <Text style={styles.createAccount}>Create</Text>
            </View>
          )
        } }
    </Formik>
  )
}
