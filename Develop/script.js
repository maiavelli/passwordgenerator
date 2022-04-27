// Assignment Code
var generateBtn = document.querySelector("#generate");
//var randomPassword = document.querySelector("password");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//MY CODE
  //characters for password
  const alphaLower = "abcdefghijklmnopqrstuvwxyz"
  const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols ="!@#$%^&*_-+=";


//generate function upon clicking button
generatePassword = (length, characters) => {
  //length prompt
  var lengthChoice = window.prompt("Please enter a password length between 8 - 128 characters.");
  console.log(lengthChoice);
  //turn lengthChoice into integer
  var passLength = parseInt(lengthChoice);
  console.log(passLength);
  //criteria prompts
  var ulChoice = window.prompt("Would you like to include capital letters?");
  console.log(ulChoice);
  
  var llChoice = window.prompt("Would you like to include lowercase letters?");
  console.log(llChoice);

  var numChoice = window.prompt("Would you like to include numbers?");
  console.log(numChoice);

  var charChoice = window.prompt("Would you like to include special characters?");
  console.log(charChoice);


  //if all yes
if (ulChoice && llChoice && numChoice && charChoice == 'yes') {
    let password = "";
    let characters = alphaLower += alphaUpper += numbers += symbols;
    for (let i = 0; i < passLength; i++); {
      password += characters.substring(
        Math.floor(Math.random() * characters.length)
      );
      console.log(password);
    };

      return password;
      
  }
}