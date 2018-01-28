import React, { Fragment } from 'react'
import { StyleSheet, Text } from 'react-native'

import BasicImage from '../BasicImage'
import config from '../../../config'

const Image = ({ src, credit, ...props }) => (
  <Fragment>
    <BasicImage src={src} {...props} />
    {credit && <Text style={[styles.credit, dynamicStyles().credit]}>{`Photo: ${credit}`}</Text>}
  </Fragment>
)

const styles = StyleSheet.create({
  credit: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: 14
  }
})

const dynamicStyles = () => {
  const { color, font } = config.theme
  return {
    credit: {
      color: color.shades.medium,
      fontFamily: font.family.secondary,
    }
  }
}

export default Image
