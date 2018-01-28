import React from 'react'
import { View } from 'react-native'

import Title from './Title'
import Metadata from './Metadata'
import config from '../../../config'

const PostHeader = ({ children}) => (
  <View style={dynamicStyles().container}>
    {children}
  </View>
)

const dynamicStyles = () => {
  const { color } = config.theme
  return {
    container: {
      backgroundColor: color.background.inverted,
      padding: 20
    }
  }
}

PostHeader.Title = Title
PostHeader.Metadata = Metadata

export default PostHeader
