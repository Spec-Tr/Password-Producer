// Assignment Code

// Creates a js object called "generateBtn" and connects it with the HTML element with the ID of "generate" 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Creates a function triggered when event listener hears a click on the generateBtn object
function writePassword() {
  // Object that triggers generatePassword() when writePassword() is called
  var password = generatePassword();
  // Creates a js object called "passwordText" and connects it with the HTML element with the ID of "password" 
  var passwordText = document.querySelector("#password");
  // Points to the contents of the passwordText object (which are heretofore empty) and sets them to be the same as the password object
  passwordText.value = password;

}

// Creates a function triggered when writePassword() instantiates the password object it contains
function generatePassword() {
  // Master character set objects to hold options for character sets
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var numericChars = '0123456789';
  var specialChars = `'"!@#$%^&*()_+{}[]|/\;:,.<>?`;
  
  // Prompt to get user's desired password length, with statement to check if desired number meets specifications
  var passwordLength = parseInt(prompt("Choose a password length (between 8 and 128 characters):"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length (between 8 and 128 characters)");
    return "";
  }

  // Prompts to create a new object for each character set selected from the available options, with a check to ensure at least one character set is selected
  var includeUpperChars = confirm("Include uppercase characters?");
  var includeLowerChars = confirm("Include lowercase characters?");
  var includeNumericChars = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  if (!(includeUpperChars || includeLowerChars || includeNumericChars || includeSpecialChars)){
    alert("Must select at least one character type.");
    return "Try Again!";
  }
  // Creates a new selectedChars character set object with the results of the prompt sequence that contains all the selected character sets and excludes the unselected character sets
  var selectedChars = "";
  if (includeUpperChars) selectedChars += uppercaseChars;
  if (includeLowerChars) selectedChars += lowercaseChars;
  if (includeNumericChars) selectedChars += numericChars;
  if (includeSpecialChars) selectedChars += specialChars;

// Creates a newPassword object using selected character sets
  var newPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * selectedChars.length);
    var randomChar = selectedChars.charAt(randomNumber);
    newPassword += randomChar;
  }
  return newPassword;
}
// Add event listener to button generated from HTML element with ID of "generate"
generateBtn.addEventListener("click", writePassword);
