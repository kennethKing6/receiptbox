import React from 'react';
import {
  
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';
import styles from './styles';
import { getRecipes, getCategoryName } from '../data/MockDataAPI';
import Orientation from 'react-native-orientation';
import TopNavigationComponent from '../../components/TopNavigationComponent/TopNavigationComponent';
import DividerListComponent from '../../components/ListItem/DividerListComponent';
import {LineChart} from "react-native-chart-kit";



export default function RecipesListScreen(props) {
  

  Orientation.lockToPortrait();

   
  
const receipts =[
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
  },
  {
    code: "#9848928952757257725929",
    date:"08/12/2020",
    total:"$100"
  }
]
  

 
    return (
      <View>
        <TopNavigationComponent backgroundColor="white" onPress={()=>props.navigation.navigate("StoresScreen")} title=""/>
        <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width}
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      
    }}
  />
      
        <DividerListComponent   data={receipts} onPress={()=>props.navigation.navigate("ReceiptScreen")}  />

       
      </View>
    );
  
}
