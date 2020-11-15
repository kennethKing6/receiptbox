import React from 'react';
import { Card } from '@ui-kitten/components';
import { View,TouchableOpacity,FlatList,Text } from 'react-native';




export default function ListItemCardComponent(props){
    const keyExtractor = (item, index) => index.toString()
      
      const {navigation} =props.propValue;
      console.log(navigation.navigate)

       const NewsItem = ({item,index}) => (
        <TouchableOpacity key={index} >
        <Card onPress={()=>navigation.navigate("DetailsNewsScreen")}>
        <Text>
          The Maldives, officially the Republic of Maldives, is a small country in South Asia,
          located in the Arabian Sea of the Indian Ocean.
          It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
        </Text>
      </Card>
      </TouchableOpacity>
      );
    return(
        <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        numColumns={1}
        data={props.data}
        renderItem={NewsItem}
        keyExtractor={keyExtractor}
      />
    )
}