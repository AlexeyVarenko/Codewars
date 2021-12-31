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