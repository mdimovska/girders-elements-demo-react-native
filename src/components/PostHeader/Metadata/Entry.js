import React from 'react'
import { StyleSheet, Text } from 'react-native'
import memoize from 'lodash.memoize'

import config from '../../../../config'

const Entry = ({ text, highlight, style }) => {
  const styles = createStyles(config)
  return (
    <Text style={[ styles.text, highlight && styles.highlightedText, style ]}>{text}</Text>
  )
}

const createStyles = memoize(({ theme: { color, font } }) => StyleSheet.create({
  text: {
    fontSize: 14,
    marginTop: 10,
    color: color.shades.light,
    fontFamily: font.family.secondary,
  },
  highlightedText: {
    color: color.secondary
  }
}))

export default Entry
