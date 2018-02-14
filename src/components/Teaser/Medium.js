import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import memoize from 'lodash.memoize'

import Image from '../Image'
import PostMetadataEntry from '../PostHeader/Metadata/Entry'
import config from '../../../config'

const PADDING = 20
const screenWidth = Dimensions.get('window').width
const imageWidth = screenWidth - 2 * PADDING
const imageRatio = 2 / 1

const TeaserMedium = ({ title, image, authors }) => {
  const styles = createStyles(config)
  return (
    <View style={styles.container}>
      <Image {...image} width={imageWidth} height={imageWidth / imageRatio} />
      <Text style={styles.title}>{title}</Text>
      <PostMetadataEntry text={authors} highlight style={styles.authors} />
    </View>
  )
}

const createStyles = memoize(({ theme: { color, font } }) => StyleSheet.create({
  container: {
    padding: PADDING,
    backgroundColor: color.shades.extraDark
  },
  title: {
    paddingTop: 20,
    paddingBottom: 12,
    fontSize: 20,
    fontWeight: 'bold',
    color: color.text.inverted,
    fontFamily: font.family.primary
  },
  description: {
    paddingBottom: 12,
    fontSize: 16,
    color: color.shades.light,
    fontFamily: font.family.secondary
  },
  authors: {
    marginTop: 0
  }
}))

export default TeaserMedium
