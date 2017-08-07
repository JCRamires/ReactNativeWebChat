import React, { Component } from 'react'
import { View, StyleSheet, Button, Text, TextInput } from 'react-native'

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => (
    {
      title: navigation.state.params.username,
    }
  )
  
  constructor(props) {
    super(props)
    
    this.state = {
      messageToSubmit: ''
    }
    
    this._onChangeMessageHandler = text => this.onChangeMessage(text)
    this._onSubmitHandler = () => this.onSubmitHandler()
  }
  
  onChangeMessage(messageToSubmit) {
    this.setState({ messageToSubmit })
  }
  
  onSubmitHandler() {
    alert(this.state.messageToSubmit)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerMessages}>
          <Text>Shu</Text>
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