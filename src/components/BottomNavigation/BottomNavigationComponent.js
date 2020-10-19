import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';


const {height} = Dimensions.get("screen");
var bottom = height * (84.4/100);
const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const BellIcon = (props) => (
  <Icon {...props} name='bell-outline'/>
);

const EmailIcon = (props) => (
  <Icon {...props} name='email-outline'/>
);

const useBottomNavigationState = (initialState = 0) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

export default function BottomNavigationComponent (props){

  const topState = useBottomNavigationState();
  const bottomState = useBottomNavigationState();
  const navigation = useNavigation();


  return (
    <React.Fragment>

      <BottomNavigation  {...topState}  style={[styles.bottomNavigation,props.style]}>
        <BottomNavigationTab title='USERS' icon={PersonIcon}/>
        <BottomNavigationTab title='ORDERS' icon={BellIcon}/>
        <BottomNavigationTab title='TRANSACTIONS' icon={EmailIcon} onPress={()=>navigation.navigate("PurchasesScreen")}/>
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