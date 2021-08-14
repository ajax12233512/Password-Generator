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
I assume that without the first argument in the for-loop, `i` will be set to `0`. I assume that is correct given that it would make since to make the function work. 