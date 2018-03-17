import React from 'react'
import { ui } from '@skele/classic'
import { TeaserSmall } from '../../../components'
import { teaserProps } from '../data'

ui.register([ 'teaser', 'small' ], ({ element }) => (
  <TeaserSmall {...teaserProps(element)} />
))
