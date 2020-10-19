import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';


const {height} = Dimensions.get("screen");
var bottom = height * (84.4/100);
const PersonIcon = (props) => (
  <Icon {...props} name='inbox-outline'/>
);

const BellIcon = (props) => (
  <Icon {...props} name='paper-plane-outline'/>
);

const EmailIcon = (props) => (
  <Icon {...props} name='people-outline'/>
);

const useBottomNavigationState = (initialState = 0) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

export default function BottomNavigationComponent (props){

  const topState = useBottomNavigationState();
  const bottomState = useBottomNavigationState();
  const {navigation} = props.props;


  return (
    <React.Fragment>

      <BottomNavigation  {...topState}  style={[styles.bottomNavigation,props.style]} 
       onSelect={(index)=>{
         switch(index){
           case 0:
            navigation.navigate("MenuScreen")
           break;
           case 1:
            navigation.navigate("NewsListScreen")
           break;
           case 2:
            navigation.navigate("GroupsScreen")
           break;
         }
         }}
         selectedIndex={props.selectedIndex}

      >
        <BottomNavigationTab title='RECEIPTBOX' icon={PersonIcon}/>
        <BottomNavigationTab title='NEWS' icon={BellIcon}/>
        <BottomNavigationTab title='GROUPS' icon={EmailIcon}/>
      </BottomNavigation>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    position:"absolute",
    top:bottom
    
  },
});