import React, { PureComponent } from 'react'

import { View, StyleSheet, Text } from 'react-native'

class Message extends PureComponent {
  render() {
    return (
      <View
        style={
          { 
            minHeight: 50,
            backgroundColor: this.props.username === this.props.messageUsername ? '#effdde' : 'white',
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            padding: 10,
            borderRadius: 10
          }
        }
      >
        <View>
          <Text style={{ fontWeight: 'bold' }}>
            {this.props.messageUsername}
          </Text>
        </View>
        <View>
          <Text>{this.props.messageContent}</Text>
        </View>
      </View>
    )
  }
}

export default Message