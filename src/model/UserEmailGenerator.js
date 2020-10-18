/**
 * This class is supposed to create an email username 
 * based on the user first name,last name, date of birth
 * 
 * @author Kenneth Kouadio
 * 
 */
 export class UserEmailGenerator{
     constructor(firstname,lastname,birthdate){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
     }

     getEmailId(){
        return (this.firstname + this.lastname + this.birthdate).toLowerCase();
     }

     generatedUserEmail(){
        var generatedEmail = this.getEmailId() + "@getreceiptbox.com"
         return generatedEmail;
     }

      generatePassword() {
            var length = 12,
                charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
        
      }
      
    
      

 }

