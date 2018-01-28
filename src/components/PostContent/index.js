import React, { Fragment } from 'react'
import { StyleSheet, Text } from 'react-native'

import config from '../../../config'

const PostContent = ({ text }) => (
  <Text style={[styles.text, dynamicStyles().text]}>{text}</Text>
)

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 20,
    paddingBottom: 18,
    fontSize: 18
  }
})

const dynamicStyles = () => {
  const { color, font } = config.theme
  return {
    text: {
      color: color.text.primary,
      fontFamily: font.family.primary
    }
  }
}

export default PostContent
