import React from 'react'
import { VirtualizedList } from 'react-native'

import config from '../../../config'

const MainContainer = ({ data, renderItem }) =>  (
  <VirtualizedList
    style={dynamicStyles().container}
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

const dynamicStyles = () => {
  const { color } = config.theme
  return {
    container: {
      backgroundColor: color.background.primary
    }
  }
}

export default MainContainer
