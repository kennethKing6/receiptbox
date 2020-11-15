import React, { useState } from "react";
// import { createStackNavigator } from "@react-navigation/stack";


//V5
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




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
import NewsListScreen from './src/screens/NewsScreen/NewsListScreen/NewsListScreen';
import GroupsScreen from './src/screens/GroupsScreens/GroupsScreen/GroupsScreen';
import RewardsScreen from  './src/screens/RewardsScreen/RewardsScreen';
import TrackerScreen from  './src/screens/TrackerScreen/TrackerScreen';
import SignupScreen from "./src/screens/SignupScreen/SignupScreen";
import UserEmailScreen from "./src/screens/UserEmailScreen/UserEmailScreen";
import AppCredentialScreen from "./src/screens/AppCredentialScreen/AppCredentialScreen";
import DetailsNewsScreen from './src/screens/NewsScreen/DetailsScreen/DetailsNewsScreen'; 
// import Orientation from 'react-native-orientation';
import {BackgroundTaskOperation} from './src/BackgroundTask/BackgroundOpertaions';
import * as firebase from 'firebase';
import GroupsIcon from 'react-native-vector-icons/MaterialIcons';
import NewspaperIcon from 'react-native-vector-icons/FontAwesome';
import BoxIcon from 'react-native-vector-icons/FontAwesome';





//Initializing Your firebase
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

  /**
   * Components
   * */
const CredentialsStackNavigator = createStackNavigator();

function AppCredentialsScreensStackNavigator(){
  return (
    <CredentialsStackNavigator.Navigator headerMode="none">
      <CredentialsStackNavigator.Screen  name="SigninScreen" component={SigninScreen}/>
      <CredentialsStackNavigator.Screen  name="SignupScreen" component={SignupScreen}/>
      <CredentialsStackNavigator.Screen  name="AppCredentialScreen" component={AppCredentialScreen}/>
      <CredentialsStackNavigator.Screen  name="UserEmailScreen" component={UserEmailScreen}/>

     </CredentialsStackNavigator.Navigator>


  )
}




const MenuStackNavigator = createStackNavigator();

function MenuScreensStackNavigator(){
  return (
    <MenuStackNavigator.Navigator headerMode="none">
      <MenuStackNavigator.Screen name="ScanScreen" component={ScanScreen} />
      <MenuStackNavigator.Screen name="MenuScreen" component={MenuScreen} />
      <MenuStackNavigator.Screen name="StoresScreen" component={StoresScreen} />
      <MenuStackNavigator.Screen name="ReceiptListScreen" component={ReceiptListScreen} />
      <MenuStackNavigator.Screen name="RewardsScreen" component={RewardsScreen} />

      <MenuStackNavigator.Screen name="ReceiptScreen" component={ReceiptScreen} />

      <MenuStackNavigator.Screen name="TrackerScreen" component={TrackerScreen} />

      <MenuStackNavigator.Screen name="PurchasesScreen" component={PurchasesScreen} />

    </MenuStackNavigator.Navigator>
  );
}




const NewsListStackNavigator = createStackNavigator();

function NewsListScreensStackNavigator(){
  return (
    <NewsListStackNavigator.Navigator headerMode="none">
      <NewsListStackNavigator.Screen  name="NewsListScreen" component={NewsListScreen}/>
      <NewsListStackNavigator.Screen  name="DetailsNewsScreen" component={DetailsNewsScreen}/>

      
     </NewsListStackNavigator.Navigator>


  )
}








const GroupsStackNavigator = createStackNavigator();

function GroupsScreensStackNavigator(){
  return (
    <GroupsStackNavigator.Navigator headerMode="none">
      <GroupsStackNavigator.Screen  name="GroupsScreen" component={GroupsScreen}/>
     </GroupsStackNavigator.Navigator>
  )
}


const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        activeTintColor: '#06FF44',
      }}>
      <Tab.Screen name="ReceiptBox" component={MenuScreensStackNavigator} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <BoxIcon name="inbox" size={size} color={color}/>
          ),
        }}
      />
      <Tab.Screen name="News" component={NewsListScreensStackNavigator} 
          options={{
          tabBarIcon: ({ color, size }) => (
            <NewspaperIcon name="newspaper-o" size={size} color={color}/>
          ),
        }}
      />
      <Tab.Screen name="Groups" component={GroupsScreensStackNavigator} 
          options={{
          tabBarIcon: ({ color, size }) => (
            <GroupsIcon name="people-outline" size={size} color={color}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}


function GetScreens(){
  const [isSignedIn,setIsSignedIn] = useState(true);
 
  firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        setIsSignedIn(true);
      }else{
        setIsSignedIn(false);

      }
    })
  
  
  
    if(isSignedIn){
      return(<BottomNavigator />)
  
    }else{
    return(<AppCredentialsScreensStackNavigator/>)
    }
  
}

function App() {

  return(
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer>
        {
           firebase.auth().currentUser? <BottomNavigator/>:<GetScreens/>

        }

      </NavigationContainer>
    </ApplicationProvider>
      </>
  )
}



export default App;


