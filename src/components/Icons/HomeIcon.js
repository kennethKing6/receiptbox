import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function HomeIcon(props) {
  return (
    <View style={styles.container}>
      <Icon name="home" style={styles.icon6}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 44
  },
  icon6: {
    color: "rgba(252,246,246,1)",
    fontSize: 40
  }
});

export default HomeIcon;
