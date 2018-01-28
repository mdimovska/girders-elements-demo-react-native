import React from 'react'
import { StyleSheet, Text } from 'react-native'

import config from '../../../config'

const PostTitle = ({ title = '' }) => (
  <Text style={[styles.title, dynamicStyles().title]}>{title.toUpperCase()}</Text>
)

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})

const dynamicStyles = () => {
  const { color, font } = config.theme
  return {
    title: {
      color: color.text.inverted,
      fontFamily: font.family.primary
    }
  }
}

export default PostTitle
