import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:"100%"
    },
    rowMenu: {
      flex:1,
      flexDirection:"row",
      width:"100%"
    },
    rowMenuItems: {
      flex:1,
      margin:10,
      backgroundColor:"#2D2D2D",
      marginTop:"5%",
      marginBottom:"5%",
      borderRadius:12,
      shadowColor: "#000",
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 0.12,
      shadowRadius: 60,
    },
    rowMenuItemsTouchable:{
      flex:1
    },
    icon: {
      color: "rgba(248,242,242,1)",
      fontSize: 80,
      marginTop: 13,
      alignSelf: "center"
    },
    menuText: {
      fontFamily: "roboto-regular",
      color: "rgba(251,241,241,1)",
      fontSize: 22,
      textAlign:"center",
      marginTop:"8%"
    },
    
    
  });
  export default styles;