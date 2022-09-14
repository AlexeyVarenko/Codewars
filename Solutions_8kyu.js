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