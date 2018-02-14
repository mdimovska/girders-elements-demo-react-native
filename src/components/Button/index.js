import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import memoize from 'lodash.memoize'

import config from '../../../config'

const Button = ({ text = 'Load new content', onClick }) => (
  <TouchableHighlight onPress={onClick}>
    <Text style={createStyles(config).button}>{text}</Text>
  </TouchableHighlight>
)

const createStyles = memoize(({ theme: { color, font } }) => StyleSheet.create({
  button: {
    padding: 10,
    fontSize: 16,
    color: color.text.inverted,
    backgroundColor: color.primary,
    fontFamily: font.family.primary
  }
}))

export default Button
