// Arrays
// it can store multiply datatype


const myArr=[0,1,10,3,4,5,6]
console.log(myArr[2]);

// Array Methods
// push to add at thr end
myArr.push(30)
console.log(myArr);

// pop to remove at the end
myArr.pop();
console.log(myArr);

// unshift to add on the front
myArr.unshift(9)
console.log(myArr);

// shift to remove on the front
myArr.shift()
console.log(myArr); 

// check the number
console.log(myArr.includes(9));


// return the index
console.log(myArr.indexOf(5))

// join to convert to string
// const Arr=Arr.join()
// console.log(Arr);


// slice it does not manipulate the orginal array
// splice it manipulate the orginal array 

console.log("A",myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);

console.log("B",myArr);
const myn2=myArr.splice(1,3);
console.log(myn2);





