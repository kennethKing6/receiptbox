import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import {TopNavigation} from '../../AppStyles'
import TopNavigationComponent from '../../../components/TopNavigationComponent/TopNavigationComponent';
import { WebView } from 'react-native-webview';


function NewsArticle(props){
  return(
    <View style={{ width: '100%', height: '94%' }}>
    <WebView source={{ uri: 'https://youmatter.world/en/definition/definitions-sustainability-definition-examples-principles/' }}/>
    </View>


  )
}
export default function DetailsNewsScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <TopNavigationComponent title="News" onPress={()=>props.navigation.navigate("NewsListScreen")} style={TopNavigation.Green}/>
    <NewsArticle />
    </View>
  );
}

