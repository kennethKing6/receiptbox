import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigationComponent';


export default function GroupsScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Welcome on the group screen! 🎉
      </Text>
      <BottomNavigation  props={props} selectedIndex={2}/>

    </View>
  );
}

