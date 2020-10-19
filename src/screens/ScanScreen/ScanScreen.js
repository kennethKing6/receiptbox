import React, { Component, useState,useEffect } from "react";
import { StyleSheet, View, Image, Dimensions,StatusBar,Text} from "react-native";
import CupertinoButtonPurple1 from "../../components/CupertinoButtonPurple1";
import CupertinoHeaderStatusBar from "../../components/CupertinoHeaderStatus";
import Barcode from "react-native-barcode-builder";
import CustomStatusBar from '../../components/StatusBarLayout';
import {BackgroundTaskOperation} from '../../BackgroundTask/BackgroundOpertaions';
import styles from './styles';
import * as eva from '@eva-design/eva';
import TopNavigationComponent from '../../components/TopNavigationComponent/TopNavigationComponent';
import Orientation from 'react-native-orientation';





var window = Dimensions.get('window');
// Canvas v2
// var canvas = Canvas();
// Orientation.lockToLandscape();

//Change screen orientation to Landscape



var  width = 100;
var windowWidth = window.width * 0.38;
function ScanScreen(props) {
  const [email,setEmail] = useState(null);

  Orientation.lockToLandscape();
  Orientation.getOrientation((err, orientation) => {
    console.log(`Current Device Orientation: ${orientation}`);
    Orientation.lockToLandscape();
  });


  async function getUserEmail(){

    const task = new BackgroundTaskOperation();
   const userData =  await task.getUserData();
   setEmail(JSON.parse(userData).cpanelGeneratedEmail);
  } 

  //Set user email
  getUserEmail().then().catch();
  
  return (
    <View style={styles.container} >
     <TopNavigationComponent title="Menu" onPress={()=>props.navigation.navigate("MenuScreen")} backgroundColor="#45BF55"/>
    <View style={styles.content}>
      <Text style={styles.scanBarcode}>Scan Barcode</Text>
      <Barcode value={"kennethemmail28@gmail.com"}  format="CODE128" text={"kennethemmail28@gmail.com"} width={2} height={150}   style={styles.barcode}/>

      
      </View>
    </View>
  );
}


export default ScanScreen;
