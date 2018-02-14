import React from 'react'
import { StyleSheet, View } from 'react-native'
import memoize from 'lodash.memoize'

import Title from './Title'
import Metadata from './Metadata'
import config from '../../../config'

const PostHeader = ({ children}) => (
  <View style={createStyles(config).container}>
    {children}
  </View>
)

const createStyles = memoize(({ theme: { color } }) => StyleSheet.create({
  container: {
    backgroundColor: color.background.inverted,
    padding: 20
  }
}))

PostHeader.Title = Title
PostHeader.Metadata = Metadata

export default PostHeader
