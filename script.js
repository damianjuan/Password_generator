// Assignment Code
var generateBtn = document.querySelector("#generate");




//generate password
function generatePassword(){
  
  // prompt for user password requirements before running function
  var passwordLength = window.prompt("How many characters should your password be?");
    console.log("length:", passwordLength);
  
  var capitalReq = window.confirm("Are capital letters required?");
    console.log("Capital required:", capitalReq);
  
  var numberReq = window.confirm("Are numbers required?");
    console.log("Numbers required:", numberReq);
  
  var specialCharReq = window.confirm("Are special characters required? ex. !@#$%^&*");
    console.log("Special characters required:", specialCharReq);
  
  //Arrays holding password elements being lazy and using split
  var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    lowerAlphabet = lowerAlphabet.split("");
    console.log(lowerAlphabet);

  var capitalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    capitalAlphabet = capitalAlphabet.split("");
    
  
  var numbers = "1234567890";
    numbers = numbers.split("");
   
  var specialChar = "!@#$%^&*";
    specialChar = specialChar.split("");

  var randomPassword = lowerAlphabet;

  //logic to generate password based off of user's requirements 
  if(passwordLength != null){
        
      if(capitalReq === true){
        randomPassword.concat(capitalAlphabet);
        console.log(randomPassword);

      }
      if(numberReq === true){
    
      }
      if(specialCharReq === true){
    
      }
  
  }else{
    window.alert("enter a valid password length");
  }
};
  
  
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

    
  
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// pseudocode
// prompt user to enter length of password
// prompt user if capital required
// prompt if number is required  
// prompt user if special characters are required
// generate password
// check to make sure one of each user requirement is include in password if not generate password again
// write password  
