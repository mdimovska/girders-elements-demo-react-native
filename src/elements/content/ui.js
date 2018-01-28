import React from 'react'
import { ui } from '@girders-elements/core'
import { PostContent } from '../../components'

ui.register([ 'content' ], ({ element }) => (
  <PostContent text={element.get('text')} />
))
