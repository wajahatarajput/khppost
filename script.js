// console.log('Hello')

// // document Complete loaded page

// document.write('Hello')


// function handleClick() {
//     document.getElementById('demo').innerHTML = "This is Changed Text";
//     document.getElementById('demo').style.backgroundColor = 'red'
// }

// window.navigator.geolocation.getCurrentPosition((pos) => {
//     console.log(pos)
// })

// let var const

// const fun = function () {
    
// }

// let input = '5';

// console.log(typeof(input))

// if (bread) {
//     bring egg + bread
// } else if (eggs) {
//     bring egg
// } else {
//     return home
// }

// switch (button) {
//     case 'on':
//         break;
//     case 'off':
//         break;
//     default:
// }


// while do-while for for-in for-of

// start , end, increment

// var stop = true;

// while (stop) {
//     stop = !(prompt('Enter x to exit!') === 'x')
    // i++
// }


// var stop;

// do{
//     stop = !(prompt('Enter x to exit!') === 'x')
// }while (stop)

// for (let i = 0; i < 1000; i++){
// }


// Object is the collection of key value pairs.
// var obj = {
//     // key : value
//     name: 'Wajahat',
//     lname: 'Ali',
//     fun: () => {
        
//     },
//     arr:[]
// }

// console.log(obj.name)

// for (let key in obj) {
//     console.log(obj[key])
// }

var arr = ['Wajahat', 'Ali'];

// arr.push('Rajput'); // push inserts at last
// arr.unshift('Rajput'); // Inserts at first

// arr.pop(); // remove and return last data
// arr.shift(); // remove and return first data

// arr.sort();
// arr.reverse();

// console.log(arr)



// var string = 'you';

// if ([...string].toString() === [...string].reverse().toString())
//         console.log('isPanlindrome')


// Array.map
// map(callbackFunction)
// let indexes;
// indexes = arr.map(function (value,index,arr) {
//     return index;
// })

// console.log(indexes)

// let filteredData = [];
// // filter(callbackFunction)
// filteredData = arr.filter((value) => {
//     return value !== 'Ali';
// })
// console.log(filteredData)


// let filteredData = false;
// // some(callbackFunction)
// filteredData = arr.some((value) => {
//     return value !== 'Ali';
// })
// console.log(filteredData)

let exist = false;
// some(callbackFunction)
exist = arr.every((value) => {
    return value !== 'Ali';
})
console.log(exist)


// { }, [], '' , null, undef

// let data = {fname:'Wajahat'};
// let exist = data.name === undefined || data.name === null || data.name === '' ;
// console.log(!exist);