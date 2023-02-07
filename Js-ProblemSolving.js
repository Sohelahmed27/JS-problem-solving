//Problem 1: Let’s play a mind game

// The function "mindGame()" takes in a parameter number. If the type of number is not a number, it returns the string 'Please insert valid number'.

function mindGame(number){
if(typeof number != 'number' ){
  return 'Please incert valid number';
}
let num1 = (number*3 )+10;
let num2 = num1 / 2;
let finalNum = num2 - 5;
return finalNum;
}

const result = mindGame(12);
console.log(result);
 

// Problem 2: Finding even or odd

// The function 'evenOdd()' takes in a parameter 'str' and checks if it's a string. If 'str' is not a string, it returns the string 'Input a String'.

// If str is a string, it runs a loop that checks the length of str. If the length is even, it returns the string 'even', otherwise it returns 'odd'.

function evenOdd(str){
  if(typeof str === 'string'){
    for(let i = 0; i < str.length; i++){
      if(str.length%2==0){
        return 'even' ;
      }
      else {
        return 'odd' ;
      }
    }

  }
  else{
    return 'Input a String';
  } 
}

const result1= evenOdd('Batch7');
console.log(result1);


// Problem 3: Is Less or Greater than seven

// The function "isLGSeven()" takes in a parameter "number" and checks if it's a number. If number is not a number, it returns the string 'Please enter a valid number'.
// Otherwise, it calculates the difference between number and 7 and stores the result in result. If result is less than 7, it returns result, otherwise it returns twice the value of number.

function isLGSeven(number){
  if(typeof number != 'number'){
    return 'Please enter a valid number';
  }
  let result = number - 7;
  if(result <7){
    return result;
  }
  else{
    return number*2;
  }
}

const myNumber=isLGSeven(15);
console.log(myNumber);


// Problem 4: Finding Bad data

// The function "findingBadData()" takes in a parameter" arr" and checks if it's an array. If "arr" is not an array, it returns the string 'Input an Array'.
// If 'arr' is an array, the function initializes an empty array negativeNumber and loops through each element in 'arr'. If the current element is less than 0, it pushes the element to the negativeNumber array.
// Finally, the function returns the length of 'negativeNumber'.

function findingBadData(arr){
  if(!Array.isArray(arr)){
    return 'Input an Array';
    }
    let negativeNumber =[];
    for(let i=0; i<arr.length; i++){
      if (arr[i] < 0) {
          negativeNumber.push(arr[i]);
        }
    }
    return negativeNumber.length;
      }
    const ages =  [ -4, -9, -5, -33, -55 ];
    const result2 = findingBadData(ages);
    console.log(result2);

// Problem 5: Convert your gems into diamond

// The function gemsToDiamond takes in three parameters num1, num2, and num3 and checks if each of them is a number. If any of them is not a number, it returns the string 'Please insert valid number'.

// Then, the function calculates the value of each friend's gems by multiplying num1 by 21, num2 by 32, and num3 by 43, storing the results in friend1, friend2, and friend3 respectively. The function then adds up the total number of gems and stores it in diamond.

// If the value of diamond is greater than 2000, the function subtracts 2000 from diamond and returns the result, otherwise it returns the value of diamond as it is.
 function  gemsToDiamond(num1, num2, num3) {
  if(typeof num1 != 'number' || typeof num2 != 'number' || typeof num3 != 'number'){
    return 'Please enter valid numbers';
  }
  let friend1 = num1* 21;
  let friend2 = num2* 32;
  let friend3 = num3* 43;
  let diamond=friend1+friend2+friend3;
  if(diamond >2000){
    diamond = diamond -2000;
    return diamond;
  }
  else {
    return diamond;
  }
 }
 const result3= gemsToDiamond(20, 200, 50);
 console.log(result3); 