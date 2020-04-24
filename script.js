// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // console.log(newArr);
  passwordText.value = password;
}

//Array variable declarations that will be munipulated to yield an array of randomized values based on user preference when running this program
var passwordArray = [];
var newArr = [];
var availableOptions = [];
//Arrays of the possible characters that may be used in password generation 
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbolArray = [",","!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"];
var numberArray = ["1","2","3","4","5","6","7","8","9"];
//user is asked to specify length of password, this value is stored and re-used for each password generation until user reloads page and restarts the program
var passwordLength = prompt("How many characters would you like your password to be? Minimum: 8 characters; Maximum; 128 characters");

//If user selects password length to be between 8 and 128 characters (inclusive) then next function is called, otherwise program ends and user can try again by reloading page
function letsBegin() {
  console.log(passwordLength);
  if (Math.floor(passwordLength) >= 8 && Math.floor(passwordLength) <= 128) {
    userPreference();
  }
  else {
    alert("Please choose a number between 8 and 128; reload the page to try again");
    return;
  }
}

// Prompts user for confirmation of which families of characters to include in password generation
function userPreference(){
  var upperCase = confirm("Do you want to include uppercase letters in your password?"); 
  var lowerCase = confirm("Do you want to include lowercase letters in your password?");
  var number = confirm("Do you want to include numbers in your password?");
  var symbol = confirm("Do you want to include symbols in your password?");
  // A 2D array of characters that will be available for use in the generation of the password is created based on the user's preferences
  if (upperCase) {
    availableOptions.push(upperCaseArray);
    console.log (availableOptions);
  }
  if (lowerCase) {
    availableOptions.push(lowerCaseArray);
    console.log(availableOptions)
  }
  if (number){ 
    availableOptions.push(numberArray);
    console.log(availableOptions);
  }
  if (symbol) {
    availableOptions.push(symbolArray);
    console.log(availableOptions);
    
  }
  // If user doesn't select any of the prompted conditions to be true, user is alerted of the error and program stops
  if (symbol === false && number === false && lowerCase === false && upperCase === false){
    alert("There must be SOME character types you want to include in your password. Reload page to try again!");
    return;
  }
  // 2D array of potential characters to be used in password generation is turned into a 1D array
  OneDArr(availableOptions);
  console.log(OneDArr(availableOptions));
}

// This function contains the login for inputting a 2D array and outputting a 1D array
function OneDArr(arr){
  for (var i = 0; i < arr.length; i++) {
    newArr = newArr.concat(arr[i])
    console.log(newArr);
  }
}

// A character is placed at each index of the passwordArray, with only the character families chosen by the user available for password generation
function generatePassword(arr) {
  for (var i = 0; i < passwordLength; i++){
    var randomCharacterIndex = Math.floor(Math.random() * newArr.length);
    console.log(randomCharacterIndex)
    console.log(newArr[randomCharacterIndex])
    passwordArray.push(newArr[randomCharacterIndex]);
  }
  return passwordArray.join(" ");
}

// When this function is activated, it begins the entire process of password generation from the point after the user determines the number of characters they want the password to be
function start() {
  letsBegin();
  writePassword();
  passwordArray=[];
  availableOptions = [];
  newArr = [];
return
}

// Add event listener to generate button
generateBtn.addEventListener("click", start);
