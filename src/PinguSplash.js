import React, { PureComponent } from 'react'
import { View, KeyboardAvoidingView, StyleSheet, Image, TextInput } from 'react-native'
import PinguSplashImage from './img/pingusplash-small.png'

import { NavigationActions } from 'react-navigation'

class PinguSplash extends PureComponent {
  static navigationOptions = {
    header: null
  }
  
  constructor(props) {
    super(props)
    
    this.state = { username: '' }
    
    this._onChangeUsernameHandler = text => this.onChangeUsernameHandler(text)
    this._onSubmitHandler = () => this.onSubmit()
  }
  
  onChangeUsernameHandler(text) {
    this.setState({ username: text })
  }
  
  onSubmit() {
    const navigationDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Main', params: { username: this.state.username } })]
    })
    
    this.props.navigation.dispatch(navigationDispatch)
  }
  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Image source={PinguSplashImage} style={styles.image} resizeMode='contain' />
        <View style={{ marginTop: 10, borderWidth: 1, borderColor: 'black' }}>
          <TextInput
            placeholder='Choose your username'
            value={this.state.username}
            onChangeText={this._onChangeUsernameHandler}
            onSubmitEditing={this._onSubmitHandler}
            style={{ width: 200 }}
            underlineColorAndroid='transparent'
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fbff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default PinguSplash