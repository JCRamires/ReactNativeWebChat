import React, { PureComponent } from 'react'
import { View, StyleSheet, Image, TextInput } from 'react-native'
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
      <View style={styles.container}>
        <Image source={PinguSplashImage} style={styles.image} resizeMode='contain' />
        <View>
          <TextInput
            placeholder='Choose your username'
            value={this.state.username}
            onChangeText={this._onChangeUsernameHandler}
            onSubmitEditing={this._onSubmitHandler}
            style={{ width: 150 }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default PinguSplash