import React from 'react';
import {View,Text,StyleSheet,ImageBackground} from "react-native";

export default class SearchScreen extends React.Component{
    render() {
        return (
            
            <View style={styles.container}>
                <Text>Search Screen</Text>
            </View>
        )
    }

}
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FFFFFF"
      }
});
