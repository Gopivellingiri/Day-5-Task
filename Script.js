


// Day 5 Task

// Print odd Numbers in array
var odds = function(){
    var arr = [21,22,23,24,28,15,33]
    var res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 === 1) {
           res.push(arr[i]); 
        }
    } return res;
} 
console.log(odds())


//sum of all numbers in array
var total = function(){
    var arr = [22,23,24,25,26,27,28,29];
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
             sum = sum + arr[i]
        } return sum; 
    }
console.log(total());

//find prime numbers in array
var arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
let result = [];
var prime = function (arr1) {
    if(arr1 < 2) return false;
  
    for (let k = 2; k < arr1; k++){
      if(arr1 % k == 0){
        return false;
      }
    }
    return true;
  }
  arr1.forEach(function (element) {
    const item = prime(element);
    if (item) {
      result.push(element);
    }
  });

  console.log(result); 


// return polindromes

var arr =  ["racecar","apple","orange","radar","dad","mom","orange"]
var ans = [];
var string = arr.slice(0);
var palindromeArrNew = string.toString().split("").reverse().join("").split(",")
  
var palindrome = function(){
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < palindromeArrNew.length; j++){
      if (arr[i]===palindromeArrNew[j]){
        ans.push(arr[i]);
        break
      } 
    }
  } return ans
}
console.log(palindrome()) 

// median of two sorted array of same size

var median = function (){
  var arr1 = [25,46,12,25]
  var arr2 = [14,17,15,18]
  var newarr = [...arr1,...arr2].sort((a,b)=> a-b)
let middle = Math.floor(newarr.length/2);
if (newarr.length%2 === 0) {
  return newarr[middle]
}
}
 console.log(median())

 //remove duplicates from an array

 var arr3 = ["bike","car","plane","ship","car","car","bike","1255","1255"]
 var remDuplicate = function(){
  return [...new Set(arr3)]
 }
console.log(remDuplicate())

// rotating array
var arr5 = [1,2,3,4,5,6,7,8,]
var k = 3

var rotate = function(){
  for(var i = 0; i < k; i++){
    arr5.unshift(arr5.pop());
  } return arr5
} 
console.log(rotate()); 

// changing title case 
var arr6 = ["i am gopi krish,"].toString()
let newString = ""
var titleCaps = function(arr6){
  var upCase = true
  
  for(var i = 0; i < arr6; i++){
    if(arr6[i] == " ") {
      upCase = true
      newString=newString + arr6[i]
      continue
    }
     newString+=upCase ? arr6[i].toUpperCase() : arr6[i].toLowerCase()
    upCase = false
  }
  return newString
}
console.log(titleCaps()) 

// --------------------------------------------------------------------------

//Using Arrow functions

// Print odd Numbers in array
var arr  = [21,22,23,24,28,15,33];
var oddNumbers = arr.filter((e)=>e % 2 === 1);
console.log(oddNumbers);

//Changing Title Capse
var arr7 = ["i am gopi krish"].toString()
var titleCaps1 = () => {
  arr7 = arr7.toLowerCase().split(" ")
  for(var i = 0; i < arr7.length; i++) {
    arr7[i] = arr7[i].charAt(0).toUpperCase() + arr7[i].slice(1)
  }
 return  arr7.join(" ")
}

console.log(titleCaps1());

//sum of all number in array

var arr8 = [11,12,13,14,15,16,17,18,19]

var total1 = ()=>{
  var sum = 0;
  for(var i = 0; i < arr8.length; i++){
      sum = sum + arr8[i]
  }
  return sum
}
console.log(total1())

// returning all prime numbers
var arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
let result3 = [];
var prime = (arr1) => {
    if(arr1 < 2) return false;
  
    for (let k = 2; k < arr1; k++){
      if(arr1 % k == 0){
        return false;
      }
    }
    return true;
  }
  arr1.forEach(function (element) {
    const item = prime(element);
    if (item) {
      result3.push(element);
    }
  });

  console.log(result); 

//returning all polindromes in array
  var arr =  ["racecar","apple","orange","radar","dad","mom","orange"]
var ans = [];
var string = arr.slice(0);
var palindromeArrNew = string.toString().split("").reverse().join("").split(",")
  
var palindrome =()=>{
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < palindromeArrNew.length; j++){
      if (arr[i]===palindromeArrNew[j]){
        ans.push(arr[i]);
        break
      } 
    }
  } return ans
}
console.log(palindrome()) 