import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialStackedLabelTextbox1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.lastName}>Last Name</Text>
      <TextInput placeholder="Input" style={styles.inputStyle}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent"
  },
  lastName: {
    fontFamily: "roboto-700",
    fontSize: 12,
    textAlign: "left",
    color: "rgba(235,117,117,1)",
    opacity: 0.6,
    paddingTop: 16
  },
  inputStyle: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 8
  }
});

export default MaterialStackedLabelTextbox1;
