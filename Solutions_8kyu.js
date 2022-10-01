/*8 kyu
N-th Power

This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.*/


function index(array, n){
    for (let i = 0; i <= array.length; i++) {
        if (n > array.length -1) {
            return -1
        } else if (i === n){
            return Math.pow(array[i], n)
        }
    }
  }




  function unusualFive() {
    let five = 'lalaa'
    return five.length
  }


  /*If you can't sleep, just count sheep!!

  If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.*/

const countSheep = function (num){
    let result='';
      for (let i=1; i<=num; i++){
        result += i.toString()+" sheep..."
      }
      return result
      }


      /*Grasshopper - If/else syntax debug
      If/else syntax debug
While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

The function receives one parameter health which will always be a whole number between -10 and 10.*/


function checkAlive (health) {
    if ( health <=0) {
      return false
    }else if (health > 0) {
      return true
    }
  }

  /*To square(root) or not to square(root)
  Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.*/


function squareOrSquareRoot(array) {
  
    for(let i=0; i<array.length; i++){
      array[i]=Math.sqrt(array[i])%1==0 ? Math.sqrt(array[i]) : Math.pow(array[i],2)
    }
    return array;  
  }

  /*Grasshopper - Grade book

  Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.*/


function getGrade(s1, s2, s3) {
	let result = (s1 + s2 + s3) / 3

	if (result >= 90) {
		return 'A'
	}

	if (result >= 80) {
		return 'B'
	}

	if (result >= 70) {
		return 'C'
	}

	if (result >= 60) {
		return 'D'
	}

	return 'F'
}


/*Do I get a bonus?
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).*/


function bonusTime(salary, bonus) {
    let result = salary;
  if(bonus==true){
    return "£" + result*10
  }else {
    return "£" + result
  }
  }


  /*The Wide-Mouthed frog!
  The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide

*/


function mouthSize(animal) {
    let result=animal.toLowerCase()
   if (result==="alligator"){
     return("small")
   } else {
     return("wide")
   }
  }

  /* Simple Fun #1: Seats in Theater

  Task
Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.

The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

Example
For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be

seatsInTheater(nCols, nRows, col, row) === 96*/


function seatsInTheater(nCols, nRows, col, row) {
    let result = (nCols-col+1)*(nRows-row)
    return result
  }

  /*Get Planet Name By ID

  The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"*/

function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
    
    return name;
  }

  /*Grasshopper - Check for factor

  This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.*/

function checkForFactor (base, factor) {
    if(base%factor===0){
      return true
    } else{
      return false
    }
    }

    /*Remove String Spaces

    Simple, remove the spaces from the string, then return the resultant string.*/

    function noSpace(x){
        str = x.replace(/\s+/g, '');
         return(str)
       }

       /*The Feast of Many Beasts
       All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.*/

function feast(beast, dish) {
    let res1=beast[0];
    let res2=beast[beast.length-1];
    let res3=dish[0];
    let res4=dish[dish.length-1];
      if (beast[0]===dish[0] && beast[beast.length-1]===dish[dish.length-1] ){
        return true
      } else {
        return false
      }
    }

    /*Grasshopper - Debug
    Debug celsius converter
Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

Find the errors in the code to get the celsius converter working properly.

To convert fahrenheit to celsius:

celsius = (fahrenheit - 32) * (5/9)
Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.*/


function convertToCelsius (temperature) {
    var celsius = (temperature - 32) * (5/9)
    return celsius;
  }
  
  function weatherInfo (temp) {
    var c = convertToCelsius(temp);
    if (c > 0)
      return (c + " is above freezing temperature")
    else
      return (c + " is freezing temperature")
  }


  /*Quarter of the year
  Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

*/


const quarterOf = (month) => {
    if (month<=3){
      return 1
    }else if (month>3 && month<=6){
      return 2
    }else if (month>6 && month<=9){
      return 3
    }else if (month>9 ){
      return 4
    }
    }

    /*Training JS #8: Conditional statement--switch
    Task
Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+
Tip: Using default for most of the cases can reduce your work.

When you have finished, click "Test" to test your code against initial tests and "Attempt" to test your code against all tests. If you pass in all tests you can click "Submit" to submit your code.*/


function howManydays(month){
    var days;
    switch (month){
     case 1:
        days=31;
        break;
     case 2:
        days=28;
        break;
        case 3:
        days=31;
        break;
        case 4:
        days=30;
        break;
         case 5:
        days=31;
        break;
         case 6:
        days=30;
        break;
         case 7:
        days=31;
        break;
        case 8:
        days=31;
        break;
         case 9:
        days=30;
        break;
        case 10:
        days=31;
        break;
         case 11:
        days=30;
        break;
        case 12:
        days=31;
        break;
    }
    return days;
  }

  /*Training JS #2: Basic data types--Number

  In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

Numbers can use operators such as + - * / %

Task
I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.*/


let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a = v3 , //set number value to a
      b = v1 ; //set number value to b
  return a - b;
}

function equal3(){
  let a = v1 , //set number value to a
      b = v5 ; //set number value to b
  return a * b;
}

function equal4(){
  let a = v4 , //set number value to a
      b = v5 ; //set number value to b
  return a / b;
}

function equal5(){
  let a = v6 , //set number value to a
      b = v3 ; //set number value to b
  return a % b;
}


/*For Twins: 1. Types
Prolog:
This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

Task:
Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

Examples:
42, "number"   --> true
"42", "number" --> false*/


function typeValidation(variable, type) {
    if (typeof variable==type ){
      return true
    }else{
      return false
    }
   }

   /*Beginner - Reduce but Grow
   Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24*/


function grow(x){
    let result= x.reduce((acc, rec) => acc * rec);
      return result;
    }

    /*Filling an array (part 1)

    We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.*/


function getArr(N) {
    let arr = []
    for (let i = 0; i < N; i++) {
        arr.push(i)
    }
    return arr
}

/*Switch/Case - Bug Fixing #6
Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?*/


function evalObject(value){
    var result=0 ;
    switch(value.operation){
      case'+': result = value.a + value.b;
        break;
      case'-': result = value.a - value.b;
        break;
      case'/': result = value.a / value.b;
        break;
      case'*': result = value.a * value.b;
        break;
      case'%': result = value.a % value.b;
        break;
      case'^': result = Math.pow(value.a, value.b);
        break;
    }
    return result;
  }