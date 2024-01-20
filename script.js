// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var numericChars = '0123456789';
  var specialChars = `'"!@#$%^&*()_+{}[]|/\;:,.<>?`;
  
  var passwordLength = parseInt(prompt("Choose a password length (between 8 and 128 characters):"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length (between 8 and 128 characters)");
    return "";
  }
  var includeUpperChars = confirm("Include uppercase characters?");
  var includeLowerChars = confirm("Include lowercase characters?");
  var includeNumericChars = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  if (!(includeUpperChars || includeLowerChars || includeNumericChars || includeSpecialChars)){
    alert("Must select at least one character type.");
    return "Try Again!";
  }
  
  var selectedChars = "";
  if (includeUpperChars) selectedChars += uppercaseChars;
  if (includeLowerChars) selectedChars += lowercaseChars;
  if (includeNumericChars) selectedChars += numericChars;
  if (includeSpecialChars) selectedChars += specialChars;

  var newPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * selectedChars.length);
    var randomChar = selectedChars.charAt(randomNumber);
    newPassword += randomChar;
  }
  return newPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
