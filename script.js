// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var passwordLength;
var passwordArray = [];
var availableOptions = [];
var lowerCase = true;
var upperCase = true;
var symbol = true;
var number = true;
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var symbolArray =  ("!#$%&()*+,-./:;<=>?@[\]^_{|}~"+"""+"'" )
var numberArray = ["1","2","3","4","5","6","7","8","9"];

function letsBegin() {
  var passwordLength = prompt("How many characters would you like your password to be? Minimum: 8 characters; Maximum; 128 characters");
  console.log(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {
    passwordArray.length = passwordLength;
    upperCaseFunction();
  }
  else {
    alert("Please choose a number between 8 and 128");
    letsBegin();
  }
  function upperCaseFunction() {
    var upperCase = confirm("Do you want to include uppercase letters in your password?");
    console.log(upperCase);
    if (upperCase === true){
        lowerCaseFunction();
    }
    else {
        upperCase = false;
        lowerCaseFunction();
    }
    function lowerCaseFunction() {
      var lowerCase = confirm("Do you want to include uppercase letters in your password?");
      console.log(lowerCase);
      if (lowerCase === true){
        //include lowercase letters in password generation
        numberFunction();
      }
      else {
        lowerCase = false;
        numberFunction();
      }
    }
    function numberFunction() {
        var number = confirm("Do you want to include uppercase letters in your password?");
        console.log(number);
        if (number === true){
            //include numbers in password generation
            symbolFunction();
        }
        else {
            number = false;
            symbolFunction();
        }
      }
      function symbolFunction() {
        var symbols = confirm("Do you want to include uppercase letters in your password?");
        console.log(symbol);
        if (symbol === true){
            createAvailableOptions();
        }
        else {
            symbol = false;
            createAvailableOptions();
        }
      }
      function createAvailableOptions() {
          if (upperCase === true) {
              availableOptions.push(upperCaseArray);
              console.log (availableOptions);
          }
          if (lowerCase === true) {
              availableOptions.push(lowerCaseArray);
              console.log(availableOptions)
          }
          if (number === true){ 
              availableOptions.push(numberArray);
              console.log(availableOptions);
          }
          if (symbol === true) {
              availableOptions.push(symbolArray);
              console.log(availableOptions)
          }
      }

}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
