/*You will be given a function, isFibo, which will take three arguments: a, b and f.

a is the first term of a Fibonacci sequence, b is the second term of this sequence ( it will always be bigger than or equal to a and they'll be both always positive, so don't worry about pesky input checking ) and f is a number which you'll need to check whether or not is a part of this Fibonacci sequence.

Good luck, muh fellow coding warrior.*/


function isFibo(a, b, f) {
  let arr = [a, b];
  for (let i = 1; i <= f; i++) {
    arr.push(arr[i - 1] + arr[i]);
  }
  return arr.includes(f);
}




/* A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

    In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:
    
    "not picking" --> "pot nicking"
    
    Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example.
    
    NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.
    
    Once you have completed this kata, a slightly more challenging take on the idea can be found here:*/




function spoonerize(words) {
  let [first, second] = words.split(' ');
  let result1 = first.replace(first[0], second[0]);
  let result2 = second.replace(second[0], first[0]);
  let result3 = result1 + ' ' + result2;
  return result3;

}

/*Spoonerize... with numbers... numberize?... numboonerize?... noonerize? ...anyway! If you don't yet know what a spoonerism is and haven't yet tried my spoonerism kata, please do check it out first.

You will create a function which takes an array of two positive integers, spoonerizes them, and returns the positive difference between them as a single number or 0 if the numbers are equal:

[123, 456] = 423 - 156 = 267
Your code must test that all array items are numbers and return "invalid array" if it finds that either item is not a number. The provided array will always contain 2 elements.

When the inputs are valid, they will always be integers, no floats will be passed. However, you must take into account that the numbers will be of varying magnitude, between and within test cases.*/


function noonerize(numbers) {
  if (numbers.some(isNaN)) {
    return "invalid array"
  } else {
    let result1 = numbers.join(" ");
    let [first, second] = result1.split(' ');
    let result2 = Number(first.replace(first[0], second[0]));
    let result3 = Number(second.replace(second[0], first[0]));
    let result4 = Math.abs(result2 - result3);
    return result4;
  }
}

/*Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]*/


function evenNumbers(array, number) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArr.push(array[i]);
    }
  }
  let result = newArr.slice(-number);
  return result;
}


/*Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array/list [] of integers , Find the Nth smallest element in this array of integers

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

Input >> Output Examples
nthSmallest({3,1,2} ,2) ==> return (2) 
Explanation:
Since the passed number is 2 , Then * the second smallest element in this array/list is 2*

nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
Explanation:
Since the passed number is 3 , Then * the third smallest element in this array/list is 7*

nthSmallest({2,169,13,-5,0,-1} ,4) ==> return (2) 
Explanation:
Since the passed number is 4 , Then * the fourth smallest element in this array/list is 2*

nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 
Explanation:
Since the passed number is 5 , Then * the fifth smallest element in this array/list is 92**/

function nthSmallest(arr, pos) {
  let result = arr.sort((a, b) => a - b);
  return result[pos - 1];
}

//Small enough? - Beginner

/*You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.*/

function smallEnough(a, limit) {
  let result = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] > result) {
      result = a[i]
    }
  }
  if (result <= limit) {
    return true;
  } else {
    return false;
  }
}


//The Office VI - Sabbatical
/*Learning to code around your full time job is taking over your life. You realise that in order to make significant steps quickly, it would help to go to a coding bootcamp in London.

Problem is, many of them cost a fortune, and those that don't still involve a significant amount of time off work - who will pay your mortgage?!

To offset this risk, you decide that rather than leaving work totally, you will request a sabbatical so that you can go back to work post bootcamp and be paid while you look for your next role.

You need to approach your boss. Her decision will be based on three parameters:

val = your value to the organisation
happiness = her happiness level at the time of asking and finally
The numbers of letters from 'sabbatical' that are present in string s.

Note that if s contains three instances of the letter 'l', that still scores three points, even though there is only one in the word sabbatical.

If the sum of the three parameters (as described above) is > 22, return 'Sabbatical! Boom!', else return 'Back to your desk, boy.'.*/

function sabb(s, val, happiness) {
  let repl = s.replace(/[sabticl]/gi, '');
  let result = s.length - repl.length
  let summ = result + val + happiness;
  if (summ > 22) {
    return 'Sabbatical! Boom!';
  } else {
    return 'Back to your desk, boy.';
  }

}



/*Double Every Other

Write a function that doubles every second integer in a list, starting from the left.

Example:

doubleEveryOther([1,2,3,4]) => [ 1, 4, 3, 8 ]*/

function doubleEveryOther(a) {
  for (i = 1; i < a.length; i += 2) {
    a[i] = a[i] * 2
  }
  return a;
}

/*Double Trouble
Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

Work through the array from left to right.

Return the resulting array.*/

function trouble(x, t) {

  let sum = [];
  for (let i = 0; i <= x.length; i++) {
    if (x[i] + x[i + 1] === t) {
      x.splice(i + 1, 1);
      i--;
    }
  }
  return x;
}

/*Row Weights
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.*/

function rowWeights(array) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < array.length; i += 2) {
    sum1 += array[i];
  }
  for (let j = 1; j < array.length; j += 2) {
    sum2 += array[j];
  }
  let result = [sum1, sum2];
  return result;
}

/*Paul's Misery
Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1
The Misery Score is the total points gained from the array. Once you have the total, return as follows:

< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!'*/


function paul(x) {
  2
  let miseryArr = []
  3
  for (let i = 0; i < x.length; i++) {
    4
    if (x[i] === 'kata') {
      5
      miseryArr.push(5)
      6
    } else if (x[i] === "Petes kata") {
      7
      miseryArr.push(10)
      8
    } else if (x[i] === "life") {
      9
      miseryArr.push(0)
      10
    } else if (x[i] === "eating") {
      11
      miseryArr.push(1)
      12
    }
    13
  } console.log(miseryArr)
  14
  let sumMisery = miseryArr.reduce((acc, c) => acc + c, 0)
  15
  if (sumMisery < 40) {
    16
    return 'Super happy!'
    17
  } else if (sumMisery < 70) {
    18
    return 'Happy!'
    19
  } else if (sumMisery < 100) {
    20
    return 'Sad!'
    21
  } else {
    22
    return 'Miserable!'
    23
  }
  24
}


/*JavaScript Array Filter
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]*/

function getEvenNumbers(numbersArray) {
  let result = numbersArray.filter(n => n % 2 === 0);
  return result;
}

/*Stanton measure

The Stanton measure of an array is computed as follows: count the number of 1s in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

Write a function which takes an integer array and returns its Stanton measure.

Examples
The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.*/

function stantonMeasure(array) {
  let amount = array.filter(x => x === 1).length;
  let result = array.filter(x => x === amount).length;
  return result;
}


/*Scoring Tests

A new school year is approaching, which also means students will be taking tests.

The tests in this kata are to be graded in different ways. A certain number of points will be given for each correct answer and a certain number of points will be deducted for each incorrect answer. For ommitted answers, points will either be awarded, deducted, or no points will be given at all.

Return the number of points someone has scored on varying tests of different lengths.

The given parameters will be:

An array containing a series of 0s, 1s, and 2s, where 0 is a correct answer, 1 is an omitted answer, and 2 is an incorrect answer.
The points awarded for correct answers
The points awarded for omitted answers (note that this may be negative)
The points deducted for incorrect answers (hint: this value has to be subtracted)
Note: The input will always be valid (an array and three numbers)

Examples
#1:

[0, 0, 0, 0, 2, 1, 0], 2, 0, 1  -->  9
because:

5 correct answers: 5*2 = 10
1 omitted answer: 1*0 = 0
1 wrong answer: 1*1 = 1
which is: 10 + 0 - 1 = 9

#2:

[0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)  -->  3
because: 4*3 + 3*-1 - 3*2 = 3*/

function scoreTest(str, right, omit, wrong) {
  let correct = str.filter(x => x === 0).length;
  let empty = str.filter(x => x === 1).length;
  let incorrect = str.filter(x => x === 2).length;
  return (correct * right) + (empty * omit) - (incorrect * wrong)
}


/*The highest profit wins!
Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples
minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.*/

function minMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max];

}

/*
Scrolling Text
Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
"ODEWARSC",
"DEWARSCO",
"EWARSCOD",
"WARSCODE",
"ARSCODEW"
"RSCODEWA",
"SCODEWAR" ]*/


function scrollingText(text) {
  let result = []

  for (var i = 0; i < text.length; i++) {
    result.push((text.slice(i) + text.slice(0, i)).toUpperCase())
  }

  return result
}

/*Pyramid Array
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s*/

function pyramid(n) {
  let result = []
  for (let i = 0; i < n; i++) {
    result.push(Array(i + 1).fill(1));
  }
  console.log(result);
}

/*Sum of two lowest positive integers
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.*/

function sumTwoSmallestNumbers(numbers) {
  numbers.sort(function (a, b) { return a - b; });
  return (numbers[0] + numbers[1]);
}



/*Sum of Minimums!
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)*/

function sumOfMinimums(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    min = arr[i][0];
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < min) {
        min = arr[i][j];
      }
    }
    sum += min;
  }
  return (sum);
}


/*Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index. If there is no such index, return -1. If there is more than one such index, return the left-most index.

For example:

--For Haskell
peak [1,12,3,3,6,3,1] == Just 2
peak [10,20,30,40]  == Nothing 
The special case of an array of zeros (for instance [0,0,0,0]) will not be tested.

More examples in the test cases.

Good luck!*/

function peak(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    let left = arr.slice(0, i);
    let right = arr.slice(i + 1);
    let sumLeft = left.reduce((sum, current) => sum + current, 0);
    let sumRight = right.reduce((sum, current) => sum + current, 0);
    if (sumLeft === sumRight) {
      return i;
    }
  }
  return -1;
}

/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]*/

var number = function (array) {
  let result = array.map((item, index) => `${index + 1}: ${item}`);
  return result;
}

/*What a "Classy" Song

Your job is to create a class called Song.

A new Song will take two parameters, title and artist.

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

mountMoose.title => 'Mount Moose'
mountMoose.artist => 'The Snazzy Moose'
You will also have to create an instance method named howMany() (or how_many()).

The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".

Example
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// day 1 (or test 1)
mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']); => 5
// These are all new since they are the first listeners.

// day 2
mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']); => 2
// Luke and Amanda are new, john already listened to it the previous day
Also if the same person listened to it more than once a day it should only count them once.

Example
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// day 1
mountMoose.howMany(['John', 'joHN', 'carl']); => 2
Good luck!*/

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.result = [];
  }
  howMany(people) {
    let amount = 0;
    let result = people.map(x => x.toLowerCase());
    result.forEach(p => {
      if (!this.result.includes(p)) {
        this.result.push(p);
        amount++;
      }
    })
    return amount;
  }
}


/*Slope of a Line

Task
Your challenge is to write a function named getSlope/get_slope/GetSlope that calculates the slope of the line through two points.

Input
Each point that the function takes in is an array 2 elements long. The first number is the x coordinate and the second number is the y coordinate. If the line through the two points is vertical or if the same point is given twice, the function should return null/None.*/

function getSlope(p1, p2) {
  if (p1[0] - p2[0] === 0) {
    return null;
  } else {
    return (p2[1] - p1[1]) / (p2[0] - p1[0])
  }
}

/*7 kyu
Find the divisors!
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"*/

function divisors(integer) {
  let result = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      result.push(i)
    }
  }
  if (result.length === 0) {
    return (`${integer} is prime`)
  } else {
    return result;
  }
};

/*Get the Middle Character 7kyu
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.*/


function getMiddle(s) {
  if (s.length % 2 === 1) {
    return s[Math.floor(s.length / 2)]
  } else {
    return (s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)])
  }
}



/*Hello World - Without Strings
You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

You cannot use the following:

"Hello, World!"
'Hello, World!'
`Hello, World!`
Good luck and try to be as creative as possible! */

const helloWorld = () => {
  let result=String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33);
  return result;
};

/*Vowel Count
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
  let vowelsCount = 0;
  let vowels= ['a', 'e', 'i', 'o', 'u'];
  let array=str.split('');

  
  for (let i=0; i<array.length; i++){
    for (let j=0; j<vowels.length; j++){
      if (array[i]===vowels[j]){
       vowelsCount++; 
      }
    }
  }
  
  return (vowelsCount) ;
}


/*Robinson Crusoe 
Robinson Crusoe decides to explore his isle. On a sheet of paper he plans the following process.

His hut has coordinates origin = [0, 0]. From that origin he walks a given distance d on a line that has a given angle ang with the x-axis. He gets to a point A. (Angles are measured with respect to the x-axis)

From that point A he walks the distance d multiplied by a constant distmult on a line that has the angle ang multiplied by a constant angmult and so on and on.

We have d0 = d, ang0 = ang; then d1 = d * distmult, ang1 = ang * angmult etc ...

Let us suppose he follows this process n times. What are the coordinates lastx, lasty of the last point?

The function crusoe has parameters;

n : numbers of steps in the process
d : initial chosen distance
ang : initial chosen angle in degrees
distmult : constant multiplier of the previous distance
angmult : constant multiplier of the previous angle
crusoe(n, d, ang, distmult, angmult) should return lastx, lasty as an array or a tuple depending on the language.

Example:
crusoe(5, 0.2, 30, 1.02, 1.1) ->

The successive x are : 0.0, 0.173205, 0.344294, 0.511991, 0.674744, 0.830674 (approximately)

The successive y are : 0.0, 0.1, 0.211106, 0.334292, 0.47052, 0.620695 (approximately)

and

lastx: 0.8306737544381833
lasty: 0.620694691344071
A drawing:
alternative text

Successive points:

x: 0.0, 0.9659..., 1.8319..., 2.3319..., 1.8319...
y: 0.0, 0.2588..., 0.7588..., 1.6248..., 2.4908...
Note
Please could you ask before translating?*/


function crusoe(n, d, ang, distmult, angmult) {
  let lastX=0;
   let lastY=0;
   ang = ang * Math.PI / 180
   for(i=0; i<n; i++){
     lastX+=Math.cos(ang)*d;
     lastY+=Math.sin(ang)*d;
     d*=distmult;
     ang*=angmult;
   }
   return [lastX, lastY]
 }

 /* Evens and Odds
 
 This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.*/

function evensAndOdds(num){

  if (num % 2===0){
    return (num.toString(2))
  } else {
    return (num.toString(16))
  }
  
}

/*Target Date 
You have an amount of money a0 > 0 and you deposit it with an interest rate of p percent divided by 360 per day on the 1st of January 2016. You want to have an amount a >= a0.

Task:
The function date_nb_days (or dateNbDays...) with parameters a0, a, p will return, as a string, the date on which you have just reached a.

Example:
date_nb_days(100, 101, 0.98) --> "2017-01-01" (366 days)

date_nb_days(100, 150, 2.00) --> "2035-12-26" (7299 days)

Notes:
The return format of the date is "YYYY-MM-DD"
The deposit is always on the "2016-01-01"
Don't forget to take the rate for a day to be p divided by 36000 since banks consider that there are 360 days in a year.
You have: a0 > 0, p% > 0, a >= a0*/

function dateNbDays(a0, a, p) {
	let count=0;
  for(let i=0;a0<=a;i++)
  {
  count++
  a0+=a0*(p/100/360)
  }
  let date = new Date(2016, 0);
  date.setDate(date.getDate() + count);
  return (date.toISOString().slice(0,10));
  
}

/*"Very Even" Numbers.
Description:

#Task:

Write a function that returns true if the number is a "Very Even" number.

If a number is a single digit, then it is simply "Very Even" if it itself is even.

If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".

#Examples:

input(88) => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 

input(222) => returns true

input(5) => returns false

input(841) => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
Note: The numbers will always be 0 or positive integers!*/

function isVeryEvenNumber(n) {

  if(n<10 && n%2===0){
    return true ;
  } else if (n>=10) {
    let array = [...n.toString()].map(Number);
    //console.log(array);
    let result = array.reduce((sum, current) => sum + current, 0);
    //console.log(result);
    if (result%2===0){
      return true;
    } else {
      return false;
    }
  
  } else {
    return false;
  }
}


/*Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)*/

function isIsogram(str){
  let str1=str.toLowerCase();
  for (let i=0; i<str1.length; i++){
    for(let j=i+1; j<str1.length; j++){
      if(str1[i]===str1[j]){
        return false;
      }
    }
  } 
   return true;
 }

 /*Reverse words
 Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

function reverseWords(str) {
  let newString="";
  for(let i=str.length-1; i>=0; i--){
    newString+=str[i];
  }
  let result=newString.split(" ").reverse().join(" ");
  return (result);
}


/*Valid Spacing
Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:

* 'Hello world'   => true
* ' Hello world'  => false
* 'Hello world  ' => false
* 'Hello  world'  => false
* 'Hello'         => true

Even though there are no spaces, it is still valid because none are needed:
* 'Helloworld'    => true
* 'Helloworld '   => false
* ' '             => false
* ''              => true
Note - there will be no punctuation or digits in the input string, only letters. */

function validSpacing(s) {
  return s.trim() == s && !s.includes("  ");
}


/*Frequency sequence
Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1" */

function freqSeq(str, sep) {
  let arr=str.split('');
 let arr2= arr.map((v, i, arr) => arr.filter(vi => vi === v).length);
let result=arr2.join(sep);
return (result);
}

/*Growth of a Population
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02. */

function nbYear(p0, percent, aug, p) {
  let percentR=percent/100;
    let years=0;
    for(let i=0; p0<p; i++){
      years++;
      p0+=Math.floor(p0*percentR+aug);
    }
    return (years) ;
  }

  /*V A P O R C O D E
  ASC Week 1 Challenge 4 (Medium #1)

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

Note that spaces should be ignored in this case.

Examples
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I */

function vaporcode(string) {
  let Upper=string.toUpperCase().replace(/\s+/g,'');
  let result=Upper.split('').join('  ');
  return (result);
}

/*Guess the Sequence
You have read the title: you must guess a sequence. It will have something to do with the number given.

Example
x = 16

result = [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]
Good luck! */

function sequence(x) {
  let result=[];
  
  for (let i=1; i<=x; i++){
      result.push(i);
  }
  let arr=result.sort();
  return (arr);
}

/*Describe the shape
You will be given the number of angles of a shape with equal sides and angles, and you need to return the number of its sides, and the measure of the interior angles.

Should the number be equal or less than 2, return:

"this will be a line segment or a dot"
Otherwise return the result in the following format:

"This shape has s sides and each angle measures d"
(replace s with number of sides and d with the measure of the interior angles).

Angle measure should be floored to the nearest integer.

Number of sides will be tested from 0 to 180.

Have Fun! */

function describeTheShape( angles ){
  let y=Math.floor(180*(angles-2)/angles)
  if (angles<=2){
    return ("this will be a line segment or a dot")
  } else {
    return (`This shape has ${angles} sides and each angle measures ${y}`)
  }
 }

 /* Tap Code Translation
 Tap Code Translation
Tap code is a way to communicate using a series of taps and pauses for each letter. In this kata, we will use dots . for the taps and whitespaces for the pauses.

The number of taps needed for each letter matches its coordinates in the following polybius square (note the c/k position). Then you "tap" the row, a pause, then the column. Each letter is separated from others with a pause too.

   1  2  3  4  5
1  A  B C\K D  E
2  F  G  H  I  J
3  L  M  N  O  P
4  Q  R  S  T  U
5  V  W  X  Y  Z
Input:
A lowercase string of a single word (no whitespaces or punctuation, only letters).

Output:
The encoded string as taps and pauses.

Examples
text = "dot"
  "D" = (1, 4) = ". ...."
  "O" = (3, 4) = "... ...."
  "T" = (4, 4) = ".... ...."
  
output: ". .... ... .... .... ...."


"example" -> ". ..... ..... ... . . ... .. ... ..... ... . . ....."
"more"    -> "... .. ... .... .... .. . ....."
Happy coding!*/

function tapCodeTranslation(text) {
  let Code='';
 for(let i=0; i<text.length; i++){
   switch (text[i]) {
      case 'a':
      case 'b':
      case 'c':
      case 'k':
      case 'd':
      case 'e':
        Code += '. '
        break;
      case 'f':
      case 'g':
      case 'h':
      case 'i':
      case 'j':
        Code += '.. '
        break;
      case 'l':
      case 'm':
      case 'n':
      case 'o':
      case 'p':
        Code += '... '
        break;
      case 'q':
      case 'r':
      case 's':
      case 't':
      case 'u':
        Code += '.... '
        break;
      case 'v':
      case 'w':
      case 'x':
      case 'y':
      case 'z':
        Code += '..... '
        break;
    }
    switch (text[i].toLowerCase()) {
      case 'a':
      case 'f':
      case 'l':
      case 'q':
      case 'v':
        Code += '. '
        break;
      case 'b':
      case 'g':
      case 'm':
      case 'r':
      case 'w':
        Code += '.. '
        break;
      case 'c':
      case 'k':
      case 'h':
      case 'n':
      case 's':
      case 'x':
        Code += '... '
        break;
      case 'd':
      case 'i':
      case 'o':
      case 't':
      case 'y':
        Code += '.... '
        break;
      case 'e':
      case 'j':
      case 'p':
      case 'u':
      case 'z':
        Code += '..... '
        break;
    }
  }
  return (Code.trim());
 }



 /*Least Larger
 Task
Given an array of numbers and an index, return the index of the least number larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Example
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1 */

function leastLarger(a,i) {
  let max = a.filter((v) => v > a[i]);
  let result= max.sort((a, b) => a - b);
  return a.lastIndexOf(result[0]);
}

/*Age in days
Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthday is given in the following order: year, month, day.

For example if today is 30 November 2015 then

ageInDays(2015, 11, 1) returns "You are 29 days old"
The birthday is expected to be in the past.

Suggestions on how to improve the kata are welcome! */

function ageInDays(year, month, day){
  let birthday = new Date().getTime();
  let currentDate=new Date(year,month-1,day).getTime()
  let days=Math.floor((birthday-currentDate) / (1000 * 3600 * 24))
  return (`You are ${days} days old`)
}

/*Battle of the characters (Easy)
Description:
Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
  battle("ONE", "TWO"); // => "TWO"`
  battle("ONE", "NEO"); // => "Tie!" */


function battle(x, y) {
  x = x.split("");
  y = y.split("");
  console.log(x,y);
  countx = 0;
  county = 0;
  for(i=0; i < x.length; i++){
    if (x[i] === "A"){
      countx = countx + 1;
     } else if (x[i] === "B"){
      countx = countx + 2;
     } else if (x[i] === "C"){
      countx = countx + 3;
     } else if (x[i] === "D"){
      countx = countx + 4;
     } else if (x[i] === "E"){
      countx = countx + 5;
     } else if (x[i] === "F"){
      countx = countx + 6;
     } else if (x[i] === "G"){
      countx = countx + 7;
     } else if (x[i] === "H"){
      countx = countx + 8;
     } else if (x[i] === "I"){
      countx = countx + 9;
     } else if (x[i] === "J"){
      countx = countx + 10;
     } else if (x[i] === "K"){
      countx = countx + 11;
     } else if (x[i] === "L"){
      countx = countx + 12;
     } else if (x[i] === "M"){
      countx = countx + 13;
     } else if (x[i] === "N"){
      countx = countx + 14;
     } else if (x[i] === "O"){
      countx = countx + 15;
     } else if (x[i] === "P"){
      countx = countx + 16;
     } else if (x[i] === "Q"){
      countx = countx + 17;
     } else if (x[i] === "R"){
      countx = countx + 18;
     } else if (x[i] === "S"){
      countx = countx + 19;
     } else if (x[i] === "T"){
      countx = countx + 20;
     } else if (x[i] === "U"){
      countx = countx + 21;
     } else if (x[i] === "V"){
      countx = countx + 22;
     } else if (x[i] === "W"){
      countx = countx + 23;
     } else if (x[i] === "X"){
      countx = countx + 24;
     } else if (x[i] === "Y"){
      countx = countx + 25;
     } else if (x[i] === "Z"){
      countx = countx + 26;
     } else {
       countx = countx + 0;     
     }
   }
   //
   for(i=0; i < y.length; i++){
    if (y[i] === "A"){
     county = county + 1;
     } else if (y[i] === "B"){
     county = county + 2;
     } else if (y[i] === "C"){
     county = county + 3;
     } else if (y[i] === "D"){
     county = county + 4;
     } else if (y[i] === "E"){
     county = county + 5;
     } else if (y[i] === "F"){
     county = county + 6;
     } else if (y[i] === "G"){
     county = county + 7;
     } else if (y[i] === "H"){
     county = county + 8;
     } else if (y[i] === "I"){
     county = county + 9;
     } else if (y[i] === "J"){
     county = county + 10;
     } else if (y[i] === "K"){
     county = county + 11;
     } else if (y[i] === "L"){
     county = county + 12;
     } else if (y[i] === "M"){
     county = county + 13;
     } else if (y[i] === "N"){
     county = county + 14;
     } else if (y[i] === "O"){
     county = county + 15;
     } else if (y[i] === "P"){
     county = county + 16;
     } else if (y[i] === "Q"){
     county = county + 17;
     } else if (y[i] === "R"){
     county = county + 18;
     } else if (y[i] === "S"){
     county = county + 19;
     } else if (y[i] === "T"){
     county = county + 20;
     } else if (y[i] === "U"){
     county = county + 21;
     } else if (y[i] === "V"){
     county = county + 22;
     } else if (y[i] === "W"){
     county = county + 23;
     } else if (y[i] === "X"){
     county = county + 24;
     } else if (y[i] === "Y"){
     county = county + 25;
     } else if (y[i] === "Z"){
     county = county + 26;
     } else {
       county = county + 0;     
     }
   }
  console.log(countx,county);
  if (countx === county){
    return "Tie!";
  } else if (countx > county){
    return x.join("");
  } else if (countx < county){
    return y.join("");
 }
 }


 /*
Tetration
Multiplication can be thought of as repeated addition. Exponentiation can be thought of as repeated multiplication. Tetration is repeated exponentiation. Just as the 4th power of 3 is 3*3*3*3, the 4th tetration of 3 is 3^3^3^3. By convention, we insert parentheses from right to left, so the 4th tetration of 3 is 3^(3^(3^3))) = 3^(3^27) = 3^7625597484987 = a really big number

Your Task
Complete the function that returns the number that is the yth tetration of x, where x is a positive integer, and y is a non-negative integer. The function should return a number (not a string that picks out the number).

Note: the convention is that, as with exponentiation, the 0th tetration of any number is always 1

Examples (inputs -> output)
* 4, 0  -->     1  (due to the convention mentioned above)
* 7, 1  -->     7  (7^1)
* 5, 2  -->  3125  (5^5)
* 2, 3  -->    16  (2^(2^2)) */

function tetration(x, y) {
  if (y < 1) return 1;
  let n = x;
  for (let i = 1; i < y; i++) {
    n = Math.pow(x, n);
  }
  return n;
}


/*
Responsible Drinking
Welcome to the Codewars Bar!
Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

Examples
"1 beer"  -->  "1 glass of water"
because you drank one standard drink

"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks
Note:

To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"... */


function hydrate(s) {
  let x =s.match(/\d+/g).reduce((a,b)=>a+b*1,0);
    if (x===1){
      return (`${x} glass of water`)
    }else {
      return (`${x} glasses of water`)
    }
  }

  /*Easy wallpaper
  John wants to decorate the walls of a room with wallpaper. He wants a fool-proof method for getting it right.

John knows that the rectangular room has a length of l meters, a width of w meters, a height of h meters. The standard width of the rolls he wants to buy is 52 centimeters. The length of a roll is 10 meters. He bears in mind however, that it’s best to have an extra length of wallpaper handy in case of mistakes or miscalculations so he wants to buy a length 15% greater than the one he needs.

Last time he did these calculations he got a headache, so could you help John?

Task
Your function wallpaper(l, w, h) should return as a plain English word in lower case the number of rolls he must buy.

Example:
wallpaper(4.0, 3.5, 3.0) should return "ten"

wallpaper(0.0, 3.5, 3.0) should return "zero"

Notes:
all rolls (even with incomplete width) are put edge to edge

0 <= l, w, h (floating numbers); it can happens that w * h * l is zero

the integer r (number of rolls) will always be less or equal to 20

FORTH: the number of rolls will be a positive or null integer (not a plain English word; this number can be greater than 20)

In Javascript English numbers are preloaded and can be accessed as:

numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
For other languages it is not preloaded but you can use the above one if you need it. */

function wallpaper(l, w, h) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
  if(l*w*h===0){
    return (numbers[0])
  } else{
    let result=Math.ceil((2*(l+w)*h)*1.15/5.2);
   return(numbers[result]);
  }
  }


  /*Largest 5 digit number in a series
  
  In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.*/

function solution(digits){
  let result = 0;

 for (let i=0; i<digits.length; i++){
   let number = digits.substr(i, 5);  
   if(Number(number) > result){       
    result = Number(number);
   }
 }
 return result; 
}

/*Filter Long Words
Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

Example:

* With input "The quick brown fox jumps over the lazy dog", 4
* Return ['quick', 'brown', 'jumps'] */

function filterLongWords(sentence, n) {
  let arr=sentence.split(' ');
    let result=[];
    for(i=0; i<arr.length; i++){
      if (arr[i].length>n){
       result.push(arr[i])
      } 
    }
    return (result)
  }

  /*List Filtering
  In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */

function filter_list(l) {
  
  let result=l.filter(x=> typeof x ==='number')
  
 return (result)
  
}

/*Dot Calculator
Dot Calculator
You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => "" */

const dotCalculator = (equation) => {
  let arr = equation.split(' ');
 
   let num1 = arr[0].length;
   let num2 = arr[2].length;
   let result;
 
   switch (arr[1]) {
     case '+':
       result = num1 + num2;
       break;
     case '-':
       result = num1 - num2;
       break;
     case '//':
       result = num1 / num2;
       break;
     case '*':
       result = num1 * num2;
       break;
     default:
       break;
   }
   
   return ''.padStart(result, '.');
 };

 /*Numerical Palindrome #1
 
 A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, write a function to test if it's a numerical palindrome or not and return a boolean (true if it is and false if not).

Return "Not valid" if the input is not an integer or less than 0.*/

function palindrome(num) { 
  if(typeof num !== 'number' || num < 0) return 'Not valid'
 return num == num.toString().split('').reverse().join('') 
}

/*Thinkful - List and Loop Drills: Lists of lists

You have a two-dimensional list in the following format:

data = [[2, 5], [3, 4], [8, 7]]
Each sub-list contains two items, and each item in the sub-lists is an integer.

Write a function process_data()/processData() that processes each sub-list like so:

[2, 5] --> 2 - 5 --> -3
[3, 4] --> 3 - 4 --> -1
[8, 7] --> 8 - 7 --> 1
and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

For input, you can trust that neither the main list nor the sublists will be empty.*/

function processData(data){
  let result =1
for(let i=0; i<data.length; i++){
     result *=data[i][0]-data[i][1]

}
return (result)
  
}

/*Day of the Year

Work out what number day of the year it is.

toDayOfYear([1, 1, 2000]) => 1
The argument passed into the function is an array with the format [M, D, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

The year can be evenly divided by 4;
If the year can be evenly divided by 100, it is NOT a leap year, unless;
The year is also evenly divisible by 400. Then it is a leap year.*/

function toDayOfYear(arr) {
  let currentTime=new Date(arr[2],arr[1]-1,arr[0]).getTime();
  let currentYear=new Date(arr[2],0,0).getTime();
  let result=(currentTime-currentYear)/(1000 * 3600 * 24)
  return (result);
  }

  /*Nice Array
  
  A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

examples:

[2, 10, 9, 3] is a nice array because

 2 =  3 - 1
10 =  9 + 1
 3 =  2 + 1
 9 = 10 - 1

[4, 2, 3] is a nice array because

4 = 3 + 1
2 = 3 - 1
3 = 2 + 1 (or 3 = 4 - 1)

[4, 2, 1] is a not a nice array because

for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.*/

function isNice(arr){
  if (arr.length===0){
    return false
  } else{
return arr.every(x=>arr.includes(x+1)||arr.includes(x-1))
}
}

/*You're a square!
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false */

var isSquare = function(n){
  if (n<0){
    return (false);
  }else if (Number.isInteger(Math.sqrt(n))){
  return(true);
  }else {
  return (false);
  }
  }

  /*
Pull your words together, man!

Your friend Robbie has successfully created an AI that is capable of communicating in English!

Robbie's almost done with the project, however the machine's output isn't working as expected. Here's a sample of a sentence that it outputs:

["this","is","a","sentence"]
Every time that it tries to say a sentence, instead of formatting it in normal English orthography, it just outputs a list of words.

Robbie has pulled multiple all-nighters to get this project finished, and he needs some beauty sleep. So, he wants you to write the last part of his code, a sentencify function, which takes the output that the machine gives, and formats it into proper English orthography.

Your function should:

Capitalise the first letter of the first word.
Add a period (.) to the end of the sentence.
Join the words into a complete string, with spaces.
Do no other manipulation on the words.
*/

function sentencify(words) {
  let result=words.join(' ')[0].toUpperCase()+words.join(' ').slice(1)+'.';
   return (result)
  }

  /*Sort with a sorting array
  
 Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

sort(initialArray, sortingArray) => ['z', 'x', 'y']

sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x'] */

function sort(initialArray, sortingArray) {
  let result=[];
  for(let i=0; i<initialArray.length; i++){
    result[sortingArray[i]]=initialArray[i];
  }
  return result
}


/*Return the closest number multiple of 10
Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37
Expected output:

20
30
40 */

const closestMultiple10 = num => {
  let result=Math.round(num/10)
  return (result*10)
  };

  /*Printer Errors
  In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22" */

function printerError(s) {
  let arr=s.split('')
  console.log(arr)
  const colors = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
  let result=arr.filter(i=>colors.includes(i));
  return (`${arr.length-result.length}/${arr.length}`)  
  }


  /*You have an 8-wind compass, like this:

You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

Return the direction you will face after the turn.

Examples
"S",  180  -->  "N"
"SE", -45  -->  "E"
"W",  495  -->  "NE"*/

function direction(facing, turn){
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const startPosition = directions.indexOf(facing);
  const steps = turn/45;
  const endPosition = (startPosition+steps) % directions.length;
  return (directions.slice(endPosition)[0]);


  /*7 kyu
Simple Fun #154: Zero And One
Task
You have a string of length n consisting of zeroes and ones. Consider the following operation:

Choose any two adjacent positions in the string
If one of them is 0, and the other one is 1, 
remove these two digits from the string.
What is the length of the smallest string that you can get after applying this operation multiple times?

Example
For s = "01010", the result should be 1.

"01010" -> " 010" -> " 0"

For s = "110100", the result should be 2.

"110100" -> "1 100" -> "1 0"

Note that after the operations, the remaining digits are separated by spaces and thus not adjacent ;-)

Input/Output
[input] string s
The initial string.

[output] an integer
The minimum length of the string that may remain after applying the described operations several times.

*/

function zeroAndOne(s) {
  return (s.replace(/01/g,'').replace(/10/g,'').length)
}


/*Sum of the first nth term of Series
Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"*/

function SeriesSum(n) {
  let sum = 0;
  for(let i = 0; i < n; i++) {
  	sum += 1/(3*i+1);
  }
  return sum.toFixed(2);
}


/*Love vs friendship
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.*/

function wordsToMarks(string){
  let num = 0;
  for (let i= 0; i < string.length; i++) {
    num += string[i].charCodeAt(0)-96
  }
  return (num);
}


/*Complementary DNA

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"*/


function DNAStrand(dna){
  let arr = dna.split('');
let exchange = arr.map(item=>{
  switch(item) {
        case "A":
          return "T"
        case "T":
          return "A"
        case "G":
          return "C"
        case "C":
          return "G"
        default:
          return item
};
})
  let result=exchange.join('');
   return (result);
}

/*Filter the number
Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/
var filterString = function(value) {
  //Complete this function :)
  
  var numArr = value.match(/\d+/g);
  let str=numArr.join('')
  let result=Number(str);
  return(result)
}


/*Count the divisors of a number
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.*/


function getDivisorsCnt(n){
  let result=[]
  for (let i=1; i<=n; i++){
    if (n%i==0){
      result.push(i)
    }
  }
return(result.length)
}


/*Count the Digit

Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
Note that 121 has twice the digit 1.*/

function nbDig(n, d) {
  let arr = []
  let count = 0
  for (let i = 0; i <= n; i++) {
      arr[i] = i * i
  }
  arr = arr.join('')
  arr = arr.split('')
  for (let i = 0; i <= arr.length - 1; i++) {
      if (Number(arr[i]) === d) {
          count += 1
      }
  }
  return count
}

/*Filter Coffee
You love coffee and want to know what beans you can afford to buy it.

The first argument to your search function will be a number which represents your budget.

The second argument will be an array of coffee bean prices.

Your 'search' function should return the stores that sell coffee within your budget.

The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

*/

function search(budget, prices) {
  let arr = [];
  for (let i = 0; i < prices.length; i++){
      if(prices[i] <= budget){
          arr.push(prices[i]);
      }
  }
  let result= arr.sort((a, b) => a - b).join();
return(result)
};


/*esreveR
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)*/


reverse = function(array) {
  var a = [];
   for (i = 0; i < array.length; i++){
      a[i] = array[(array.length - 1) - i]
   }
  return(a); 
}

/*Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""*/

function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}


/*Circle cipher

read it left to right
output is csordaew

decoding is almost same

take csordaew return codewars*/


function encode(s) {
  let result = [];
  let arr = s.split('')

  for ( let i = 0; i <= s.length; i++ ) {

    result.push(arr[0])
    result.push(arr[arr.length - 1])

    arr.pop()
    arr.shift()

  }
  let final = result.join('') + arr.join('')
  return s.length % 2 === 0? final : final.slice(0,-1)

}

function decode(s) {
   let result = [];
  let arr = s.split('').reverse()

  for ( let i = 0; i <= s.length; i++ ) {

    result.unshift(arr[0])
    result.push(arr[1])

    arr.shift()
    arr.shift()

  }
  return s.length % 2 === 0? result.reverse().join('') : result.join('')

}

/*Find the Square Root
Create a Function that takes one parameter and returns its square root rounded to 5 decimal places. You are not allowed to use the Math.sqrt() or the Math.pow() methods.

Trailing zeros should be left out. For example

squareRoot(39) // => 6.245;
rather than

squareRoot(39) // => 6.24500;
*/


function squareRoot(x) {
  let result=Number((x**0.5).toFixed(5));
  return(result)
}

/*Ascend, Descend, Repeat?

You are given three integer inputs: length, minimum, and maximum.

Return a string that:

Starts at minimum
Ascends one at a time until reaching the maximum, then
Descends one at a time until reaching the minimum
repeat until the string is the appropriate length
Examples:

 length: 5, minimum: 1, maximum: 3   ==>  "12321"
 length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
 length: 11, minimum: 5, maximum: 9  ==>  "56789876567"
Notes:

length will always be non-negative
negative numbers can appear for minimum and maximum values
hyphens/dashes ("-") for negative numbers do count towards the length
the resulting string must be truncated to the exact length provided
return an empty string if maximum < minimum or length == 0
minimum and maximum can equal one another and result in a single number repeated for the length of the string*/



function ascendDescend(length, minimum, maximum) {
  let result = ''
  for (let i = minimum; i <= maximum; i++) {
    result += i
  }
  for (let i = maximum - 1; i > minimum; i--) {
    result += i
  }
  result = result.repeat(length)
  return result.substring(0,length)  
}

/*
Descending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321*/


function descendingOrder(n){
  let string = n.toString();
    let arr = string.split("");
let result =Number(arr.sort((a, b) => b - a).join(""));
  return(result)
}


/* Sum even numbers
Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

Examples
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0*/

function sumEvenNumbers(input) {
  let arr=[];
  let result=0
   for(let i=0; i<=input.length; i++){
     if (input[i]%2===0){
       arr.push(input[i])
      
     }
   }
   for(let i=0; i<arr.length; i++){
      result+=arr[i]
   }
   return(result)
 }

 /*Convert an array of strings to array of numbers
 Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.*/

function toNumberArray(stringarray){
  let result =stringarray.map(Number)
   return(result);
  }


  /*'x' marks the spot.

  Task:
Given a two dimensional array, return the co-ordinates of x.

If x is not inside the array, or if x appears multiple times, return [].

The co-ordinates should be zero indexed in row-major order.
You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

Examples
Input: []
Return an empty array if input is an empty array => []

Input: [
  ['o', 'o'],
  ['o', 'o']
]
Return an empty array if no x found => []

Input: [
  ['x', 'o'],
  ['o', 'x']
]
Return an empty array if more than one x found => []

Input: [
  ['x', 'o'],
  ['o', 'o']
]
Return [0,0] when x at top left => [0, 0]

Input: [
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]
Return [4,6] for the example above => [4, 6]*/


const xMarksTheSpot = (input) => {
	let x;
	let y;
	let count = 0;
	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input[i].length; j++) {
			if (input[i][j] === 'x') {
				[x, y] = [i, j];
				count++;
			}
		}
	}
	return (count !== 1 ? [] : [x, y]);
};

/*Squares sequence

Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]*/


function squares(x, n) {
  let result=[];
    if (n>0){
      for(i=0; i<n; i++){
     result.push(x);
      x=x**2;
    }
   return(result)
    }else {
    return([])
  }}


  /*Debug Sum of Digits of a Number

  Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14*/

function getSumOfDigits(integer) {
  let sum=0;
 var digits =  integer.toString().split("");
 let rez=digits.map(Number)
for (let i=0; i<rez.length; i++){
  sum+=rez[i]
}
 return(sum)
}


/*Disemvowel Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.*/

function disemvowel(str) {
  let result = str.replace(/[aeiou]/gi, '');
   return result;
 }


 /*Simple string characters

 In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!

*/

function solve(s) {
  s = s.split("");
  let upper = s.filter((u) => u.match(/[A-Z]/g));
  let lower = s.filter((l) => l.match(/[a-z]/g));
  let nums = s.filter((n) => n.match(/[0-9]/g));
  let special = s.filter((s) => s.match(/[^a-zA-Z0-9]/g));

  return [upper.length, lower.length, nums.length, special.length];
}


/*shorter concat [reverse longer]

Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b*/

function shorter_reverse_longer(a,b){
  let result=""
 if (a.length>b.length){
   result= b+a.split("").reverse().join("")+b;
   
 }else if(b.length>a.length){
   result= a+b.split("").reverse().join("")+a;
   
 } else {
   result= b+a.split("").reverse().join("")+b;
   
 }
  return result;
}


/*Vowel one

vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"*/

function vowelOne(s) {
  return s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');
}

/*Which are in?

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.*/

function inArray(array1,array2){
  array2 = array2.join(' ');
  let result = array1.filter(elem => array2.includes(elem)).sort();
  return(result);  
 }



 /*Categorize New Member

 The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/


function openOrSenior(data){
  let result = []
  for (let i=0;i<data.length;i++){
    let age = data[i][0], handicap = data[i][1]
    if(age>54 && handicap>7){
      result.push('Senior')
    }else result.push('Open')
    } return result
  }


  /*Anagram Detection


  An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"*/


// write the function isAnagram
var isAnagram = function(test, original) {
  if(test.toLowerCase().split('').sort().join('')===original.toLowerCase().split('').sort().join('')){
   return (true)
  } else {
     return(false)
  }
};


/*Unscrambled eggs


Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

Example
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"
Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated.

*/


function unscrambleEggs(word){
  let result=word.replace(/egg/gi, '');
  return (result)
  
  //coding is feggunegg
}

/*
Sort Numbers

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []*/


function solution(nums){
 if (nums===null){
   return([])
 } else{
let result=nums.sort(function(a, b) { return a - b; }); 
return (result)
 }
}


/*Jaden Casing Strings

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"*/


String.prototype.toJadenCase = function() {
  return this.replace(/(^|\s)[a-z]/g, x => x.toUpperCase())
}


/*Thinking & Testing: A and B?

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

Series:
01: A and B?
02: Incomplete string
03: True or False
04: Something capitalized
05: Uniq or not Uniq
06: Spatiotemporal index
07: Math of Primary School
08: Math of Middle school
09: From nothingness To nothingness
10: Not perfect? Throw away!
11: Welcome to take the bus
12: A happy day will come
13: Sum of 15(Hetu Luosliu)
14: Nebula or Vortex
15: Sport Star
16: Falsetto Rap Concert
17: Wind whispers
18: Mobile phone simulator
19: Join but not join
20: I hate big and small
21: I want to become diabetic ;-)
22: How many blocks?
23: Operator hidden in a string
24: Substring Magic
25: Report about something
26: Retention and discard I
27: Retention and discard II
28: How many "word"?
29: Hail and Waterfall
30: Love Forever
31: Digital swimming pool
32: Archery contest
33: The repair of parchment
34: Who are you?
35: Safe position
Special recommendation
Another series, innovative and interesting, medium difficulty. People who like to challenge, can try these kata:

Play Tetris : Shape anastomosis
Play FlappyBird : Advance Bravely*/


function testit(a,b){
  //return a+b ?
  //return a*b ?
  return a|b;
}


/*Leap Years


In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them
Examples can be found in the test fixture.*/


function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
 }


 /*Sum of angles

 Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.*/


 function angle(n) {
  let result = 2*90*(n-2);
  return result
}

/*
How many arguments

args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4
*/

// Create a function called args_count that returns the number of arguments provided
function args_count(arg) {
  let result=[];
for (let i=0; i<arguments.length; i++){
  result.push(arguments[i])
  
}
  return(result.length)
}

/*London CityHacker

You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.

['Northern', 'Central', 243, 1, 'Victoria']
Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

For example: 'Piccadilly', 56, 93, 243, 20, 14 -> "£6.90"

Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx*/

function londonCityHacker(journey) {
  let sum=0;
  for (let i=0; i<journey.length; i++){
    if (typeof journey[i]==='string'){
      sum+=2.40
    }else {
      sum+=1.50
      if(typeof journey[i+1]==='number') {
        i++
      }
    }
  } 
   return `£${sum.toFixed(2)}`;
 }


 /*Find the smallest power higher than a given a value

 We have the number 12385. We want to know the value of the closest cube but higher than 12385. The answer will be 13824.

Now, another case. We have the number 1245678. We want to know the 5th power, closest and higher than that number. The value will be 1419857.

We need a function find_next_power ( findNextPower in JavaScript, CoffeeScript and Haskell), that receives two arguments, a value val, and the exponent of the power, pow_, and outputs the value that we want to find.

Let'see some cases:

findNextPower(12385, 3) == 13824

findNextPower(1245678, 5) == 1419857
The value, val will be always a positive integer.

The power, pow_, always higher than 1.

Happy coding!!*/

function findNextPower(val, pow_) {
  for(let i=0; ;i++){
   let result=Math.pow(i, pow_)
    if(result>val){
      return (result)
    }
  }
  }

  /*Square Every Digit

  Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer*/

function squareDigits(num){
  let arr= (""+num).split("").map(Number)
  arr = arr.map(el => el **2);
  let result = +arr.join('');
  return(result)
  
}

/*The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]*/



function removeSmallest(numbers) {
  numbers = numbers.slice(0);
  const min = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min), 1);
  return numbers;
}


/*Beginner Series #3 Sum of Numbers


Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)*/


function getSum(a,b){
  var sum = 0;
  if (a<b) { 
    for(let i=a; i<=b; i++){
       sum += i;
    }
  } else if (a>b) {
    for(let i=a; i>=b; i--){
       sum += i;
    }
  } else {
    sum = b;
  }
  return sum;



  /*Previous multiple of three

  Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

Examples
1      => null
25     => null
36     => 36
1244   => 12
952406 => 9
*/


const prevMultOfThree = n => {
  while(n % 3 != 0) {
    if( n < 10) return null;
    n = Math.floor(n / 10);
  }
  return n;
}

/*Perpendicular lines


You are given an input (n) which represents the amount of lines you are given, your job is to figure out what is the maximum amount of perpendicular bisectors you can make using these lines.

Note: A perpendicular bisector is one that forms a 90 degree angle

n will always be greater than or equal to 0
Examples with 3 and 4 lines*/



function maxBisectors(n) {
  return Math.floor(n*n/4);
}



/*Shortest Word


Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/


function findShort(s){
  let arrS = s.split(' ');
  let shortestWord = arrS[0];
  for (var i = 0; i < arrS.length; i++) {
    if (arrS[i].length < shortestWord.length) {
     shortestWord = arrS[i];
    }
   }
   return shortestWord.length;
  }


  /*
Heron's formula

Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

Heron's formula:

s∗(s−a)∗(s−b)∗(s−c)\sqrt{s * (s - a) * (s - b) * (s - c)} 
s∗(s−a)∗(s−b)∗(s−c)
​
 
where

s=a+b+c2s = \frac{a + b + c} 2s= 
2
a+b+c
​
 
Output should have 2 digits precision.*/

function heron(a, b, c) {
  let s=(a+b+c)/2
  let result = Math.sqrt(s*(s-a)*(s-b)*(s-c))
  return Number(result.toFixed(2))
}

/*True Min

The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.

Note: This min function need not handle more than two arguments.

function min(a, b){
  return (a<b)?a:b;
}*/




function min(a, b){
  return (isNaN(a) || isNaN(b)) ? NaN : ((a < b) ? +a : +b);
}


/*Maid Ep2: Christmas Trash Party
His Royal Highness Prince of Edinburgh cares a lot about the ecology and propagates waste sorting. Once per year, He organizes the Christmas Trash Party, where His employees sort the garbage that the Prince has been thrown during the year. Obviously, you want to participate in this High day.

Task
You will receive trash1 and trash2, that might be the next values:

[], false, '', new Array(), null, NaN, undefined, 0, -0, 0n, -0n, '0'

You have to return a boolean if they are strictly equal.

However
The Prince says when He was young, there weren't softies who were afraid to get their hands dirty, so He doesn't let His employees use gloves for work (triple equals === and strict inequality !== are not allowed).*/



function compareTrash(trash1, trash2){
  return (trash1 == trash2) && (typeof trash1 == typeof trash2)
}

/*
The Coins of Ter | Round to the Next N

Ter is a small country, located between Brelnam and the Orange juice ocean. It uses many different coins and bills for payment. However, one day, the leaders of Ter decide that there are too many small coins. Therefore, they ban the small coins. But no one knows which coins they'll ban, so they ask you to provide a tool that can recalculate a price. After all, if one does not have a 1 Terrek bill and can only give a 2 Terrek bill, one needs to adjust the oddly priced items.

Task
Write a function adjust, that takes a two integers: the lowest currency unit that's still allowed, and the price/debt that needs to get adjusted. All prices are going up, and debts are remitted. The lowest currency will always be positive.

In other words:adjust takes two integers, b and n, and returns the smallest number k, such that n <= k and k % b == 0 .

Examples
adjust( 3, 0 ) ===  0
adjust( 3, 1 ) ===  3
adjust( 3, -2) ===  0
adjust( 3, -4) === -3
adjust( 3, 3 ) ===  3
adjust( 3, 6 ) ===  6
adjust( 3, 7 ) ===  9*/


function adjust(coin,price) {
  for (let i=price; ; i++){
    if(price<=i && i%coin === 0){
     return(i)
      break;
    }
  }
 }

 /*Count consonants

 Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.*/

function consonantCount(str) {
  let result=str.replace(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/gi, '')
  return str.length-result.length
 }

 /*MinMinMax

 Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.

For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.

You solution should return an array [smallest, minimumAbsent, largest]

The smallest integer should be the integer from the array with the lowest value.

The largest integer should be the integer from the array with the highest value.

The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

minMinMax([-1, 4, 5, -23, 24]); //[-23, -22, 24]
minMinMax([1, 3, -3, -2, 8, -1]); //[-3, 0, 8]
minMinMax([2, -4, 8, -5, 9, 7]); //[-5, -3,9]*/


function minMinMax(array) {
  let min=Math.min.apply(null, array)
  let max=Math.max.apply(null, array)
  let  minimumAbsent
  for (let i = max; i > min; i--) {
       if (!array.includes(i)) {
        minimumAbsent = i;
        
       }
    
  }
   return([min,minimumAbsent,max])

}

/*A cyclops number is a number in binary that is made up of all 1's, with one 0 in the exact middle. That means all cyclops numbers must have an odd number of digits for there to be an exact middle.
A couple examples:
101
11111111011111111
You must take an input, n, that will be in decimal format (base 10), then return True if that number wil be a cyclops number when converted to binary, or False if it won't.
Assume n will be a positive integer.

A test cases with the process shown:

cyclops (5)
"""5 in biinary"""
"0b101"
"""because 101 is made up of all "1"s with a "0" in the middle, 101 is a cyclops number"""
return True

cyclops(13)
"""13 in binary"""
"0b1101"
"""because 1101 has an even number of bits, it cannot be a cyclops"""
return False

cyclops(17)
"""17 in binary"""
"0b10001"
"""Because 10001 has more than 1 "0" it cannot be a cyclops number"""
return False*/

function cyclops(n) {
  let binary = n.toString(2).split('0');
  return  binary.length == 2 &&  binary[0] == binary[1];
}

/*Trimming a string
Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."

These dots at the end also add to the string length.

So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."

If the string is smaller than or equal to 3 characters then the length of the dots is not added to the string length.

e.g. trim("He", 1) should return "H..."

If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"*/


function trim(str, size) {
  if (str.length < 3) return str[0] + "...";
  if (str.length <= size) return str;

  return str.slice(0, size - 3) + "...";
}

/*
Sum of odd numbers

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8*/

function rowSumOddNumbers(n) {
	return n**3
}


/*Number of People in the Bus
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.*/


const number = busStops => {
  let counter = 0;
  for (let i = 0; i < busStops.length; i++){
    counter += busStops[i][0] - busStops[i][1]
  }
  return counter;
}