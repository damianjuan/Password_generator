// Assignment Code
var generateBtn = document.querySelector("#generate");




//generate password
function generatePassword(){
  
  // prompt for user password requirements before running function
  var passwordLength = window.prompt("How many characters should your password be?");
    passwordLength = Number(passwordLength);  
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
    
  var capitalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    capitalAlphabet = capitalAlphabet.split("");
  
  var numbers = "1234567890";
    numbers = numbers.split("");
   
  var specialChar = "!@#$%^&*";
    specialChar = specialChar.split("");

  // create array with all password requirement options to random select from 
  var randomPasswordReq = lowerAlphabet;
  
  // add all character options to array to select from when randomly generating password
  if(passwordLength != null){
          
    if(capitalReq === true){
      randomPasswordReq = randomPasswordReq.concat(capitalAlphabet);
      console.log(randomPasswordReq);

    }
    if(numberReq === true){
      randomPasswordReq = randomPasswordReq.concat(numbers);
      console.log(randomPasswordReq);
      
    }
    if(specialCharReq === true){
      randomPasswordReq = randomPasswordReq.concat(specialChar);
      console.log(randomPasswordReq);
      
    }
  }

  // create initial empty array to hold password
  var password = [];

  // select a random element from the randomPasswordReq array and assign it to an index position of password array.
  for(var i = 0; i < passwordLength; i++ ){
    password[i] = randomPasswordReq[Math.floor(Math.random()*randomPasswordReq.length)];
    console.log(password);
  }
  
  // need to add way to check to make sure password generated has all requirements met 

  // convert password array to string so can be shown on screen
  password = password.join("");
  console.log(password);
  console.log(typeof password);



return password;
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
