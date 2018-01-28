import React from 'react'
import { ui } from '@girders-elements/core'
import { PostHeader } from '../../components'
import { postMetadata } from './data'

const toPostMetadataComponent = (postMetadata, index) => (
  <PostHeader.Metadata.Entry
    key={index}
    {...postMetadata}
  />
)

ui.register([ 'header' ], ({ element }) => (
  <PostHeader>
    <PostHeader.Title title={element.get('title')} />

    <PostHeader.Metadata>
      {postMetadata(element).map(toPostMetadataComponent)}
    </PostHeader.Metadata>
  </PostHeader>
))
