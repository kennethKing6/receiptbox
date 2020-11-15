import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import TopNavigationComponent from '../../components/TopNavigationComponent/TopNavigationComponent';
import {TopNavigation} from '../AppStyles'



export default function RewardsScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <TopNavigationComponent title="" onPress={()=>props.navigation.navigate("MenuScreen")} style={TopNavigation.White}/>
      <Text>
        Welcome on the Tracker screen! 🎉
      </Text>

    </View>
  );
}

