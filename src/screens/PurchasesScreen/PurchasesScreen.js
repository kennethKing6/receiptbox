import React, { Component,useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCardWithoutImage2 from "../../components/MaterialCardWithoutImage2";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomStatusBar from '../../components/StatusBarLayout';
import styles from './styles';
// import Orientation from 'react-native-orientation';



function Purchases(props) {
  //Lock Screen to portrait
//  useEffect(() => {
//   const orientation = Orientation.addOrientationListener((orientation)=>{
//     if(orientation == "LANDSCAPE"){
//       Orientation.lockToPortrait();
//     }
//   })

//   // If you want to implement componentWillUnmount,
//   // return a function from here, and React will call
//   // it prior to unmounting.
//   return () => orientation;
// })
//  
 return (
    <View style={styles.container}>
    <CustomStatusBar onPress={props}  header={"Receipt List"} />
          <MaterialCardWithoutImage2 style={styles.listItem} onPress={()=>props.navigation.navigate("ReceiptScreen")}/>
          <MaterialCardWithoutImage2 style={styles.listItem} onPress={()=>props.navigation.navigate("ReceiptScreen")}/>
          <MaterialCardWithoutImage2 style={styles.listItem} onPress={()=>props.navigation.navigate("ReceiptScreen")}/>
          <MaterialCardWithoutImage2 style={styles.listItem} onPress={()=>props.navigation.navigate("ReceiptScreen")}/>
         
      
      
    </View>
  );
}


export default Purchases;
