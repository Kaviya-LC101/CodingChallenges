function firstReverseStr(str){
  arr=str.split("");
  arr.reverse();
  return arr.join("");

}

let str1='Hello World and Coders';
let reverseStr1=firstReverseStr(str1);
console.log(`Reverse string of the word "${str1}" is "${reverseStr1}""`);

const input=require('readline-sync');
let newStr=input.question("\nPlease Enter the String to be reversed : ");
reverseStr=firstReverseStr(newStr);
console.log(`\nReverse string of the word "${newStr}" is "${reverseStr}""`);