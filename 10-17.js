/*
 * topic:Take a Ten Minute Walk
 * 
 * Instructions
 * You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
 */

function isValidWalk(walk) {
  var ver = 0;
  var hor = 0;
  for(var i = 0;i<walk.length;i++){
      if(walk[i] == 'n'){
        ver += 1;
      }
      if(walk[i] == 's'){
        ver -= 1;
      }
      if(walk[i] == 'w'){
        hor -= 1;
      }
      if(walk[i] == 'e'){
        hor += 1;
      }
  
  }
  
  if(hor === 0 && ver === 0 && walk.length === 10){
     return true;
  }else{
     return false;
   }
}

//BEST
function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function(a){return a==val;}).length;
  }
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}

//方法不难，条件比较多，尽量简化代码


/*
 * topic:Sum of Digits / Digital Root
 * 
 * Details
 * digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2
 */

//WHAT A GENIUES!!
function digital_root(n) {
  return (n - 1) % 9 + 1;
}

//use while
//快写吐了 缓缓