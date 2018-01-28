import React from 'react'
import { ui } from '@girders-elements/core'
import { TeaserMedium } from '../../../components'
import { teaserProps } from '../data'

ui.register([ 'teaser', 'medium' ], ({ element }) => (
  <TeaserMedium {...teaserProps(element)} />
))
