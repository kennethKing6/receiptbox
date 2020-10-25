import React from 'react';
import { Avatar, ListItem,Divider } from '@ui-kitten/components';
import { View,Text,TouchableOpacity,FlatList } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';




export default function DividerListComponent(props){
    const keyExtractor = (item, index) => index.toString()
    const ItemImage = () => (
        <Avatar
          {...props}
          source={require('../../assets/icons/invoice.png')}
          size='medium'
        />
      );
      
       const receiptItem = ({item,index}) => (
        <View key={index}>
             <TouchableOpacity>
                <ListItem
                title={item.code}
                description={"Total spent: " + item.total}
                accessoryLeft={ItemImage}
                onPress={props.onPress}
                />
                <Text style={{width:"100%",textAlign:"center",color:"red"}}>{item.date}</Text>
                <Divider/>

            </TouchableOpacity>
        </View>
      );
    return(
        <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        numColumns={1}
        data={props.data}
        renderItem={receiptItem}
        keyExtractor={keyExtractor}
      />
    )
}