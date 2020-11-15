import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import {TopNavigation} from '../../AppStyles'
import ScreenOrientation, { PORTRAIT, LANDSCAPE } from "react-native-orientation-locker/ScreenOrientation";
import ListItemCardComponent from '../../../components/ListItem/ListItemCardComponent';

export default function NewsListScreen(props) {
  const news =[
    {
      code: "#9848928952757257725929",
      date:"09/28/2020",
      total:"$70"
    },
    {
      code: "#9848928952757257725929",
      date:"09/12/2020",
      total:"$30"
    },
    {
      code: "#9848928952757257725929",
      date:"08/12/2020",
      total:"$100"
    },
    {
      code: "#9848928952757257725929",
      date:"08/12/2020",
      total:"$100"
    },
    {
      code: "#9848928952757257725929",
      date:"08/12/2020",
      total:"$100"
    },
    {
      code: "#9848928952757257725929",
      date:"08/12/2020",
      total:"$100"
    },
    {
      code: "#9848928952757257725929",
      date:"08/12/2020",
      total:"$100"
    },
    {
      code: "#9848928952757257725929",
      date:"08/12/2020",
      total:"$100"
    },
    {
      code: "#9848928952757257725929",
      date:"08/12/2020",
      total:"$100"
    }]

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={[{width:"100%",fontSize:25,padding:12},TopNavigation.Green]}>News</Text>
   <ScreenOrientation
        orientation={PORTRAIT}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation => console.log('onDeviceChange', orientation)}
      />  
      <ListItemCardComponent data={news} propValue={props}/>
    </View>
  );
}

