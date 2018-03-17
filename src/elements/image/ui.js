import React from 'react'
import { ui } from '@skele/classic'
import { Image } from '../../components'

ui.register([ 'image' ], ({ element }) => (
  <Image
    src={element.get('src')}
    credit={element.get('credit')}
  />
))
