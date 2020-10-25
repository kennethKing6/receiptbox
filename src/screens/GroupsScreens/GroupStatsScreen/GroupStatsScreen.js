import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import BottomNavigation from '../../../components/BottomNavigation/BottomNavigationComponent';
import ScreenOrientation, { PORTRAIT, LANDSCAPE } from "react-native-orientation-locker/ScreenOrientation";


export default function GroupStatsScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     <ScreenOrientation
        orientation={PORTRAIT}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation => console.log('onDeviceChange', orientation)}
      />  
      <Text>
      Welcome on the Group Stats Screen! 🎉
      </Text>
      <BottomNavigation  props={props} selectedIndex={1}/>
    </View>
  );
}

