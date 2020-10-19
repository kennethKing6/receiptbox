import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
  
    },
    createAnAccount: {
      fontFamily: "georgia-regular",
      color: "rgba(235,117,117,1)",
      height: 36,
      width: "100%",
      fontSize: 20,
      textAlign: "left",
      marginTop: "10%",
      paddingLeft:"5%"
    },
    labelInput: {
      color: 'red',
      fontWeight:"700"
    },
    formInput: {    
      borderBottomWidth: 1.5, 
      borderColor: '#333',
      width:"90%",
      marginTop:"3%",
    },
    formInputBirth:{
      width:100,
      height:70,
      margin:"1%",
      marginTop:0
    },
    input: {
      borderWidth: 0,
  
    },
    continueButton:{
      width:"80%",
      height:40,
      backgroundColor:"black",
      position:"absolute",
      top:"90%",
      flex:1,
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center"
    },
   image:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  });
export default styles;  