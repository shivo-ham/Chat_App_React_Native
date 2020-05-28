import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity, LayoutAnimation} from "react-native";
import * as firebase from 'firebase';
export default class MessageScreen extends React.Component {

    static navigationOptions = {
        header:null
    };

    state={
        email:"",
        displayName:"",
 
    }

    componentDidMount() {
        const {email,displayName} = firebase.auth().currentUser;
        this.setState({ email,displayName});
    }

    signOutUser= () => {
        firebase.auth().signOut();
    }
    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            
            <View>
            <View style={styles.container}>
                <Text> Hi {this.state.displayName} ! </Text>
                <Text> </Text>
                <Text> You Have Logined With email as "{this.state.email}"" </Text>
                <Text> </Text>

            
            </View>

            <View >
            <TouchableOpacity style={{marginTop:50,marginLeft:220}} onPress={this.signOutUser} >
                <Text style={{color:"#161F3D"}}> Log Out </Text>
            </TouchableOpacity>

            </View>

            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:150

    },

});