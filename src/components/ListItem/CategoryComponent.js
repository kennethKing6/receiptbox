import CardView from 'react-native-cardview';
import { FlatList, Text, TouchableOpacity } from "react-native";
import React from "react";


export default function CategoryComponent(props){


const keyExtractor = (item, index) => index.toString()

const renderItem = ({ item }) => (
<TouchableOpacity
style={{flex:1,height:165,maxWidth:"45%",margin:10}}
onPress={props.onPress}
>
<CardView
    cardElevation={6}
    cardMaxElevation={10}
    cornerRadius={5}
    style={{backgroundColor:item.backgroundColor,textAlignVertical:"center",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"}}
    >
    <Text style={{color:"white",fontSize:20}}>
        {item.name}
    </Text>
</CardView>
</TouchableOpacity>
)


  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={props.data}
      renderItem={renderItem}
      numColumns={props.numColumns}
    />
  )

}