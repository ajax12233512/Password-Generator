// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Algorithm to generate password going here
function generatePassword(){
  var length = getLength();
  var password = [length];

  var lowercase = includeLowercase();
  var uppercase = includeUppercase()
  var specialChar = includeSpecialChar()

  var c1 = new Characters;
  var passwordList = c1.returnCharacterSet(uppercase, lowercase, specialChar);

  for(k = 0; k < length; k++)
  {
    password[k] = passwordList[Math.floor(Math.random() * passwordList.length)]
  }

  password = password.join('')
  return password;
}

//Was going to use these arrays but wanted to see if I could generate them instead
// lowercase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P'];



//Stored getCharArray and its generated arrays in one object
class Characters{

  uppercaseArray = this.genCharArray('A','Z');
  lowercaseArray = this.genCharArray('a', 'z');
  specialArray = this.genCharArray('!', '*');
  
  //this will return one array for the password to pull characters out of based on the criteria set by the user
  returnCharacterSet(uppercase, lowercase, special){
    var characterSet = [];
    
    if(lowercase === true){
      for(var k = 0; k < this.lowercaseArray.length; k++){
        characterSet.push(this.lowercaseArray[k]);
      }
    }

    if(uppercase === true){
      for(var k = 0; k < this.uppercaseArray.length; k++){
        characterSet.push(this.uppercaseArray[k]);
      }
    }

    if(special === true){
      for(var k = 0; k < this.specialArray.length; k++){
        characterSet.push(this.specialArray[k]);
      }
    }

    console.log(characterSet);
    return characterSet;
  }

  genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
  }
}





//Function for getting correct length
function getLength(){
  var length;
  var input = prompt("Enter length of password", "#");

  while(input !== parseInt(input, 10).toString() || (!(input >= 8 && input <= 128))){
    if(input !== parseInt(input, 10).toString()){
      alert("Please enter only numbers");
      input = prompt("Enter length of password", "#");
    } else {
      alert("Please enter values between 8-128");
      input = prompt("Enter length of password", "#");
    }
  }

  length = input;
  // console.log("The desired length is " + length);
  return length;
}

//Function to determine if user wants lowercase letters
function includeLowercase(){
  let include; 
  include = prompt("Do you want lowercase in the password?", "Please enter yes or no");
  while(!(include == "yes" || include == "no")){
    alert("Please Enter 'yes' or 'no'");
    include = prompt("Do you want lowercase in the password?", "Please enter yes or no");
  }

  if(include == "no")
    return false;
  else 
    return true;
}

//function to determine if user wants uppercase letters
function includeUppercase(){
  let include; 
  include = prompt("Do you want uppercase in the password?", "Please enter yes or no");

  while(!(include == "yes" || include == "no")){
    alert("Please Enter 'yes' or 'no'");
    include = prompt("Do you want uppercase in the password?", "Please enter yes or no");
  }

  if(include == "no")
    return false;
  else 
    return true;
}

//function to determine if user wants special characters
function includeSpecialChar(){
  let include; 
  include = prompt("Do you want special characters in the password?", "Please enter yes or no");

  while(!(include == "yes" || include == "no")){
    alert("Please Enter 'yes' or 'no'");
    include = prompt("Do you want special characters in the password?", "Please enter yes or no");
  }

  if(include == "no")
    return false;
  else 
    return true;
}







