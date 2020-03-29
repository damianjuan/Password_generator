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
  var specialCharReq = window.confirm("Are special characters required? /nex. !@#$%^&*");
    console.log("Special characters required:", specialCharReq);
  

};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

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
