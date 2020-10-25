import React,{useState} from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import BottomNavigation from '../../../components/BottomNavigation/BottomNavigationComponent';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {TopNavigation} from '../../AppStyles';
import ScreenOrientation, { PORTRAIT, LANDSCAPE } from "react-native-orientation-locker/ScreenOrientation";
import Orientation from "react-native-orientation-locker";

//Screens
import GroupListScreen from '../GroupListScreen/GroupListScreen';
import GroupStatsScreen from '../GroupStatsScreen/GroupStatsScreen';




const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Groups"
      tabBarOptions={{
        activeTintColor: '#FAFAFA',
        labelStyle: { fontSize: 12 },
        style: TopNavigation.Green,
      }}
    >
      <Tab.Screen name="Groups" component={GroupListScreen} />
      <Tab.Screen name="Stats" component={GroupStatsScreen} />
    </Tab.Navigator>
  );
}

export default function GroupsScreen(props) {

  return (
    <View style={{ flex: 1}}>

    <ScreenOrientation
        orientation={PORTRAIT}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation => console.log('onDeviceChange', orientation)}
      />  
      <MyTabs style={{ flex: 1}}/>
     

    </View>
  );
}

