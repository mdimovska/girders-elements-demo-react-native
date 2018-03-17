import React from 'react'
import { AppRegistry, Platform } from 'react-native'
import './polyfills'

import { Engine } from '@skele/classic'
import './src/elements' // register all elements in Skele

import initialState from './config/init'
import config from './config'

config.init([Platform.OS, 'native'])

const App = () => <Engine config={config} initState={initialState} />
AppRegistry.registerComponent('nativeApp', () => App)
