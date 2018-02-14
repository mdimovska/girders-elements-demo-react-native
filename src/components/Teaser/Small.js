import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import memoize from 'lodash.memoize'

import Image from '../Image'
import config from '../../../config'

const PADDING = 20
const screenWidth = Dimensions.get('window').width
const imageWidth = (screenWidth - 2 * PADDING) / 2
const imageRatio = 2 / 1

const TeaserSmall = ({ title, image }) => {
  const styles = createStyles(config)
  return (
    <View style={styles.container}>
      <Image {...image} width={imageWidth} height={imageWidth / imageRatio} />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const createStyles = memoize(({ theme: { color, font } }) => StyleSheet.create({
  container: {
    padding: PADDING,
    flexDirection: 'row',
    backgroundColor: color.background.primary
  },
  title: {
    flex: 1,
    paddingLeft: PADDING,
    fontSize: 15,
    fontWeight: 'bold',
    color: color.text.primary,
    fontFamily: font.family.primary
  }
}))

export default TeaserSmall
