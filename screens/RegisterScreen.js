import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground,StatusBar} from "react-native";
import * as firebase from 'firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default class RegisterScreen extends React.Component {

    static navigationOptions = {
        headerShown:true,
        headerColor:"#161F3D"
    };

    state={
        name:"",
        email:"",
        password:"",
        errorMessage: null
    };

    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName:this.state.name

            });
        })
        .catch(error => this.setState({errorMessage : error.message}));
    };
    

    render() {
        return (

            <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#161F3D" animated={true}></StatusBar>
        <ImageBackground source={require('../assets/test.jpg')} style={{height:"100%",width:"100%"}}>

        <KeyboardAwareScrollView>

            

                <TouchableOpacity style={styles.avatar}>
                    <Text style={{alignSelf:"center",color:"#161F3D",marginTop:58,fontSize:15,fontWeight:"bold"}}>Add Photo</Text>
                    
                </TouchableOpacity>
                
                <Image source={require("../assets/logo.png")} style={{height:140,width:200,marginLeft:200,marginTop:-135}}></Image>
                
            <View style={styles.errorMessage}>
                {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
            </View>

            <View style={styles.form}>

            

            <View style={{marginTop:32}}>
                  
                 <TextInput style={styles.input} 
                    placeholder="Name"
                    autoCapitalize="none" 
                    underlineColorAndroid="transparent"
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}>
                </TextInput>
            </View>    


            <View style={{marginTop:32}}>
                   
                 <TextInput style={styles.input} 
                 placeholder="Email ID"
                    autoCapitalize="none" 
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}>
                </TextInput>
            </View>

                <View style={{marginTop:32}}>
                    
                    <TextInput style={styles.input} 
                     placeholder="Password"
                     secureTextEntry
                     autoCapitalize="none"
                     maxLength={20}
                     
                     onChangeText={password => this.setState({ password })}
                     value={this.state.password}
                     >

                     </TextInput>
                </View>

                


            </View>

            <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                <Text style={{color:"#FFF",fontWeight:"500"}}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf:"center",marginTop:32}}
             onPress={() => 
             this.props.navigation.navigate("Login")}
             >
                <Text 
                style={{color:"#414959",fontSize:13,marginTop:30,fontWeight:"800",height:23,borderRadius:20,backgroundColor:"#FFF"}}>
                    Already Have An Account ? 
                <Text 
                
                style={{fontWeight:"800",color:"#000",textDecorationStyle:"solid"}}>  Sign In</Text></Text>
                
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
        backgroundColor:"#FFF"
    },
    greeting:{
        marginTop:70,
        fontSize:18,
        fontWeight:"500",
        textAlign:"center",
        textDecorationStyle:"solid",
        color:"#161F3D",
        borderStyle:"solid",
        
        
    },
    errorMessage:{
        height:72,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30
    },
    error:{
        color:"#E9446A",
        fontSize:13,
        fontWeight:"600",
        textAlign:"center"
    },
    form:{

        marginTop:-50,
        marginBottom:50,
        marginHorizontal:40,    
    },

    input:{
        alignItems:"center",
        marginTop:10,
        height:40,
        fontSize:15,
        borderColor:"#BAB7C3",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius:13,
        paddingHorizontal:16,
        color:"#514E5A",
        fontWeight:"600"
      },
    button:{
        marginHorizontal:100,
        backgroundColor:"#161F3D",
        borderRadius:4,
        height:52,
        alignItems:"center",
        justifyContent:"center",
        borderTopEndRadius:10,
        borderBottomEndRadius:10,
        borderTopStartRadius:10,
        borderBottomStartRadius:10,
       
        
    },

    avatar:{
        width:130,
        height:130,
        borderRadius:45,
        backgroundColor:"#E1E2E6",
        alignContent:"center",
        marginLeft:60,
        marginTop:50,
        

        
    } 
 
    
});
