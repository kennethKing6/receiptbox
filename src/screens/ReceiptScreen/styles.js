import { StyleSheet,Dimensions} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
  
    },
    image: {
      width: 375,
      height: 586,
      alignSelf: "center",
      marginTop:44,
    },
    cupertinoHeaderWithActionButton1: {
      position:'absolute',
      top:0,
      left:0,
      height: 44,
      width: window.width,
     
    },
    card:{
      height:"80%",
      width:"80%",
      alignItems:"center",
      alignSelf:"center",
      margin:30,
      backgroundColor:"#999999"

    },
    receipt: {
     width:"100%",
     height:"100%",

     
  }
  });
  export default styles;