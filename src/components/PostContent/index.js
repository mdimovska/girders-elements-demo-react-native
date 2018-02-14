import React from 'react'
import { StyleSheet, Text } from 'react-native'
import memoize from 'lodash.memoize'

import config from '../../../config'

const PostContent = ({ text }) => (
  <Text style={createStyles(config).text}>{text}</Text>
)

const createStyles = memoize(({ theme: { color, font } }) => StyleSheet.create({
  text: {
    paddingHorizontal: 20,
    paddingBottom: 18,
    fontSize: 18,
    color: color.text.primary,
    fontFamily: font.family.primary
  }
}))

export default PostContent
