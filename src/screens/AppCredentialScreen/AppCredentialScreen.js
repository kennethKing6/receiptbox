import React, { Component,useState } from "react";
import { StyleSheet, View, Text,TouchableOpacity,ImageBackground } from "react-native";
import FloatingLabel  from 'react-native-floating-labels';
import CardView from 'react-native-cardview';
import { MaterialIcons } from '@expo/vector-icons'; 
import * as firebase from 'firebase';
import {UserData} from '../../model/UserData';
import {LocalStorageKeys} from '../../BackgroundTask/LocalStorageConstantsKeys';
// import Orientation from 'react-native-orientation';


import styles from './styles';



function AppCredentialScreen(props) {
  const [username,setusername] = useState('');
  const [password,setpassword] = useState('');
  const [userId,setUserId] = useState('');
  const [fn,setfn] = useState(props.navigation.state.params.userData.firstname);
  const [ln,setln] = useState(props.navigation.state.params.userData.lastname);
  const [dateOfBirth,setdateOfBirth] = useState(props.navigation.state.params.userData.dateOfBirth);
  const [generatedEmail,setGeneratedEmail] = useState(props.navigation.state.params.userData.email);
  const [generatedPassword,setGeneratedPassword] = useState(props.navigation.state.params.userData.password);


 //Lock Screen to portrait
//  Orientation.addOrientationListener((orientation)=>{
//   if(orientation == "LANDSCAPE"){
//     Orientation.lockToPortrait();
//   }
// })

  function createMailbox(generatedEmail,generatedPassword){
    const url = "http://getreceipts.getreceiptbox.com/createEmail/cpemail.php?user_email_name=" + generatedEmail + "&user_email_password=" + generatedPassword;
    console.log(url) 
    const promise = new Promise((resolve,reject)=>{
      fetch(url)
      .then((resp)=>{
     return resp.json();
    }).then((json)=>{
      console.log('parsed json', json)
  
      resolve(json);
    }).catch((err)=>{
      console.log('parsing failed', err)
  
      reject("error -1")
      throw err;
    })
  
    })
   return promise;
  }
  
  function signup(userAccountEmail,userAccountPassword){
    
  
      return firebase.auth()
    .createUserWithEmailAndPassword(userAccountEmail, userAccountPassword)
    .then((UserCredential) => {
      setUserId(UserCredential.uid);
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });

  }
async function uploadUserData(userData){

  //Store user information locally
  const localUserData = JSON.stringify(userData);
  const task = new BackgroundTaskOperation();
  await task.storeDataLocally(LocalStorageKeys.userdataKey,localUserData);

  //Load info to firebase database
    const userId = firebase.auth().currentUser.uid;
    var ref = firebase.database().ref(userId + "/"+LocalStorageKeys.userdataKey);
    return ref.set(userData).then(()=>{
        console.log("succeeded")
        }).catch((err)=>{
          console.log(err)
          throw err;
        })
  
}

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
                <Text style={{fontSize:16,color:"red",marginLeft:20,marginTop:20}} >Almost done!</Text>
                <Text style={{fontSize:20,color:"black",marginLeft:20,marginTop:"5%"}}>Your receiptbox username and password</Text>
                <Text style={{fontSize:15,marginLeft:20,marginTop:20}}>Use this information to sign in </Text>
              
          </CardView>
          <FloatingLabel 
                  labelStyle={styles.labelInput}
                  style={styles.formInput}
                  onChangeText={(username)=>setusername(username)}
                >username
          </FloatingLabel>
          <FloatingLabel 
                  labelStyle={styles.labelInput}
                  style={styles.formInput}
                  onChangeText={(password)=>setpassword(password)}
                >password
          </FloatingLabel>
          

          <TouchableOpacity
            style={styles.continueButton}
            onPress={()=>{
                if(password.length < 6){
                  alert("6 length password is required");
                  return;
                }
                console.log("generated email: " + fn);
                console.log("generated password: " + dateOfBirth);
                createMailbox(generatedEmail,generatedPassword)
                .then((response)=>{
                    console.log("cpanel addpop response: ",response);
                    console.log("\n");
                    return response;
                }).then((json)=>{
                    return signup(username + "@signin.com",password)
                }).then(()=>{
                    return uploadUserData(new UserData(fn,ln,dateOfBirth,username + "@signin.com",password,generatedEmail,generatedPassword))
                }).then(()=>{
                  props.navigation.navigate("Menu",{email:generatedEmail,generatedPassword:generatedPassword});

                }
                ).catch((err)=>{
                    console.log("error",err);
                    alert("Sign up failed, try again later!")
                })


            }}
          >
            <Text style={{color:"white"}}>Sign Up</Text>
          </TouchableOpacity>
      </View>
   </ImageBackground>
  );
}



export default AppCredentialScreen;
