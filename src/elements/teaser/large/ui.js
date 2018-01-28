import React from 'react'
import { ui } from '@girders-elements/core'
import { TeaserLarge } from '../../../components'
import { teaserProps } from '../data'

ui.register([ 'teaser', 'large' ], ({ element }) => (
  <TeaserLarge {...teaserProps(element)} />
))
