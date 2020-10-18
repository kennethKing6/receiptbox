import * as firebase from 'firebase';
import AsyncStorage from '@react-native-community/async-storage';
import {LocalStorageKeys} from './LocalStorageConstantsKeys';




export class BackgroundTaskOperation{

    constructor(){
      this.finalReceiptsList = null;
      this.userData = null;
    }


/**
 * This method is used to get the user data. 
 * 
 * It first tries to get the data from local storage.then if it fails,
 * tries to get the data off the online database.
 * 
 * @return it returns  null if no data was found or returns the user data
 */
async getUserData(){
  console.log("\nLocal Storage Status: Begin to retrieve user data\t")

  var userData = await this.readDataLocally(LocalStorageKeys.userdataKey); // Read data from local storage
  if(userData === null || userData ===undefined){
    //Read off firebase
    console.log("Local Storage Status: There is no user data stored locally\t")
    try{
      console.log("Local Storage Status: Trying to read user data off the online db\t")

      var userId = firebase.auth().currentUser.uid;
      var ref = firebase.database().ref("users/" + userId + "/"+LocalStorageKeys.userdataKey);
      ref.once("value").then((datasaphot)=>{
        //Check if there is any user data from the online db
        userData = JSON.stringify(datasaphot.val()); // read user data from online db
        if(userData !== null){
            const storingLocallySucceeded =  this.storeDataLocally(LocalStorageKeys.userdataKey,userData).then().catch();
            if(storingLocallySucceeded){
              console.log("Local Storage Status: data was retrieved off the online db and was successfully stored locally\t");
            }else{
              console.log("Local Storage  Status: data was retrieved off the online db and was failed to be stored locally\t");
            }
        }else{
          console.log("Local Storage  Status: User has no userData in the online db\t");

        }
      }).catch((e)=>{
        console.log(e)
      })
    }catch(e){
      console.log("Local Storage  Status: No user data store on the server.Hence, user is either not signed in or not registered\t");
    }
    

  }
  
  console.log("Local Storage  Status: End of local Storage Status analysis\n");
  if(userData !== null || userData !== undefined ){
    this.userData = JSON.parse(userData);
    return JSON.parse(userData);

  }else{
    return null;
  }
    
  
}
 async fetchReceipts(){
   const isUser = firebase.auth().currentUser;
   console.log("\nRead User Email Status: Starting to read the user email from cpanel\t")
    var receipts = null;
   if(isUser){
    const userdata = await this.readDataLocally(LocalStorageKeys.userdataKey);
    if(userdata !==null && userdata !==undefined){
      const email = JSON.parse(userdata).cpanelGeneratedEmail;
      const password = JSON.parse(userdata).cpanelGeneratedPassword;
      const userId = firebase.auth().currentUser.uid;

     const url = "http://getreceipts.getreceiptbox.com?user_id=" + userId + "&email=" + email + "&password="+password;
     fetch(url).then((serverResponse)=>{
       console.log("Read User Email Status:" + serverResponse);
       console.log("\t")
       return serverResponse.json();
     }).then((resp)=>{
       //Display api response
       console.log("Read User Email Status: ");
       console.log(resp);
       console.log("\tresponse from server above\t");

       var receiptsList = JSON.parse(resp).receipts;
        return this.getReceiptsUrls(receiptsList);
     }).then((finalReceiptsList)=>{ // finalReceiptsList is a list of receipts where each receipts contain their gcsuri and https ref
      console.log("Read User Email Status: ");
      console.log(JSON.stringify(finalReceiptsList));
      console.log("\treceipts list \t");
      receipts = finalReceiptsList;
      this.gcsUriReceiptsList = finalReceiptsList;
       const finalReceiptsListString = JSON.stringify(finalReceiptsList);
      return this.storeDataLocally(LocalStorageKeys.receiptsKey,finalReceiptsListString);

     }).then((localStorageStatus)=>{
       if(localStorageStatus){
        console.log("Read User Email Status: Successfully stored user receipts url locally\t")
       }else{
        console.log("Read User Email Status: failed to store user receipts url locally\t")

       }
     }).catch((err)=>{
      console.log("Read User Email Status: " + JSON.stringify(err));

     });
     
    }else{
      console.log("Read User Email Status:No user data is available\t");
    }
   }else{
    console.log("Read User Email Status: No user is currently signed up\t")
   }

  
console.log("Read User Email Status: end of fetching user email from Cpanel");
return receipts;

}
//Helper method for fetchReceipts method
async getReceiptsUrls(receiptsList){
  for(var i = 0 ; i < receiptsList.length; i++){
    receiptsList[i]['url'] = await firebase.storage().refFromURL(element.gcsUri).getDownloadURL();

  }
  return receiptsList;
}



    

 
    async uploadReceiptOCR(){
        
             const finalReceiptsListString = await readDataLocally(LocalStorageKeys.receiptsKey);
             var user = firebase.auth().currentUser;
            
            if(finalReceiptsListString && user){
                const finalReceiptsList = JSON.parse(finalReceiptsListString);
                //Add the url to each receipt
                const userId = user.uid;               
                    var result = await fetch("http://getreceipts.getreceiptbox.com/readFileOCR/readReceipts.php?user_id=" + userId + "&receipts=" + JSON.stringify(receiptArray));
                    console.log("Uploading OCR data: ")
                    console.log(result);
                    console.log("\n");

                
            }
            


      
    }
    /**
     * Stores the data locally
     * @param {The data to be stored} value 
     */
     async storeDataLocally(key,value){
        try {
          await AsyncStorage.setItem('@' + key, value)
          console.log( value+" was successfully saved locally");
          return true;
        } catch (err) {
          // saving error
          console.log(err)
          return  false;
        }
      }
      async  readDataLocally(storageKey){
        try {
          const value = await AsyncStorage.getItem('@' + storageKey)
          if(value !== null) {
           return value;
          }
        } catch(e) {
          return null;
        }
      }

      async removeDataLocally (storageKey) {
        try {
          await AsyncStorage.removeItem('@' + storageKey)
        } catch(e) {
          // remove error
          console.log(err)
          throw e;
        }
      
        console.log('Done removing ' + storageKey + " from local storage")
      }
      

      
        
        
}