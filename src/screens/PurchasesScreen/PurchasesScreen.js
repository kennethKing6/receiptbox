import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCardWithoutImage2 from "../../components/MaterialCardWithoutImage2";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomStatusBar from '../../components/StatusBarLayout';
import styles from './styles';


function Purchases(props) {
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
