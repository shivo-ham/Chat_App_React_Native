import React from 'react';
import {View,Text,StyleSheet,ActivityIndicator,StatusBar} from "react-native";
import * as firebase from 'firebase';
export default class LoadingScreen extends React.Component {

    static navigationOptions = {
        headerShown:false
    };

    componentDidMount(){
       firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
       });
    }
    render() {
        return (
               
            <View style={styles.container}>

            <StatusBar barStyle="light-content" backgroundColor="#161F3D">
                    
                    </StatusBar>    
                <Text>Loading...</Text>
                <Text>          </Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});