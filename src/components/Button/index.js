import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

import config from '../../../config'

const Button = ({ text = 'Load new content', onClick }) => (
  <TouchableHighlight onPress={onClick}>
    <Text style={[styles.button, dynamicStyles().button]}>{text}</Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  button: {
    padding: 10,
    fontSize: 16
  }
})

const dynamicStyles = () => {
  const { color, font } = config.theme
  return {
    button: {
      color: color.text.inverted,
      backgroundColor: color.primary,
      fontFamily: font.family.primary
    }
  }
}

export default Button
