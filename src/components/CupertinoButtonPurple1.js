import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

function CupertinoButtonPurple1(props) {
  return (
    <View style={[styles.container,props.style]}
   
   >
    <TouchableOpacity style={[styles.opacity]}
     onPress={props.onPress}>
      <Text adjustsFontSizeToFit style={styles.buttonText}>Send</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5856D6",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    height: 44,
    width: "40%",
   
   
  },
  button: {
    
    justifyContent: "center",
    alignItems: "center",
    width:"100%",
    marginBottom:"30%"
  },
  buttonText:{
    color: "#fff",
    fontSize: 15,
    textAlign:"center"
  },
  opacity:{
    width:"100%",
    height:"100%"
  }
});

export default CupertinoButtonPurple1;
