import React, { Component } from 'react'
import { Text, View , ImageBackground  } from 'react-native'

export default class ForgotPassword extends Component {

  static NavigationOptions={
    headerShown:true,
    headerTintColor:"#161F3D"
  }
  render() {
    return (

      <View style={{flex: 1}}>
      <ImageBackground source={require('../assets/test.jpg')} style={{height:"100%",width:"100%"}}>
      <Text style={{fontSize:15,color:"#161F3D",marginTop:300,marginLeft:170}}>Sorry For The inconvenience</Text>
        <Text> </Text>
        <Text style={{fontSize:15,color:"#161F3D",marginLeft:130}}>This Feautre Is Still Under Devolopment </Text>
        </ImageBackground>
      </View>

    )
  }
}
