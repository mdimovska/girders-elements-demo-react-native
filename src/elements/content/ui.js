import React from 'react'
import { ui } from '@skele/classic'
import { PostContent } from '../../components'

ui.register([ 'content' ], ({ element }) => (
  <PostContent text={element.get('text')} />
))
