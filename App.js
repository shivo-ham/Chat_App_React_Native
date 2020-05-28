import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/Ionicons"
import {createAppContainer,createSwitchNavigator} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from "react-navigation-stack";
import ForgotScreen from "./screens/ForgotScreen";
import SearchScreen from "./screens/SearchScreen";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MessageScreen from "./screens/MessageScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NotificationScreen from "./screens/NotificationScreen";
import * as firebase from "firebase";

var firebaseConfig = {
  .....
};
// Initialize Firebase
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


const   AppTabNavigator = createBottomTabNavigator({

  Profile:{
    screen:ProfileScreen,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (<Icon name="account" size={25} color={tintColor}/>),
    }
  },
  
  Message:{
    screen:MessageScreen,
    navigationOptions:{
      tabBarIcon:({ tintColor}) => (<Icons name="ios-send" size={25} color={tintColor} />),
    }
  },
  Search:{
    screen:SearchScreen,
    navigationOptions:{
      tabBarIcon:({ tintColor}) => (<Icons name="md-search" size={25} color={tintColor} />),
    }
  },
  Notification:{
    screen:NotificationScreen,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (<Icon name="firebase" size={25} color={tintColor} style={{}} />),
      
    }
  },
 
},
{
  tabBarOptions:{
    activeTintColor: '#448AFF',
    inactiveTintColor:"#514E5A",
    showLabel:true,
    style:{height:55},
    tabBarPosition:"bottom",
    swipeEnabled:true,
  }
}
)
;

const AuthStack = createStackNavigator({
  Login:LoginScreen,
  Register:RegisterScreen,
  Forgot:ForgotScreen,
  
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading:LoadingScreen,
      App:AppTabNavigator,
      Auth:AuthStack
    },
    {
      initialRouteName:"Loading",
    }
  )
);
