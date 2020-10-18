import React, { Component } from "react";
import { View, StatusBar,StyleSheet } from "react-native";
import CupertinoHeaderStatusBar from "./CupertinoHeaderStatus";



function StatusBarLayout(props){
    return(
        <View>
        <StatusBar marginBottom="1%" />
        <CupertinoHeaderStatusBar
         onPress={() => props.onPress.navigation.goBack()}
        style={styles.CupertinoHeaderStatusBar}
        header={props.header}
        homeScreen={props}
      ></CupertinoHeaderStatusBar>

        </View>
    )
}


const styles = StyleSheet.create({
    CupertinoHeaderStatusBar: {
        height:50,
        width: window.width,
        marginTop:"5%",
        backgroundColor:"#688C1B"
      }
})

export default StatusBarLayout;
