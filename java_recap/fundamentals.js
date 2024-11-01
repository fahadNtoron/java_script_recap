//1.  how to declear a variable using let or const
// const is used for declearing constant 
const myName = 'Fahad';
const variableName = 'constant value';
// let see what eror we get if we change the value of const
// myName = 'Remon';
console.log(myName)

//2.   6 basic condition : < , > , === , !== , <= , >= 

//  if else 

// 3 array
const myArray = [35, 63, 53, 56];
// index start from "0"
// length
// push
const length = myArray.length
console.log(length)


//4.   loops , specially for loop

for (let i = 0; i<length; i++){
    console.log(myArray[i])
}
// 5.. function
function myFunction(x=1,y=1){
    const result = x*y;
    return result
}
// calling the function 
const callingFunction = myFunction(myArray[0], myArray[1])
console.log(callingFunction)


// must -- object
const myObject = {
    name: 'fahad',
    age:22,
   movies: ['Kashem tui peyara kha', 'ar nai']
}

const myVariable = 'movies'

// how to access a property using key

console.log(myObject.name); //direct by property
console.log(myObject['age']);//via property name using string
console.log(myObject[myVariable]);// via property name in a variable