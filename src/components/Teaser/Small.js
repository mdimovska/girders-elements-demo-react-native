import React, { Fragment } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import Image from '../Image'
import config from '../../../config'

const PADDING = 20
const screenWidth = Dimensions.get('window').width
const imageWidth = (screenWidth - 2 * PADDING) / 2
const imageRatio = 2 / 1

const TeaserSmall = ({ title, image }) => (
  <View style={[styles.container, dynamicStyles().container]}>
    <Image {...image} width={imageWidth} height={imageWidth / imageRatio} />
    <Text style={[styles.title, dynamicStyles().title]}>{title}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: PADDING,
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    paddingLeft: PADDING,
    fontSize: 15,
    fontWeight: 'bold'
  }
})

const dynamicStyles = () => {
  const { color, font } = config.theme
  return {
    container: {
      backgroundColor: color.background.primary
    },
    title: {
      color: color.text.primary,
      fontFamily: font.family.primary
    }
  }
}

export default TeaserSmall
