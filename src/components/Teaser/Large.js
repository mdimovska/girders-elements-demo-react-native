import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Image from '../Image'
import PostMetadataEntry from '../PostHeader/Metadata/Entry'
import config from '../../../config'

const TeaserLarge = ({ title = '', description, image, authors }) => (
  <View style={[styles.container, dynamicStyles().container]}>
    <Image {...image} />

    <View style={[styles.infoContainer, dynamicStyles().infoContainer]}>
      <View style={[styles.opacityView, dynamicStyles().opacityView]} />
      <View style={[styles.line, dynamicStyles().line]} />

      <Text style={[styles.title, dynamicStyles().title]}>{title.toUpperCase()}</Text>
      <PostMetadataEntry text={authors} highlight style={styles.authors} />
      <Text style={[styles.description, dynamicStyles().description]}>{description}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
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
    opacity: 0.2
  },
  line: {
    width: 80,
    height: 10
  },
  title: {
    paddingTop: 20,
    paddingBottom: 12,
    fontSize: 25,
    fontWeight: 'bold'
  },
  description: {
    paddingBottom: 12,
    fontSize: 16
  },
  authors: {
    marginTop: 0,
    marginBottom: 12
  }
})

const dynamicStyles = () => {
  const { color, font } = config.theme
  return {
    container: {
      backgroundColor: color.background.inverted,
    },
    infoContainer: {
    },
    opacityView: {
      backgroundColor: color.background.inverted,
    },
    line: {
      backgroundColor: color.background.primary
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

export default TeaserLarge
