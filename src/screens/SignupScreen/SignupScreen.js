import React, { Component,useState } from "react";
import { StyleSheet, View, Text,TouchableOpacity,ImageBackground } from "react-native";
import FloatingLabel  from 'react-native-floating-labels';
import CardView from 'react-native-cardview';
import { MaterialIcons } from '@expo/vector-icons'; 
import {UserEmailGenerator} from '../../model/UserEmailGenerator';
import moment from 'moment';
import styles from './styles';
// import Orientation from 'react-native-orientation';


function generateUserCredentials(fn,ln,dob){
  var user = new UserEmailGenerator(fn,ln,dob);
  return new Array(user.generatedUserEmail(),user.generatePassword());
}


function Signup(props) {
  const [fn,setfn] = useState('');
  const [ln,setln] = useState('');
  const [day,setday] = useState('');
  const [month,setmonth] = useState('');
  const [year,setyear] = useState('');


   //Lock Screen to portrait
  //  Orientation.addOrientationListener((orientation)=>{
  //   if(orientation == "LANDSCAPE"){
  //     Orientation.lockToPortrait();
  //   }
  // })

  return (
    <ImageBackground source={require("../../assets/images/getstarted.jpg")} style={styles.image}>
        <View style={styles.container}>
            <View style={{flexDirection:"row",marginTop:5}}>
             <MaterialIcons name="arrow-back" size={24} color="black" style={{flex:0.3,marginLeft:5}} onPress={()=>props.navigation.pop()}/>
              <Text style={{fontSize:20,fontWeight:"bold",color:"black",textAlign:"center",flex:6,paddingRight:20}}>Get Started</Text>
          </View>
            <CardView
                cardElevation={5}
                cardMaxElevation={10}
                cornerRadius={6}
                style={{width:"90%",backgroundColor:"white",color:"white",height:"25%",marginTop:"5%"}}>
                <Text style={{fontSize:16,color:"red",marginLeft:20,marginTop:20}} >step one</Text>
                <Text style={{fontSize:20,color:"black",marginLeft:20,marginTop:"5%"}}>Why are these 3 important?</Text>
                <Text style={{fontSize:15,marginLeft:20,marginTop:20}}>We need this information to create your unique email address  
                (example@getreceiptbox.com). </Text>
              
          </CardView>
          <FloatingLabel 
                  labelStyle={styles.labelInput}
                  style={styles.formInput}
                  onChangeText={(fn)=>setfn(fn)}
                >First Name ?
          </FloatingLabel>
          <FloatingLabel 
                  labelStyle={styles.labelInput}
                  style={styles.formInput}
                  onChangeText={(ln)=>setln(ln)}
                >Last Name ?
          </FloatingLabel>
          <View style={{marginTop:2,padding:8}}>
            <Text style={{fontSize:18,fontWeight:"bold",color:"black"}}>Date of birth</Text>
            <View style={{flexDirection:"row"}}>
            <FloatingLabel 
                    labelStyle={styles.labelInput}
                    style={styles.formInputBirth}
                    onChangeText={(day)=>{
                     
                      if(isNaN(day) || day.length > 2 ){
                        alert("00 is a valid day format only");
                        setday('')
                        return;
                      }
                      setday(day)}}
                  >Day
            </FloatingLabel>
            <FloatingLabel 
                    labelStyle={styles.labelInput}
                    style={styles.formInputBirth}
                    onChangeText={(month)=>{
                      
                      if(isNaN(month) || month.length > 2 ){
                        alert("00 is a valid month format only");
                        setmonth('');
                        return;
                      }
                      setmonth(month)}}
                  >Month
            </FloatingLabel>
            <FloatingLabel 
                    labelStyle={styles.labelInput}
                    style={styles.formInputBirth}
                    onChangeText={(year)=>{
                     
                      if(isNaN(year) || year.length > 4 ){
                        alert("0000 is a valid year format only");
                        setyear('')
                        return;
                      }
                      setyear(year)}}
                  >Year
            </FloatingLabel>
            </View>
          </View>

          <TouchableOpacity
            style={styles.continueButton}
            onPress={()=>{
                var date = year + "-" + month + "-" + day;
                if(!moment(date, 'YYYY-MM-DD',true).isValid()){
                  alert("Please correct format is:\n" + 
                  "day: 08\n"+
                  "month: 02\n"+
                  "year: 1998");
                  return;
                }
              var credentials = generateUserCredentials(fn,ln,day + month + year);
              props.navigation.navigate("UserEmailScreen",
              {firstname:fn,lastname:ln,dateOfBirth:date,email:credentials[0],password:credentials[1]
              });
            }}
          >
            <Text style={{color:"white"}}>CONTINUE</Text>
          </TouchableOpacity>
      </View>
   </ImageBackground>
  );
}



export default Signup;
