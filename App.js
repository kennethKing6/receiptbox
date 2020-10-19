import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './assets/custom-theme.json';

import ReceiptScreen from "./src/screens/ReceiptScreen/ReceiptScreen";
import PurchasesScreen from "./src/screens/ExpenseScreen/Purchases";
import StoresScreen from "./src/screens/StoresScreen/StoresScreen";
import ScanScreen from "./src/screens/ScanScreen/ScanScreen";
import SigninScreen from "./src/screens/SigninScreen/SigninScreen";
import MenuScreen from "./src/screens/MenuScreen/MenuScreen";
import ReceiptListScreen from "./src/screens/RecipesListScreen/RecipesListScreen";
import NewsListScreen from './src/screens/NewsListScreen/NewsListScreen';
import GroupsScreen from './src/screens/GroupsScreen/GroupsScreen';
import RewardsScreen from  './src/screens/RewardsScreen/RewardsScreen';
import TrackerScreen from  './src/screens/TrackerScreen/TrackerScreen';
import * as firebase from 'firebase';
import SignupScreen from "./src/screens/SignupScreen/SignupScreen";
import UserEmailScreen from "./src/screens/UserEmailScreen/UserEmailScreen";
import AppCredentialScreen from "./src/screens/AppCredentialScreen/AppCredentialScreen";
import Orientation from 'react-native-orientation';
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
    PurchasesScreen: PurchasesScreen,
    StoresScreen: StoresScreen,
    MenuScreen: MenuScreen,
    SignupScreen:SignupScreen,
    AppCredentialScreen:AppCredentialScreen,
    UserEmailScreen:UserEmailScreen,
    ReceiptListScreen:ReceiptListScreen,
    NewsListScreen:NewsListScreen,
    GroupsScreen:GroupsScreen,
    RewardsScreen:RewardsScreen,
    TrackerScreen:TrackerScreen,
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

 Orientation.getInitialOrientation();
const AppContainer = createAppContainer(StackNavigation);

function App() {
  return(
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
     <AppContainer/>
    </ApplicationProvider>
  </>
  )
}



export default App;
