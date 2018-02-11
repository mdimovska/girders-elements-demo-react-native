import React from 'react'
import { Platform } from 'react-native'
import './polyfills'

import { Engine } from '@girders-elements/core'
import './src/elements' // register all elements in Girders Elements

import initialState from './config/init'
import config from './config'

config.init([Platform.OS, 'native'])

const App = () => <Engine config={config} initState={initialState} />
export default App
