import React from "react";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { TouchableOpacity } from "react-native";

import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

export default function TopNavigationComponent(props){

    const BackIcon = (props) => (
        <Icon {...props} name='arrow-back'/>
      );
      
      const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={props.onPress}/>
      );
      
    return(
      <TouchableOpacity>
        <TopNavigation
        accessoryLeft={BackAction}
        title={props.title}
        style={props.style}
        />
        </TouchableOpacity>
    )
}