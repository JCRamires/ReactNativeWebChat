import React from 'react'
import { StackNavigator } from 'react-navigation'

import ChatScreen from './ChatScreen'

const Main = StackNavigator(
  {
    Home: { screen: ChatScreen }
  },
  {
    navigationOptions: {
      header: null
    }
  }
)

export default Main