import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 30,
    paddingStart: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 10,
    width: '100%',
    backgroundColor: '#fff'
  },
  error: {
    borderColor: 'red'
  }
})

const StyledTextInput = ({ style = {}, error, ...props }) => {
  const inputStyle = [
    styles.textInput,
    style,
    error && styles.error
  ]

  return <TextInput style={inputStyle} {...props} />
}

export default StyledTextInput
