// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// }

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// }
// console.log(Object.keys(options).length);


// let arr = [1, 2, 3, 4, 5];

// arr.pop(); //удалить последний элемент массива
// arr.push("5"); //добавить последний элемент массива
// arr.shift(); //удалить первый элемент массива
// arr.unshift("1"); //добавить последний элемент массива
// console.log(arr);

// перебор элементов в массиве
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){
//     console.log(i + ':' + item + "(массив: " + mass + ')');
// });

// console.log(arr);

// let mass = [1,3,4,6,7];

// for (let key of mass) {
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

//     arr = ans.split(',');
//     console.log(arr);

// let arr = ["sssd", 'sds', 'pp', 'sdd']
//     i = arr.join(', ');
// console.log(arr);

let arr = ["sssd", 'sds', 'pp', 'sdd']
    i = arr.sort();
console.log(arr);