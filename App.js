import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import ReceiptScreen from "./src/screens/ReceiptScreen/ReceiptScreen";
import Purchases from "./src/screens/ExpenseScreen/Purchases";
import Stores from "./src/screens/Stores";
import ScanScreen from "./src/screens/ScanScreen";
import SigninScreen from "./src/screens/SigninScreen";
import Menu from "./src/screens/Menu";
import * as firebase from 'firebase';
import Signup from "./src/screens/Signup";
import UserEmailScreen from "./src/screens/UserEmailScreen";

import AppCredentialScreen from "./src/screens/AppCredentialScreen";

import {BackgroundTaskOperation} from './src/BackgroundTask/BackgroundOpertaions';



//const Stack = createStackNavigator();

 // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
if(!firebase.app.length)
  firebase.initializeApp(firebaseConfig);

const StackNavigation = createStackNavigator(
  {
    SigninScreen:SigninScreen,
    ScanScreen: ScanScreen,
    ReceiptScreen: ReceiptScreen,
    Purchases: Purchases,
    Stores: Stores,
    Menu: Menu,
    Signup:Signup,
    AppCredentialScreen,
    UserEmailScreen
  },
  {
    headerMode: "none"
  }
);

async function setupApp(){
  const task = new BackgroundTaskOperation();
  const userData = await task.getUserData();
  console.log(userData)
  if(userData !== null){
   await task.fetchReceipts();
   await task.uploadReceiptOCR();
  }
}
setupApp().then().catch((err)=>{
  console.log(err);
  throw err;
})
// BackgroundTask.define(async()=>{
 
//   BackgroundTask.finish();
// })



const AppContainer = createAppContainer(StackNavigation);

function App() {
  return(
    
  <AppContainer/>
  )
}



export default App;
