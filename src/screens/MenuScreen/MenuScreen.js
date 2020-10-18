import React, { Component, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomStatusBar from '../../components/StatusBarLayout'
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from './styles';


function Menu(props) {

  return (
    <View style={styles.container}>
    <CustomStatusBar onPress={props} header={"Menu"} />

        
          <View style={styles.rowMenu}>
              
                    <View style={styles.rowMenuItems} >
                        <TouchableOpacity onPress={()=>props.navigation.navigate("ScanScreen")}>
                        <MaterialCommunityIconsIcon
                            name="qrcode-scan"
                          style={styles.icon}
                           
                          ></MaterialCommunityIconsIcon>
                          <Text style={styles.menuText}>Scan now</Text>
                        </TouchableOpacity>
                      </View>
            
             

                <View  style={styles.rowMenuItems}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate("RewardScreen")}>
                          <MaterialCommunityIconsIcon
                              name="airplane"
                              style={styles.icon}
                            ></MaterialCommunityIconsIcon>
                            <Text style={styles.menuText}>Rewards</Text>
                        </TouchableOpacity>
                </View>
          </View>
        
        <View style={styles.rowMenu} >
              <View  style={styles.rowMenuItems}>
                         <TouchableOpacity onPress={()=>props.navigation.navigate("ProfileScreen")}>
                          <MaterialCommunityIconsIcon
                              name="account"
                              style={styles.icon}
                            ></MaterialCommunityIconsIcon>
                            <Text style={styles.menuText}>Profiles</Text>
                         </TouchableOpacity>
                </View>    
              <View  style={styles.rowMenuItems}>
                         <TouchableOpacity onPress={()=>props.navigation.navigate("Stores")}>
                         <MaterialCommunityIconsIcon
                            name="table-border"
                            style={styles.icon}
                          ></MaterialCommunityIconsIcon>
                          <Text style={styles.menuText}>Store</Text>
                         </TouchableOpacity>
                </View>
        </View>
        <View style={styles.rowMenu} >
          <View style={styles.rowMenuItems}>
                     <TouchableOpacity onPress={()=>props.navigation.navigate("TrackerScreen")}>
                     <MaterialCommunityIconsIcon
                        name="qrcode-scan"
                        style={styles.icon}

                      ></MaterialCommunityIconsIcon>
                      <Text style={styles.menuText}>Tracker</Text>
                     </TouchableOpacity>
            </View>
            <View style={styles.rowMenuItems}>
                  <TouchableOpacity onPress={()=>props.navigation.navigate("GroupScreen")}>
                  <MaterialCommunityIconsIcon
                    name="share-variant"
                    style={styles.icon}

                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.menuText}>Share now</Text>
                  </TouchableOpacity>
            </View>

        </View>

    </View>
  );
}



export default Menu;
