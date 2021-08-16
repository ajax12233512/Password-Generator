# Password-Generator
Generates a password based on certain citeria based on user input
# 8/13/21 Start
Just opened the starter code. Going to make first commit and check if all the CSS loaded correctly before I start any javascript.
## First Commit looks good
So I'm thinking of ways to neatly prompt the user to input the criteria for the password. Im thinking of making little tags that will aks the user to put in the criteria. That would Nessesitate the use for a `createElement` or something. When looking at the script.js, I notice that it has an undefined function names `generatePassword()`. I'll start in there and see what I can think of. 
````Javascript
//Algorithm to generate password going here
function generatePassword(){
  return 'hi';
}
````
## 12:53am 8/14/21 So I've comme across an intereting concept
As I was thinking of different ways to generate arrays of of the aplphebet, I wondered if there was a way to do it without hardcoding all the letter. I did some searching and after hours of research I think I've figured it out:
````Javascript
function genCharArray(charA, charZ) {
  var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
      a.push(String.fromCharCode(i));
      console.log(i);
      console.log(j);
  }
  return a;
}
console.log(genCharArray('a', 'z')); // ["a", ..., "z"]
console.log(genCharArray('A', 'Z'));

````
This code above will console.log all the letter in the alphebet(both uppercase and lower case). I found this solution on stackoverflow: https://stackoverflow.com/questions/24597634/how-to-generate-an-array-of-alphabet-in-jquery/24597663. And I decided to research what the `.String.charCodeAt()` and `String.fromCharToCode()` meant. I found my answer at MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode. Basically, the way I understood it, there are UTF-16 values associated with different characters of the alphebet and more. `String.charCodeAt()` will return the code of a string at the index given in the parameter. We get the charCode at the indexes of 'a' and 'z' for example and that will return the UTF-16 number that we need to start the loop at. In the for-loop, I'm still not sure how this statement works:
````Javascript
 for (; i <= j; ++i) 
````
I assume that without the first argument in the for-loop, `i = charA.charCodeAt(0)`. I assume that is correct given that it would make since to make the function work. And since it is difined as so above the for-loop

----

## 8/15/21
As I was breaking down the project into more manegable pieces, I was focusing on validating the values entered by a user when they are prompted for a the length of the desired password. Well, I was going through, I first thought of using an if-statement like so:
````Javascript

  while(!(input >= 8 && input <= 128)){
     alert('Please enter values between 8 and 128');
     input = prompt("Enter length of password");
 }
````
I also had another if-statement that uses a `parseInt()` and `toString()` method to be able to check whether the integer would equal itself if it was parsed into an int. Given that the prompt always returns a string, thought this methods was the easiest. 
````Javascript
while(input !== parseInt(input, 10).toString()){
    alert("Please enter only numbers");
    input = prompt("Enter length of password", "#");
  }
````

I decided to just combine the two statements into one whole while-statement. I added two if-statements within those to capture the correct errors that the user types into the prompt.

````Javascript
while(input !== parseInt(input, 10).toString() || (!(input >= 8 && input <= 128))){
    if(input !== parseInt(input, 10).toString()){
      alert("Please enter only numbers");
      input = prompt("Enter length of password", "#");
    } else {
      alert("Please enter values between 8-128");
      input = prompt("Enter length of password", "#");
    }
  }
````
After some more work, I was able to create a function that is able to return whether or not the user intends on having lowercase in their password. This structure may help me save time on building the other criteria
````Javascript
function includeLowercase(){
  let include; 
  include = prompt("Do you want lowercase in the password", "Please enter yes or no");
  while(!(include == "yes" || include == "no")){
    alert("Please Enter 'yes' or 'no'");
    include = prompt("Do you want lowercase in the password", "Please enter yes or no");
  }

  if(include == "no")
    return false;
  else 
    return true;
}
````
### 8/15/21 9:01PM
So since my last entry I was able to verify input from the user for all other inputs using the template outlined above. In addition to that, I changed my code a bit to make it more organized (Or so I think so). Basically, I created an object called `Characters` and when I need to evoke any information about the letters or symbols, I put all references to those in this object:
````Javascript
class Characters{

  uppercaseArray = this.genCharArray('A','Z');
  lowercaseArray = this.genCharArray('a', 'z');
  specialArray = this.genCharArray('!', '*');
  
  //this will return one array for the password to pull characters out of based on the criteria set by the user
  returnCharacterSet(uppercase, lowercase, special){
    let characterSet = [];
    if(uppercase === true){
      characterSet += (this.lowercaseArray);  
      console.log(characterSet);
    }

    if(lowercase === true){
      characterSet += (this.uppercaseArray);
      console.log(characterSet);
    }

    if(special === true){
      characterSet += (this.specialArray);
      console.log(characterSet);
    }

    console.log(characterSet);
  }

  genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
  }
}
````
I added a method to this class called `returnCharacterSet`. This will probably be refactored soon but the basic idea of it is to return an array that contains all the letters that can be included in the password that the user wants. I just finished creating it and will probably change somethings later. 

In order to keep the array data type, we have to change the `returnCharacterSet` to use `.push()` instead.
````Javascript
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
````
