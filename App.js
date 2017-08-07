import React from 'react'
import { StackNavigator } from 'react-navigation'

import PinguSplash from './src/PinguSplash'
import Main from './src/Main'

const App = StackNavigator(
  {
    Home: { screen: PinguSplash },
    Main: { screen: Main }
  }, {
    navigationOptions: {
      header: null
    }
  })

export default App