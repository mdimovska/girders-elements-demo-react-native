import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import memoize from 'lodash.memoize'

import Image from '../Image'
import PostMetadataEntry from '../PostHeader/Metadata/Entry'
import config from '../../../config'

const TeaserLarge = ({ title = '', description, image, authors }) => {
  const styles = createStyles(config)
  return (
    <View style={styles.container}>
      <Image {...image} />

      <View style={styles.infoContainer}>
        <View style={styles.opacityView} />
        <View style={styles.line} />

        <Text style={styles.title}>{title.toUpperCase()}</Text>
        <PostMetadataEntry text={authors} highlight style={styles.authors} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}

const createStyles = memoize(({ theme: { color, font } }) => StyleSheet.create({
  container: {
    backgroundColor: color.background.inverted
  },
  infoContainer: {
    marginTop: -50,
    paddingHorizontal: 20
  },
  opacityView: {
    position: 'absolute',
    top: 0,
    height: 50,
    left: 0,
    right: 0,
    opacity: 0.2,
    backgroundColor: color.background.inverted
  },
  line: {
    width: 80,
    height: 10,
    backgroundColor: color.background.primary
  },
  title: {
    paddingTop: 20,
    paddingBottom: 12,
    fontSize: 25,
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
    marginTop: 0,
    marginBottom: 12
  }
}))

export default TeaserLarge
