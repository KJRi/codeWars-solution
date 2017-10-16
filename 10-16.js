/*
 * topic:Consecutive Count
 * 
 * Details
 * I want to know the longest length of consecutive items of X there are in Y. I will provide you an item (Y), and a key to search for (X). Return the length of the longest segment of consecutive keys (X) in Y.

Rules:

The item will be either an integer or string data type.

The key will be an integer or string data type.

The return value will be an integer data type.

If the key does not appear in the number, return 0.

Example1:

items = 90000;

key = 0;

return value: 4;

Example2:

items = 'abcdaaadse';

key = 'a';

return value: 3;

 */

//BEST1:
function getConsectiveItems(items, key){
var s = new RegExp(key.toString()+"*", 'g')
return items.toString().match(s).reduce((a,b)=>a.length>b.length?a:b).length
}
//正则表达式判断全局匹配key
//string.match(正则)


//BEST2:
function getConsectiveItems(items, key){
 var counts = [];
  
  items = items.toString();
  key = key.toString();
  var count = 0;
  
 for(var i = 0; i<items.length; i++) {
   if(items[i] === key) {
     count++;
   } else {
     counts.push(count)
     count = 0;
   }
   if(i === items.length-1) {
     counts.push(count);
   }
 }
 return counts.sort(function(a,b){return b-a})[0]
}



/*
 * topic:Equal Sides Of An Array
 * 
 * Details
 * You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.
 */


//BEST
function findEvenIndex(arr)
{
  for(var i=1; i<arr.length-1; i++) {
    if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
      return i;
    }
  }
  return -1;
}
