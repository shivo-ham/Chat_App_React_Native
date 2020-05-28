import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image, ImageBackground,StatusBar} from "react-native";
import * as firebase from 'firebase'
import {MaterialCommunityIcons } from "react-native-vector-icons"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class LoginScreen extends React.Component {

    static navigationOptions = {
        headerShown:true,
        headerTintColor:"#161F3D"
};


    state={
        email:"",
        password:"",
        errorMessage: null
    };

    handleLogin = () => {
        firebase.auth()
        .signInWithEmailAndPassword(this.state.email,this.state.password)
        .catch(error=>this.setState({errorMessage: error.message}));
    }



    render() {
        return (

            <View style={styles.container}>
              <StatusBar barStyle="light-content" backgroundColor="#161F3D" animated={true}></StatusBar>
                 
                 <ImageBackground source={require('../assets/test.jpg')} style={{height:"100%",width:"100%"}}>
                 <KeyboardAwareScrollView>
                <Image source={require('../assets/logo.png')} style={styles.img_login}>
            </Image>

            

            <View style={styles.errorMessage}>
                {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
            </View>

            <View style={styles.form}>
                <View>
                   
                    <TextInput style={styles.input} 
                    placeholder="Email ID"
                    autoCapitalize="none" 
                    underlineColorAndroid="transparent"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    >

                    </TextInput>
                </View>

                <View style={{marginTop:32}}>
                    
                    <TextInput style={styles.input} 
                     placeholder="Password"
                     secureTextEntry
                     accessibilityHint="Enter A Password"
                     autoCapitalize="none"
                     onChangeText={password => this.setState({ password })}
                     value={this.state.password}
                     >

                     </TextInput>     
                </View>

                <View style={{marginTop:-10,marginLeft:210}}>

                 <TouchableOpacity style={{ alignSelf:"center",marginTop:50}} onPress={() => this.props.navigation.navigate("Forgot")} >
                <Text style={{color:"#161F3D",fontWeight:"500"}}>Forgot Password ? <Text style={{fontWeight:"500",color:"#E9446A"}}>Click Here</Text> </Text>
               </TouchableOpacity>

            </View>

            </View>

            <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                <Text style={{color:"#FFF",fontWeight:"500"}}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf:"center",marginTop:50}} onPress={() => this.props.navigation.navigate("Register")}>
                <Text style={{color:"#161F3D",fontSize:13, height:23,borderRadius:20,backgroundColor:"#FFF",fontWeight:"800"}}>New To Terno? <Text style={{fontWeight:"500",color:"#000",fontWeight:"800"}}>Sign Up</Text></Text>
            </TouchableOpacity>

           

         </KeyboardAwareScrollView>
            </ImageBackground>

         </View>

            
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#FFF",
        
    },
    errorMessage:{
        height:72,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30,
        
    },
    error:{
        color:"#E9446A",
        fontSize:13,
        fontWeight:"600",
        textAlign:"center"
    },
    form:{
        marginBottom:60,
        marginHorizontal:30,
    },
    inputTitle:{
        color:"#161F3D",
        fontSize:10,
        textTransform:"uppercase"
    },
    input:{
        
        height:40,
        fontSize:15,
        borderColor:"#BAB7C3",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius:10,
        paddingHorizontal:16,
        color:"#514E5A",
        fontWeight:"600"
     },
    button:{
        marginHorizontal:110,
        marginTop:-20,
        backgroundColor:"#161F3D",
        borderRadius:4,
        height:52,
        alignItems:"center",
        justifyContent:"center",
        borderTopEndRadius:10,
        borderBottomEndRadius:10,
        borderTopStartRadius:10,
        borderBottomStartRadius:10
        
    },
    img_login:{
        height:140,
        width:200,
        marginTop:50,
        alignSelf:"center"

    },
});
