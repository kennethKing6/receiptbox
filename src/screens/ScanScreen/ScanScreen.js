import React, { Component, useState } from "react";
import { StyleSheet, View, Image, Text, Dimensions,StatusBar} from "react-native";
import CupertinoButtonPurple1 from "../../components/CupertinoButtonPurple1";
import CupertinoHeaderStatusBar from "../../components/CupertinoHeaderStatus";
import Barcode from "react-native-barcode-builder";
import CustomStatusBar from '../../components/StatusBarLayout';
import {BackgroundTaskOperation} from '../../BackgroundTask/BackgroundOpertaions';
import styles from './styles';



var window = Dimensions.get('window');
// Canvas v2
// var canvas = Canvas();

var  width = 100;
var windowWidth = window.width * 0.38;
function ScanScreen(props) {
  const [email,setEmail] = useState(null);

  async function getUserEmail(){
    const task = new BackgroundTaskOperation();
   const userData =  await task.getUserData();
   setEmail(JSON.parse(userData).cpanelGeneratedEmail);
  } 

  //Set user email
  getUserEmail().then().catch();
  return (
    <View style={styles.container}>
    <CustomStatusBar onPress={props} header={"Scan"}/>

    <View style={styles.content}>
      <Text style={styles.scanBarcode}>Scan Barcode</Text>
      <Barcode value={email}  format="CODE128" text={email} width={1}   marginTop={styles.barcode.marginTop}/>

      <CupertinoButtonPurple1
      onPress={()=>props.navigation.navigate("Menu")}
        style={styles.cupertinoButtonPurple1}
      ></CupertinoButtonPurple1>
      </View>
    </View>
  );
}


export default ScanScreen;
