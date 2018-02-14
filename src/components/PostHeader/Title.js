import React from 'react'
import { StyleSheet, Text } from 'react-native'
import memoize from 'lodash.memoize'

import config from '../../../config'

const PostTitle = ({ title = '' }) => (
  <Text style={createStyles(config).title}>{title.toUpperCase()}</Text>
)

const createStyles = memoize(({ theme: { color, font } }) => StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: color.text.inverted,
    fontFamily: font.family.primary
  }
}))

export default PostTitle
