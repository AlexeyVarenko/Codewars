/*You will be given a function, isFibo, which will take three arguments: a, b and f.

a is the first term of a Fibonacci sequence, b is the second term of this sequence ( it will always be bigger than or equal to a and they'll be both always positive, so don't worry about pesky input checking ) and f is a number which you'll need to check whether or not is a part of this Fibonacci sequence.

Good luck, muh fellow coding warrior.*/


function isFibo(a,b,f) {
    let arr=[a,b];
      for(let i=1;i<=f ; i++){
        arr.push(arr[i-1]+arr[i]);
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
      let [first, second]=words.split(' ');
      let result1 = first.replace(first[0], second[0]);
      let result2 = second.replace(second[0], first[0]); 
      let result3= result1+' '+result2;
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
let [first, second]=result1.split(' ');  
let result2 =Number(first.replace(first[0], second[0]));
let result3 =Number(second.replace(second[0], first[0])); 
let result4=Math.abs(result2-result3);
   return result4;
   }
}

/*Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]*/


function evenNumbers(array, number) {
let newArr=[];
  for(let i=0; i<array.length; i++){
    if (array[i]%2===0){
      newArr.push(array[i]);
    }
  }
  let result=newArr.slice(-number);
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

function nthSmallest(arr, pos){
  let result=arr.sort( (a, b) => a - b );
    return result[pos-1];
}

//Small enough? - Beginner

/*You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.*/

function smallEnough(a, limit){
  let result=a[0];
    for(let i=1; i<a.length; i++){
      if (a[i]>result){
        result=a[i]
      } 
    }
    if(result<=limit){
      return true;
    }else{
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

function sabb(s, val, happiness){
  let repl=s.replace(/[sabticl]/gi,'');
   let result=s.length-repl.length
   let summ= result+val+happiness;
   if(summ>22){
     return  'Sabbatical! Boom!';
   } else {
     return 'Back to your desk, boy.';
   }
  
 }
 


/*Double Every Other

Write a function that doubles every second integer in a list, starting from the left.

Example:

doubleEveryOther([1,2,3,4]) => [ 1, 4, 3, 8 ]*/

function doubleEveryOther(a) {
  for (i=1; i<a.length;i+=2){
    a[i]=a[i]*2
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

function trouble(x, t){
 
  let sum=[];
    for ( let i=0; i<=x.length; i++){
      if(x[i]+x[i+1]===t){
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

function rowWeights(array){
  let sum1=0;
   let sum2=0;
   for (let i=0;i<array.length; i+=2){
   sum1+=array[i];
   }
    for (let j=1;j<array.length; j+=2){
   sum2+=array[j];
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
      if (x[i] ==='kata') {
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
    }  console.log(miseryArr)
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

function getEvenNumbers(numbersArray){
  let result=numbersArray.filter(n=>n%2===0);
  return result;
}

/*Stanton measure

The Stanton measure of an array is computed as follows: count the number of 1s in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

Write a function which takes an integer array and returns its Stanton measure.

Examples
The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.*/

function stantonMeasure(array){
  let amount=array.filter(x=>x===1).length;
  let result=array.filter(x=>x===amount).length;
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

function scoreTest(str, right, omit, wrong){
  let correct=str.filter(x=>x===0).length;
  let empty=str.filter(x=>x===1).length;
  let incorrect=str.filter(x=>x===2).length;
  return (correct*right)+(empty*omit)-(incorrect*wrong)  
   }