import React, { Component } from "react";
import { StyleSheet, View, Image, Dimensions,Text,ProgressBarAndroid,WebView  } from "react-native";
import CustomStatusBar from '../../components/StatusBarLayout';
import Pdf from 'react-native-pdf';
import styles from './styles';
import CardView from 'react-native-cardview';
import TopNavigationComponent from '../../components/TopNavigationComponent/TopNavigationComponent';
import {TopNavigation} from '../AppStyles'




const window = Dimensions.get('window');
const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf'};
function ReceiptScreen(props) {
  
  return (
    <View>
      <TopNavigationComponent style={TopNavigation.Green} onPress={()=>props.navigation.navigate("ReceiptListScreen")} title="Store"/>

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
