import { effect } from '@girders-elements/core'
import { fromJS, List } from 'immutable'

import contentFor2ndPage from '../../../config/content-for-2nd-page'
import initialContent from '../../../config/content'

const actionTypes = {
  LOAD_NEW_CONTENT: '.LOAD_NEW_CONTENT'
}

// global effect - action can be dispatched from the app element or any of its children
effect.register([ 'app' ], actionTypes.LOAD_NEW_CONTENT, (context, action) => {
  const newContent = (action.content === 'content-for-2nd-page.json') ? contentFor2ndPage : initialContent
  return (el) => el.set('content', fromJS(newContent))
})

const loadNewContent = (content) => ({
  type: actionTypes.LOAD_NEW_CONTENT,
  content
})

export {
  loadNewContent
}
