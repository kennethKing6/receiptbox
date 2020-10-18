import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


function MaterialCardWithoutImage2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress={props.onPress} style={styles.TouchableOpacity}>
        <View style={styles.bodyContent}>
          <Text style={styles.purchased}>Purchased</Text>
          <Text style={styles.subtitleStyle}>#84847929324975</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.starbucks}>
            Starbucks Thompson Rivers University
          </Text>
        </View>
        <Text style={styles.text}>On 09/26/2019 at 07:50 PM</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden",
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
    alignSelf: "stretch"
  },
  purchased: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5,
    margin: 0
  },
  body: {
    padding: 2,
    paddingBottom: 6,
    paddingLeft: 6
  },
  starbucks: {
    lineHeight: 20,
    fontSize: 14,
    color: "#424242",
    flexWrap: "wrap",
    width: 318,
  },
  text: {
    top: 121,
    left: 9,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 340,
  },
  TouchableOpacity:{
    height:"100%",
    width:"100%"
  }
});

export default MaterialCardWithoutImage2;
