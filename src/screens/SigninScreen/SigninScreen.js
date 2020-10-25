import React, { Component, useState,useEffect,useLayoutEffect } from "react";
import {
  View,
  TouchableHighlight,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,Dimensions 
} from 'react-native';
import styles from './styles';
import * as firebase from 'firebase';
import { Icon, Input } from '@ui-kitten/components';
// import Orientation from 'react-native-orientation';






import { reject } from "lodash";
const firebaseConfig = {
  apiKey: "AIzaSyAcEtdl768aeZSg31X3TxPTG5_gwlVeZ8A",
  authDomain: "receiptbox-57768.firebaseapp.com",
  databaseURL: "https://receiptbox-57768.firebaseio.com",
  projectId: "receiptbox-57768",
  storageBucket: "receiptbox-57768.appspot.com",
  messagingSenderId: "727616461900",
  appId: "1:727616461900:web:c1bdbf09ca54550111e8e9",
  measurementId: "G-8KCC6N7BS1"
};
if(firebase.app.length)
  firebase.initializeApp(firebaseConfig);



function signin(email,password){
  const promise = new Promise((resolve,reject)=>{

    firebase.auth()
  .signInWithEmailAndPassword(email + "@signin.com", password)
  .then((userCredential) => {
    const user_id = userCredential.user.uid;
    console.log('User  signed in!');
     resolve(user_id);
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      alert('That email address is invalid!');
    }

    console.log("error:",error)
    alert("Wrong password")
    reject(null);
    
  });
  })
  return promise;
} 
 


const window = Dimensions.get('window');


 


 function SigninScreen(props){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
 
  // React.useLayoutEffect(()=>{
  //   const orientationDidChange = (orientation) => {

  //      if (orientation === 'LANDSCAPE') {
  //        Orientation.lockToPortrait();
  //      }else{
  //        console.log("Kouadio");
  //      }
  //    }
  //    Orientation.addOrientationListener(orientationDidChange);
 
  //   //  return ()=> {Orientation.removeOrientationListener(orientationDidChange);Orientation.unlockAllOrientations };
 
  //  })

 

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
   
  const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline'/>
  );
  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );
  

  return (
    
<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView style={styles.container}>
          <View>
            <Text style={[styles.title]}>Sign in</Text>
            <Input
                placeholder='Enter your email'
                value={email}
                onChangeText={email => setEmail(email)}
              />
            <Input
              value={password}
              label='Password'
              placeholder='Enter password'
              caption='Should contain at least 6 symbols'
              accessoryRight={renderIcon}
              captionIcon={AlertIcon}
              secureTextEntry={secureTextEntry}
              onChangeText={text => setPassword(text)}
            />
            <View style={[styles.logContainer]}>
              <TouchableHighlight
                style={styles.loginContainer}
                onPress={() =>{
                  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(password.length >= 6){
              //  signin(email,password);

               signin(email,password).then((user_id)=>{
                  // navigation.navigate("ReceiptScreen");         
                
               }).catch((err)=>{
                 console.log("The error is: " + err.message);
                 throw err;
               }) ;
           
             
            }else{
              alert("Please enter a valid email or 6 character password or more");
            
            }
            // props.navigation.navigate("ScanScreen");
  
                } }
              >
                <Text style={styles.logTxt}>Log in</Text>
              </TouchableHighlight>
              <Text style={styles.orTxt}>OR</Text>
              <TouchableHighlight
                style={[styles.facebookContainer]}
                onPress={() => props.navigation.navigate("SignupScreen")}
              >
                <Text style={styles.facebookTxt}>Sign up</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
  );
}



export default SigninScreen;
