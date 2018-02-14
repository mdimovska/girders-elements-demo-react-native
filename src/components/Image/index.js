import React, { Fragment } from 'react'
import { StyleSheet, Text } from 'react-native'
import memoize from 'lodash.memoize'

import BasicImage from '../BasicImage'
import config from '../../../config'

const Image = ({ src, credit, ...props }) => (
  <Fragment>
    <BasicImage src={src} {...props} />
    {credit && <Text style={createStyles(config).credit}>{`Photo: ${credit}`}</Text>}
  </Fragment>
)

const createStyles = memoize(({ theme: { color, font } }) => StyleSheet.create({
  credit: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: 14,
    color: color.shades.medium,
    fontFamily: font.family.secondary
  }
}))

export default Image
