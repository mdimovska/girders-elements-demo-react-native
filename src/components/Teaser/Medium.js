import React, { Fragment } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import Image from '../Image'
import PostMetadataEntry from '../PostHeader/Metadata/Entry'
import config from '../../../config'

const PADDING = 20
const screenWidth = Dimensions.get('window').width
const imageWidth = screenWidth - 2 * PADDING
const imageRatio = 2 / 1

const TeaserMedium = ({ title, image, authors }) => (
  <View style={[styles.container, dynamicStyles().container]}>
    <Image {...image} width={imageWidth} height={imageWidth / imageRatio} />
    <Text style={[styles.title, dynamicStyles().title]}>{title}</Text>
    <PostMetadataEntry text={authors} highlight style={styles.authors} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: PADDING
  },
  title: {
    paddingTop: 20,
    paddingBottom: 12,
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    paddingBottom: 12,
    fontSize: 16
  },
  authors: {
    marginTop: 0
  }
})

const dynamicStyles = () => {
  const { color, font } = config.theme
  return {
    container: {
      backgroundColor: color.shades.extraDark
    },
    title: {
      color: color.text.inverted,
      fontFamily: font.family.primary
    },
    description: {
      color: color.shades.light,
      fontFamily: font.family.secondary
    }
  }
}

export default TeaserMedium
