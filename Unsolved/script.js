// Assignment Code
var generateBtn = document.querySelector("#generate");

// prompt for user password requirements



//generate password



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
