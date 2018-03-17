import React from 'react'
import { ui } from '@skele/classic'
import { MainContainer } from '../../components'

ui.register([ 'app' ], ({ element, uiFor }) => (
  <MainContainer
    data={element.get('content')}
    renderItem={({index}) => (uiFor(['content', index]))}
  />
))
