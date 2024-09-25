// "33"=>33
// "33abc"=>NaN
// true=>1
// false=>0



let score="33"
console.log(score)
console.log(typeof(score)) //String
let numberInInteger=Number(score)  //convert string to integer
console.log(numberInInteger);
console.log(typeof(numberInInteger)) //Number

// what if 
let value="33sad"
console.log(value)
console.log(typeof(value));
let ValueInInteger=Number(value)
console.log(ValueInInteger); //NaN Not a number 

console.log(typeof(ValueInInteger));//But it is not a number

// what is 
let number=undefined
console.log(number)



// 1=>true
// 0=>false
// ""=>false
// "abc"=>true

let loggIn=1
let loggInBoolean=Boolean(loggIn)
console.log(loggInBoolean)

let somenumber=33
let someNumberString=String(somenumber)
console.log(someNumberString);
console.log(typeof(someNumberString))



// *******OPERATION***************

console.log("Some Operation are : ");
let a=33
let neg_a=-a
console.log(neg_a);
console.log(2+2);//4
console.log(2-2);//0
console.log(2*2);//4
console.log(2**3);//8
console.log(7/3);//2.3333
console.log(2%3);//2


let str1="hello"
let str2=" navjeet"
let str3=str1+str2
console.log(str3);


let gameCounter=100;
// gameCounter++
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);










