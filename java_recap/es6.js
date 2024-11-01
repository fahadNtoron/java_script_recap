const myArray = [35, 63, 53, 56];

const myObject = {
    name: 'fahad',
    age:22,
   movies: ['Kashem tui peyara kha', 'ar nai']
}

// templete string (Located beside 1)
const aboutTempleteString = `my name is ${myObject.name}  age of ${myObject.age}`
// very usefil, can do mathematical operation

// 22. arrow function

const arrowFunction = () => 55;
const arrowFunction1Parameter = num => num+5;
const arrowFunctionMultipleParameter =(x,y,z) => x+y+z;

const multipleLineParameter = (x,y,z ) => {
    x++;
    z=x+y+z;
    return z;
}

//  3 very important {spread operator} (...)
// if want to copy array
const newMyArray = myArray;
newMyArray.push(999);
console.log(myArray)
console.log(newMyArray)
// here we can see that the 99 also added in the first arry (reffarance one)
// so new array with out referance point is 
const referanceLessArray = [...myArray]
referanceLessArray.push(99,34,543,545,65)
console.log('-----------------------------------------')
console.log(myArray)
console.log(referanceLessArray)

