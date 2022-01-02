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


