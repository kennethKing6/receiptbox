import React from 'react';
import { Card, Text } from '@ui-kitten/components';
import { View,TouchableOpacity,FlatList } from 'react-native';


export const ListItemCard = (props) => (
    <View key={props.key}>
      <Card>
      <Text>
        The Maldives, officially the Republic of Maldives, is a small country in South Asia,
        located in the Arabian Sea of the Indian Ocean.
        It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
      </Text>
    </Card>
    </View>
  );

export default function ListItemCardComponent(props){
    const keyExtractor = (item, index) => index.toString()
      
       const NewsItem = ({item,index}) => (
        <ListItemCard key={index}/>
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