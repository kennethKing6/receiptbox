import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function CupertinoHeaderWithLargeTitle2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.header}>
        <View style={styles.leftWrapper}>
          <TouchableOpacity style={styles.leftIconButton}>
            <Icon name="ios-arrow-back" style={styles.leftIcon}></Icon>
            <Text style={styles.leftText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightWrapper}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.rightText}>Action</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.receipt}>
          Receipt
        </Text>
      </View>
      <Text style={styles.loremIpsum}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFF4",
    paddingRight: 8,
    paddingLeft: 8
  },
  header: {
    width: 359,
    height: 44,
    flexDirection: "row"
  },
  leftWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "#007AFF",
    fontSize: 32
  },
  leftText: {
    fontSize: 17,
    color: "#007AFF",
    paddingLeft: 5,
    alignSelf: "center"
  },
  rightWrapper: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  button: {},
  rightText: {
    color: "#007AFF",
    fontSize: 17,
    alignSelf: "center"
  },
  textWrapper: {
    height: 52,
    paddingLeft: 5,
    justifyContent: "center",
    opacity: 0.82,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0
  },
  receipt: {
    fontSize: 34,
    lineHeight: 40,
    color: "#000"
  },
  loremIpsum: {
    top: 72,
    left: 65,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  }
});

export default CupertinoHeaderWithLargeTitle2;
