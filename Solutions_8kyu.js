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