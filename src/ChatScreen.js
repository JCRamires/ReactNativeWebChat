import React, { Component } from 'react'
import { View, StyleSheet, Button, Text, TextInput } from 'react-native'

import { Socket } from './lib/phoenix'

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => (
    {
      title: navigation.state.params.username,
    }
  )
  
  constructor(props) {
    super(props)
    
    this.state = {
      messageToSubmit: '',
      messages: []
    }
    
    this._onChangeMessageHandler = text => this.onChangeMessage(text)
    this._onSubmitHandler = () => this.onSubmitHandler()
    
    this.socketInstance = null
    this.roomInstance = null
  }
  
  componentWillMount() {
    this.socketInstance = new Socket('ws://172.16.50.36:5000/socket', { params: { user: this.props.navigation.state.params.username } })
    this.socketInstance.connect()
    
    this.roomInstance = this.socketInstance.channel('room:lobby', {})
    this.roomInstance.join()
    
    this.roomInstance.on('message:new', message => this.appendNewMessage(message))
  }
  
  appendNewMessage(message) {
    const messages = this.state.messages
    messages.push(message)
    this.setState({ messages })
  }
  
  onChangeMessage(messageToSubmit) {
    this.setState({ messageToSubmit })
  }
  
  onSubmitHandler() {
    this.roomInstance.push("message:new", this.state.messageToSubmit)
    
    this.setState({ messageToSubmit: '' })
  }
  
  getMessageLines() {
    return this.state.messages.map((message, index) => {
      return (
        <Text key={index}>{message.body}</Text>
      )
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerMessages}>
          {this.getMessageLines()}
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.input}>
              <TextInput 
                placeholder='Type here your message'
                value={this.state.messageToSubmit}
                onChangeText={this._onChangeMessageHandler}
                onSubmitEditing={this._onSubmitHandler}
                underlineColorAndroid='transparent'
              />
            </View>
            <View style={styles.submitButton}>
              <Button
                title='Send'
                onPress={this._onSubmitHandler}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1
  },
  containerMessages: {
    flex: 1,
  },
  footer: {
    height: 50,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: 'black'
  },
  footerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  input: {
    flex: 1
  },
  submitButton: {
    width: 100
  }
})

export default ChatScreen