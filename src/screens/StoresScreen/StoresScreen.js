import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from '../../../assets/custom-theme.json';
import * as eva from '@eva-design/eva';
import TopNavigationComponent from '../../components/TopNavigationComponent/TopNavigationComponent';

import styles from './styles';
// import Orientation from 'react-native-orientation';
import CategoryListComponent from '../../components/ListItem/CategoryComponent';



function Stores(props) {
   //Lock Screen to portrait
  //  Orientation.lockToPortrait();
   const storesList = [
    {
      name: 'Superstore',
      backgroundColor: '#1833CC'
    },
    {
      name: 'Wallmart',
      backgroundColor: '#F27407'
     
    },
    {
      name: 'Call It Spring',
      backgroundColor: '#0D0D0D'
    },
    {
      name: 'Canadian Airline',
      backgroundColor: '#E50000'
    }
  ]
  
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    <TopNavigationComponent title="" onPress={()=>props.navigation.navigate("MenuScreen")} backgroundColor="white"/>
    <CategoryListComponent style={styles.container} numColumns={2} data={storesList} onPress={()=>props.navigation.navigate("ReceiptListScreen")}/>
    </ApplicationProvider>
  );
}



export default Stores;
