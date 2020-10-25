import React, { Component,useState } from "react";
import { StyleSheet, View, Text,TouchableOpacity,ImageBackground } from "react-native";
import FloatingLabel  from 'react-native-floating-labels';
import CardView from 'react-native-cardview';
import { MaterialIcons } from '@expo/vector-icons'; 
import UserEmailGenerator from '../../model/UserEmailGenerator';
import styles from './styles';
// import Orientation from 'react-native-orientation';




function UserEmailScreen(props) {
  
 //Lock Screen to portrait
//  Orientation.addOrientationListener((orientation)=>{
//   if(orientation == "LANDSCAPE"){
//     Orientation.lockToPortrait();
//   }
// })

  return (
    <ImageBackground source={require("../../assets/images/getstarted.jpg")} style={styles.image}>
        <View style={styles.container}>
            <View style={{flexDirection:"row",marginTop:5}}>
             <MaterialIcons name="arrow-back" size={24} color="black" style={{flex:0.3,marginLeft:5}} onPress={()=>props.navigation.pop()}/>
              <Text style={{fontSize:20,fontWeight:"bold",color:"black",textAlign:"center",flex:6,paddingRight:20}}>Get Started</Text>
            </View>
            <CardView
                cardElevation={5}
                cardMaxElevation={10}
                cornerRadius={6}
                style={{width:"90%",backgroundColor:"white",color:"white",height:"25%",marginTop:"5%"}}>
                <Text style={{fontSize:16,color:"red",marginLeft:20,marginTop:20}} >step two</Text>
                <Text style={{fontSize:20,color:"black",marginLeft:20,marginTop:"5%"}}>Your autogenerated email address</Text>
                <Text style={{fontSize:15,marginLeft:20,marginTop:20}}>{props.navigation.state.params.email}</Text>
                <Text style={{fontSize:15,marginLeft:20,marginTop:30,color:"green",fontWeight:"700"}}>You do not need to remember this email address</Text>
          </CardView>
         
        

          <TouchableOpacity
            style={styles.continueButton}
            onPress={()=>{
              props.navigation.navigate("AppCredentialScreen",{userData:props.navigation.state.params});
            }}
          >
            <Text style={{color:"white"}}>CONTINUE</Text>
          </TouchableOpacity>
      </View>
   </ImageBackground>
  );
}

export default UserEmailScreen;
