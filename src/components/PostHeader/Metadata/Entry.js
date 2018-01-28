import React from 'react'
import { StyleSheet, Text } from 'react-native'

import config from '../../../../config'

const Entry = ({ text, highlight, style }) => (
  <Text style={[ styles.text, dynamicStyles().text, highlight && dynamicStyles().highlight, style ]}>{text}</Text>
)

const styles =  StyleSheet.create({
  text: {
    fontSize: 14,
    marginTop: 10
  }
})

const dynamicStyles = () => {
  const { color, font } = config.theme
  return {
    text: {
      color: color.shades.light,
      fontFamily: font.family.secondary,
    },
    highlight: {
      color: color.secondary
    }
  }
}

export default Entry
