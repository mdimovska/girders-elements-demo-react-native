import config from '@skele/config'

import backend from './backend' // can be used if we read data from backend server (currently, data is read from init.json)
import theme from './theme'

export default config.define({
  backend,
  theme
})
