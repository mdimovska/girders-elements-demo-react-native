import React from 'react'
import { StyleSheet, VirtualizedList } from 'react-native'
import memoize from 'lodash.memoize'

import config from '../../../config'

const MainContainer = ({ data, renderItem }) =>  (
  <VirtualizedList
    style={createStyles(config).container}
    data={data}
    renderItem={renderItem}
    getItem={(items, index) => items.get(index)}
    getItemCount={items => items.size || 0}
    keyExtractor={keyExtractor}
  />
)

const keyExtractor = (item, index) => {
  const kind = item.get('kind')
  const kindString = typeof kind === 'string' ? kind : kind.toJS()
  return `key-${index}-${kindString}`
}

const createStyles = memoize(({ theme: { color } }) => StyleSheet.create({
  container: {
    backgroundColor: color.background.primary
  }
}))

export default MainContainer
