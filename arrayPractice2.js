  // Let's consider an array of names:

   let names = ['Hermione', 'Harry', 'Ron'];
  
  // Access 'Harry' in the array and log to the console.

  // console.log(names[1]);

  // Access the length of 'Hermione' in the array and log to console.

  // console.log(names[0].length);

  // Access the index of letter 'y' in Harry.

  // console.log(names[1].indexOf('y'));

  // Log the substring of 'Hermione' from index 3 to 6.

  // console.log(names[0].substring(3, 6));

  // Log all elements of the array iteratively.

  // for (let i = 0; i < names.length; i++) {
  //   console.log(names[i]);
  // }

  // Log all letters of 'Hermione' iteratively.
  // let names = ['Hermione', 'Harry', 'Ron'];

  // for (let i = 0; i < names[0].length; i++) {
  //   console.log(names[0][i]);
  // }

  // Log all letters of 'Hermione' iteratively backwards.

  // for (let i = names[0].length - 1; i > -1; i--) {
  //   console.log(names[0][i]);
  // }

  // Log each character of a reversed 'Harry'.

  // for (let i = names[1].length - 1; i > -1; i--) {
  //     console.log(names[1][i]);
  //   }

  // Iterate through elements of the array from the second element to the last.

  // for (let i = 1; i < names.length; i++) {
  //   console.log(names[i]);
  //   }

  // Iterate through all letters of all elements of the array.

  for (let i = 0; i < names.length; i++){
    for (let j = 0; j < names[i].length; j++) {
        console.log(names[i][j]);
    }
  }
  // What are the 7 primitive data types and give an example of each
  primitives take up a singular place in memory - think of them like a single thing like a single piece on a chess board like a pawn

  JavaScript has seven types. Types are values that JavaScript can have. Below is a list of data types that JavaScript can have:
/*
Number- A number data type can be an integer, a floating point value, an exponential value, a ‘NaN’ or a ‘Infinity’.

var a=250;  // integer value
var b=25.5;  // a number containing a decimal 
var c = 10e4 //  an exponential value which evaluates to 10*10000;
 

There are special numeric values e.g. NaN and Infinity.

If a number is divided by 0, the resulting value is infinity.

5/0;    // results in infinity
The type of infinity is a number
typeof(infinity);   // returns number
 

A ‘NaN’ results when we try to perform an operation on a number with a non-numeric value

‘hi’ * 5; // returns NaN
typeof(NaN);  // returns a number

We can also create a number literal by using the Number() function:

var c = Number(5); 
console.log(c);  // This will return 5
 

We can create a number object using the ‘new’ operator and the Number() constructor:

var num1= new Number(5);
console.log(num1); // This will return 5
typeof(num1); // This will return ‘number’
*/

/*
String- The string data type in JavaScript can be any group of characters enclosed by a single or double-quotes or by backticks.

var str1 = “This is a string1”;  // This is a string primitive type or string literal
var str2= ‘This is a string2’;
var str3 = `This is a string3`;
 

Alternatively, we can use the String() function to create a new string.

var str4 = String(‘hi’);  // This creates a string literal with value ‘hi’
 

The String() function is also used to convert a non-string value to a string.

String(4); // This statement will create a string ‘4’
Like the ‘number’ and the ‘boolean’ data types, a ‘String’ object can be created using the ‘new’ operator:

var str5= new String(“hello”);  // This is a string object
console.log(str4); // This will return the string ‘hello’

*/

/*
Boolean- The boolean data type has only two values, true and false. It is mostly used to check a logical condition. Thus Booleans are logical data types which can be used for comparison of two variables or to check a condition. The true and false implies a ‘yes’ for ‘true’ and a ‘no’ for ‘false in some places when we check a condition or the existence of a variable or a value.

When we check the data type of ‘true’ or ‘false’ using typeof operator, it returns a boolean.

typeof(true) // returns boolean
typeof(false) // returns boolean
 

Let’s see an example of comparison statement:

var a =5;
var b=6;
a==b // returns false
 

A boolean value is also used to check a condition in an expression:

If(a<b){
alert(a is a smaller number than b);
}
If the above condition ‘a<b’ is true, the alert will pop on the screen.

 

We can create a new Boolean variable using the Boolean() function.

var check = Boolean(expression);  // If the expression evaluates to true, the value of ‘check’ will be true or else it will be false.
var check = Boolean(a<b); // the expression evaluates to true, thus the value of check will be true.
The Boolean() function converts a non-boolean value to a boolean value.

var mystring = ‘hi there’;
Boolean(mystring); // This will result in true because the ‘mystring’ value exists.
 

 

A Boolean object can be created using the new operator.

var booleanobj = new Boolean(true);
Here ‘boolleanobj’ is a Boolean object.

Though we can create an object of the primitive data types, ‘number’,’boolean’ and ‘number’ it is advisable or good practice to use the primitive version of these types.
*/

/*
Undefined- Undefined data type means a variable that is not defined. The variable is declared but doesn’t contain any value.

var a;
console.log(a); // This will return undefined.
The variable ‘a’ has been declared but hasn’t been assigned a value yet.
We can assign a value to a:

a=5;
console.log(a); // This will return 5


It is a non-writable, non-enumerable and non-configurable primitive vale in javascript which represents that the object is not assigned any value yet. The default value of any object is undefined. Let’s see an example of it.

Code:

<!DOCTYPE html>
<html>
<head>
<title>Undefined Primitive value Demonstration</title>
</head>
<body>
<h1>Undefined Primitive value Demonstration</h1>
<script>
let anyDeclaredVariable;
document.write("<br/>Any declared variable which is not initialized holds the value "+anyDeclaredVariable);
</script>
</body>
</html>
*/

/*
Null- The null in JavaScript is a data type that is represented by only one value, the ‘null’ itself. A null value means no value.

Something like this:

var a = null;
console.log(a);   // This returns null
If we check the data type of a using the typeof operator, we get:

typeof(a);         // This returns object
This means the type of a null value is an object, not null.

This datatype has only one possible null value. A null value means that an object is absent for that variable/object where it is assigned.


*/

/*
BigInt- The Number data type has some safe integer limit. However, by using BigInt, we can represent integers with arbitrary precision and beyond the safe integer limit. We can use BigInt by either passing it as a parameter to BigInt or appending n at the end of a numeric value. Let us see an example of the same.

Code:

<!DOCTYPE html>
<html>
<head>
<title>BigInt Primitive value Demonstration</title>
</head>
<body>
<h1>BigInt Primitive value Demonstration</h1>
<script>
let sample = 2n ** 53n;
let demo = sample + 1n;
document.write("<br/>When BigInt is used and the value of sample is  "+sample);
document.write("<br/>When 1 is added to BigInt sample value then it results in "+demo);
let sample2 = 2 ** 53;
let demo2 = sample2 + 1;
document.write("<br/>When Number is used and the value of sample is  "+sample2);
document.write("<br/>When 1 is added to Number sample2 value then it results in "+demo2);
</script>
</body>
</html>
*/

/*
Symbol- The ‘symbol’ data type is new in es6. It is one of the new features of es6. The symbol data type defines a property of an object which is private to the object. It refers to the ‘key’ of the key-value pair of an object.

var object1 = {
   name: ‘Shalini’,
   age: 25,
   city: ‘Mumbai’
}
var occupation=Symbol(‘engineer’);
The function Symbol() is used to create a new symbol. Here we have created a symbol ‘occupation’ with the value ‘engineer’ for the above object ‘object1’.

Every symbol is unique. Two Symbols even with the same key values are not same.

var occupation=Symbol(‘engineer’); 
var occupation=Symbol();
occupation===occupation // returns false. Thus both the above ‘occupation’ symbols are different. Each one is a unique property of the object.

 

We cannot create a symbol object using the ‘new’ operator because the Symbol() cannot be used as a constructor.

The string description inside Symbol() function is optional.
Checking the type of ‘occupation’ symbol:

typeof(occupation);  // returns symbol
*/

The ‘Symbol’ data type is new in JavaScript. It has been included in the ES6 version. We can find the type of value or data by using the ‘typeof’ JavaScript operator. The above data types in JavaScript are divided into two broad categories, primitive and non-primitive.

The Primitive Data types in JavaScript include Number, String, Boolean, Undefined, Null and Symbol.


  // What are the 3 non-primitive types and give an example of each
  non-primitives are structures that take up multiple places in memory - think of them like complex chess strategies. A knight forking a king in a rook, a bishop pinning a queen to a king.

// Object: {name: 'John', age: 30}
// Array: [1, 2, 3]
// Function: function add(a, b) {return a + b}

  The Non-Primitive data type has only one member i.e. the Object.