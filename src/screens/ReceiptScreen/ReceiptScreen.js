import React, { Component } from "react";
import { StyleSheet, View, Image, Dimensions,Text,ProgressBarAndroid,WebView  } from "react-native";
import CustomStatusBar from '../../components/StatusBarLayout';
import Pdf from 'react-native-pdf';
import styles from './styles';
import CardView from 'react-native-cardview';
import Orientation from 'react-native-orientation';
import TopNavigationComponent from '../../components/TopNavigationComponent/TopNavigationComponent';




const window = Dimensions.get('window');
const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf'};
function ReceiptScreen(props) {
   //Lock Screen to portrait
   Orientation.addOrientationListener((orientation)=>{
    if(orientation == "LANDSCAPE"){
      Orientation.lockToPortrait();
    }
  })
  return (
    <View>
      <TopNavigationComponent backgroundColor="#45BF55" onPress={()=>props.navigation.navigate("ReceiptListScreen")} title="Store"/>

       <CardView
        cardElevation={20}
          cardMaxElevation={20}
          cornerRadius={5}
          style={styles.card}
       >
        <Image source={require('../../assets/icons/invoice.png')} resizeMode="contain" style={styles.receipt}/>
      </CardView>   
           
      
    </View>
  );
}



export default ReceiptScreen;
