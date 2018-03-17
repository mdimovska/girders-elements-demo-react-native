import React from 'react'
import { ui } from '@skele/classic'
import { Button } from '../../components'
import { loadNewContent } from '../app/effects'

ui.register([ 'button' ], ({ element, dispatch }) => (
  <Button
    text={element.get('text')}
    onClick={() => dispatch(loadNewContent(element.get('content')))}
  />
))
