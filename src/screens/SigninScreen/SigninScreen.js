import React, { Component, useState } from "react";
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
import MaterialUnderlineTextbox from "../../components/MaterialUnderlineTextbox";
import MaterialRightIconTextbox from "../../components/MaterialRightIconTextbox";
import CupertinoButtonPurple from "../../components/CupertinoButtonPurple";
import * as firebase from 'firebase';


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

    alert(error);
    console.log("the error is " + error.message);
    reject(null);
    throw error;
  });
  })
  return promise;
} 
 


const window = Dimensions.get('window');




 function SigninScreen({navigation}){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  
  

  return (
<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <NavBar title="Sign in" />
        <ScrollView style={styles.container}>
          <View>
            <Text style={styles.title}>Sign in</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="username"
                onChangeText={text => setEmail(text)}
                value={email}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                value={password}
              />
            </View>
            <View style={styles.logContainer}>
              <TouchableHighlight
                style={styles.loginContainer}
                onPress={() =>{
                  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(re.test(String(email).toLowerCase()) && password.length >= 6){
              //  signin(email,password);

               signin(email,password).then((user_id)=>{
                  navigation.navigate("ReceiptScreen");         
                
               }).catch((err)=>{
                 console.log("The error is: " + err.message);
                 throw err;
               }) ;
           
             
            }else{
              alert("Please enter a valid email or 6 character password or more");
            
            }
  
                } }
              >
                <Text style={styles.logTxt}>Log in</Text>
              </TouchableHighlight>
              <Text style={styles.orTxt}>OR</Text>
              <TouchableHighlight
                style={styles.facebookContainer}
                onPress={() => this.onPressFacebookButton()}
              >
                <Text style={styles.facebookTxt}>Facebook Login</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
  );
}



export default SigninScreen;
