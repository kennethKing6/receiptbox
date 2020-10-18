import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialUnderlineTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
            <TextInput style={styles.username}  placeholder="username"
              onChangeText = {(value) =>{ props.onChangeText(value)}}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  username: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    textAlign: "left",
    width: 360,
    opacity: 0.84,
    letterSpacing: 1,
    height: 42
  }
});

export default MaterialUnderlineTextbox;
