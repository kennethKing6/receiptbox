import React, { Component, useState,useEffect,useLayoutEffect } from "react";
import { StyleSheet, View, Text,Image,ScrollView } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomStatusBar from '../../components/StatusBarLayout'
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from './styles';
// import Orientation from 'react-native-orientation';
import ScreenOrientation, { PORTRAIT, LANDSCAPE } from "react-native-orientation-locker/ScreenOrientation";




function Menu(props) {
  

  return (
    <View style={styles.container}>
   
   <ScreenOrientation
        orientation={PORTRAIT}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation => console.log('onDeviceChange', orientation)}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}
      alwaysBounceVertical={true}>
      <View style={styles.rowMenu}>
              
              <View style={[styles.rowMenuItems]} >
                  <TouchableOpacity onPress={()=>props.navigation.navigate("ScanScreen")}>
                  <Image source={require("../../assets/icons/qr-code.png")} style={[styles.icon,{width:"60%",height:"60%"}]} resizeMode="contain"/>
                 
                    <Text style={styles.menuText}>Scan now</Text>
                  </TouchableOpacity>
                </View>
      
       

          <View  style={[styles.rowMenuItems,{backgroundColor:"#F24130"}]}>
                  <TouchableOpacity onPress={()=>props.navigation.navigate("RewardsScreen")}>
                  <Image source={require("../../assets/icons/reward-card.png")} style={[styles.icon,{width:"60%",height:"60%"}]} resizeMode="contain"/>
                      <Text style={styles.menuText}>Rewards</Text>
                  </TouchableOpacity>
          </View>
    </View>
  
  <View style={styles.rowMenu} >
        <View  style={[styles.rowMenuItems,{backgroundColor:"#D98E04"}]}>
                   <TouchableOpacity onPress={()=>props.navigation.navigate("ProfileScreen")}>
                   <Image source={require("../../assets/icons/old-man.png")} style={[styles.icon,{width:"60%",height:"60%"}]} resizeMode="contain"/>

                      <Text style={styles.menuText}>Profiles</Text>
                   </TouchableOpacity>
          </View>    
        <View  style={[styles.rowMenuItems,{backgroundColor:"#BFA004"}]}>
                   <TouchableOpacity onPress={()=>props.navigation.navigate("StoresScreen")}>
                   <Image source={require("../../assets/icons/store.png")} style={[styles.icon,{width:"60%",height:"60%"}]} resizeMode="contain"/>

                    <Text style={styles.menuText}>Stores</Text>
                   </TouchableOpacity>
          </View>
  </View>
  <View style={styles.rowMenu} >
    <View style={[styles.rowMenuItems,{backgroundColor:"#02732A"}]}>
               <TouchableOpacity onPress={()=>props.navigation.navigate("TrackerScreen")}>
               <Image source={require("../../assets/icons/diet.png")} style={[styles.icon,{width:"60%",height:"60%"}]} resizeMode="contain"/>

                <Text style={styles.menuText}>Tracker</Text>
               </TouchableOpacity>
      </View>
      <View style={[styles.rowMenuItems,{backgroundColor:"#080E33"}]}>
            <TouchableOpacity onPress={()=>props.navigation.navigate("PurchasesScreen")}>
            <Image source={require("../../assets/icons/income.png")} style={[styles.icon,{width:"60%",height:"60%"}]} resizeMode="contain"/>
            <Text style={styles.menuText}>All expenses</Text>
            </TouchableOpacity>
      </View>

  </View>
      </ScrollView>
    </View>
  );
}



export default Menu;
