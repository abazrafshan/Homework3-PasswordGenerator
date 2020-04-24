// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // console.log(newArr);
  passwordText.value = password;

}

var passwordArray = [];
var newArr = [];
var availableOptions = [];
var lowerCase = true;
var upperCase = true;
var symbol = true;
var number = true;
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbolArray = [",","!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"];
var numberArray = ["1","2","3","4","5","6","7","8","9"];
var passwordLength = prompt("How many characters would you like your password to be? Minimum: 8 characters; Maximum; 128 characters");



function letsBegin() {
  // var passwordLength = prompt("How many characters would you like your password to be? Minimum: 8 characters; Maximum; 128 characters");
  console.log(passwordLength);
  if (Math.floor(passwordLength) >= 8 && Math.floor(passwordLength) <= 128) {
    upperCaseFunction();
  }
  else {
    alert("Please choose a number between 8 and 128");
    letsBegin();
  }
}

function upperCaseFunction() {
  var upperCase = confirm("Do you want to include uppercase letters in your password?");
  console.log(upperCase);
  if (upperCase){
    //Include upper case characters in password generation  
    lowerCaseFunction();
  }
  else {
    upperCase === false;
    lowerCaseFunction();
  }
}

function lowerCaseFunction() {
  var lowerCase = confirm("Do you want to include lowercase letters in your password?");
  console.log(lowerCase);
  if (lowerCase){
    //include lowercase letters in password generation
    numberFunction();
  }
  else {
    lowerCase === false;
    numberFunction();
  }
}

function numberFunction() {
  var number = confirm("Do you want to include numbers in your password?");
    console.log(number);
    if (number){
      //include numbers in password generation
      symbolFunction();
    }
    else {
      number === false;
      symbolFunction();
    }
}

function symbolFunction() {
  var symbol = confirm("Do you want to include symbols in your password?");
    console.log(symbol);
    if (symbol){
      createAvailableOptions();
    }
    else {
      symbol === false;
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
    console.log(availableOptions);
    OneDArr(availableOptions)
  }
  else {
    alert("There must be SOME character types you want to include in your password. Try again!");
    return;
  }
  
}

function OneDArr(arr){
  for (var i = 0; i < arr.length; i++) {
    newArr = newArr.concat(arr[i])
    console.log(newArr);
  }
}

function generatePassword(arr) 
{
  // availableOptions.flat();
  // console.log(availableOptions);
  // console.log(newArr); 
  for (var i = 0; i < passwordLength; i++){
    var randomCharacterIndex = Math.floor(Math.random() * newArr.length);
    console.log(randomCharacterIndex)
    console.log(newArr[randomCharacterIndex])
    passwordArray.push(newArr[randomCharacterIndex]);
  }
  return passwordArray;
}

function start() {
  letsBegin();
  writePassword();
  passwordArray=[];
  availableOptions = [];
return
}


 
// Add event listener to generate button
generateBtn.addEventListener("click", start);
