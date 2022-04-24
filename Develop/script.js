// Assignment Code
var generateBtn = document.querySelector("#generate");
var randomPassword = document.querySelector("aria-label");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//MY CODE

//Password Criteria Variables
// lowercase letters
var characters = {
lowerLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'K', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
//uppercase letters
upperLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
//numbers
numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
//special characters
specialChars: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '?', '/'],
}


//generate function upon clicking button
generatePassword = function() {
  //length prompt
  var lengthChoice = window.prompt("Please enter a password length between 8 - 128 characters.");
  console.log(lengthChoice);
  //criteria prompts
  var ulChoice = window.prompt("Would you like to include capital letters?");
  console.log(ulChoice);
  
  var llChoice = window.prompt("Would you like to include lowercase letters?");
  console.log(llChoice);

  var numChoice = window.prompt("Would you like to include numbers?");
  console.log(numChoice);

  var charChoice = window.prompt("Would you like to include special characters?");
  console.log(charChoice);

  //in event of all nos

//if (ulChoice && llChoice && numChoice && charChoice === 'no') {
  //window.alert("Please try again. Make sure to choose at least one category and enter a numerical length that is between 8 - 128.");
//}

  //if all uppercase
if (ulChoice && llChoice && numChoice && charChoice === 'yes') {
    for (var i = 0; i <=lengthChoice; i++) {
      var string = characters.JSON.stringify;
      console.log(characters)
      randomCharacter = Math.floor(Math.random() * characters.length);
      randomPassword += characters.substring(randomCharacter, randomCharacter +1);
      randomPassword.textContent = randomPassowrd
    }
  }
}