import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import CustomStatusBar from '../../components/StatusBarLayout';
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from './styles';


function Stores(props) {
  return (
    <View style={styles.container}>
        <CustomStatusBar onPress={props} header={"Stores"} />
      <View style={styles.groupRow}>
        <View style={styles.group}>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Purchases")}>
            <Image
              source={require("../../assets/images/starbucks.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Text style={styles.starbucks}>Starbucks</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.group}>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Purchases")}>
              <Image
              source={require("../../assets/images/starbucks.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Text style={styles.starbucks}>Starbucks</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.groupRow}>
        <View style={styles.group}>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Purchases")}>
              <Image
              source={require("../../assets/images/starbucks.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Text style={styles.starbucks}>Starbucks</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.group}>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Purchases")}>
                <Image
                source={require("../../assets/images/starbucks.jpg")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
              <Text style={styles.starbucks}>Starbucks</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.groupRow}>
        <View style={styles.group} >
          <TouchableOpacity onPress={()=>props.navigation.navigate("Purchases")}>
            <Image
              source={require("../../assets/images/starbucks.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Text style={styles.starbucks}>Starbucks</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.group}>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Purchases")}>
              <Image
              source={require("../../assets/images/starbucks.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Text style={styles.starbucks}>Starbucks</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}



export default Stores;
