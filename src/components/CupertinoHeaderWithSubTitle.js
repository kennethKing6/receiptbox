import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function CupertinoHeaderWithSubTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.leftIconButton}>
        <Text style={styles.allFiles}>All Files</Text>
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          Title
        </Text>
        <Text numberOfLines={1} style={styles.subTitle}>
          SubTitle
        </Text>
      </View>
      <TouchableOpacity style={styles.rightIconButton}>
        <Text style={styles.rightText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#EFEFF4"
  },
  leftIconButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "center",
    paddingLeft: 8,
    paddingRight: 8
  },
  allFiles: {
    alignSelf: "center",
    fontSize: 17,
    color: "#007AFF"
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 15,
    lineHeight: 15,
    color: "#000"
  },
  subTitle: {
    fontSize: 12,
    color: "#8E8E93"
  },
  rightIconButton: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingLeft: 8,
    paddingRight: 8
  },
  rightText: {
    fontSize: 17,
    color: "#007AFF"
  }
});

export default CupertinoHeaderWithSubTitle;
