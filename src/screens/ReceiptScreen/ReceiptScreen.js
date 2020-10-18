import React, { Component } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import CustomStatusBar from '../../components/StatusBarLayout';
import Pdf from 'react-native-pdf';
import styles from './styles';
import CardView from 'react-native-cardview';



const window = Dimensions.get('window');
const receipt = "http://www.africau.edu/images/default/sample.pdf";
function ReceiptScreen(props) {
  return (
    <View style={styles.container}>
    <CustomStatusBar onPress={props} header={"Receipt"} />
            <CardView 
             cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}
            style={styles.card}>
              <Pdf
                      source={receipt}
                      onLoadComplete={(numberOfPages,filePath)=>{
                          console.log(`number of pages: ${numberOfPages}`);
                      }}
                      onPageChanged={(page,numberOfPages)=>{
                          console.log(`current page: ${page}`);
                      }}
                      onError={(error)=>{
                          console.log(error);
                      }}
                      onPressLink={(uri)=>{
                          console.log(`Link presse: ${uri}`)
                      }}
                      />
            </CardView>
      
      
    </View>
  );
}



export default ReceiptScreen;
