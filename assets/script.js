// Assignment code here
var characterlength = 8;
var choiceArr = [];
var specialCharacter = ['!', '@', '#', '$', '%', '?', '*', '&', '+', '-', '>', '<', '^',];
var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var password = "";
  for (var i = 0; i < characterlength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPrompts() {
  choiceArr = [];

  characterlength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));

  if (isNaN(characterlength) || characterlength < 8 || characterlength > 128) {
    alert("Character langth has to be a number, 8 - 128 digits. Please try agian!");
    return false;
  }
  if (confirm("would you like lowercase letters in the password?")) {
    choiceArr = choiceArr.concat(lowercaseArr);
  }
  if (confirm("would you like uppercase letters in the password?")) {
    choiceArr = choiceArr.concat(uppercaseArr);
  }
  if (confirm("would you like special characters in the password?")) {
    choiceArr = choiceArr.concat(specialCharacter);
  }
  if (confirm("would you like numbers in the password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}

