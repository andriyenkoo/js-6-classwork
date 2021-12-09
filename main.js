// - Дано список імен.
//     let n1 = 'Harry..Potter'
//     let n2 = 'Ron---Whisley'
//     let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//     let n1 = 'Harry Potter'
//     let n2 = 'Ron Whisley'
//     let n3 = 'Hermione Granger'

// let nameFilter = (string, symbol) => {
//     let newArr = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if(item) newArr.push(item);
//         })
//         console.log(newArr.join(' '))
//     }
// }
//
// nameFilter(n3,'_');
// nameFilter(n2,'-');
// nameFilter(n1,'.');

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let randomNumbersOfArray = (length, numbers) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * numbers))
//     }
//     return emptyArray;
// };
//
// let result = randomNumbersOfArray(10,100);
// console.log(result);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

// let randomNumbersOfArray = (length, numbers) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * numbers))
//     }
//     return emptyArray.sort((a, b) => a - b);
// };
//
// let result = randomNumbersOfArray(10,100);
//
// console.log(result);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let randomNumbersOfArray = (length, numbers) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * numbers))
//     }
//     return emptyArray.filter(value => value % 2 === 0);
// };
//
// let result = randomNumbersOfArray(10,100);
//
// console.log(result);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let randomNumbersOfArray = (length, numbers) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * numbers))
//     }
//     return emptyArray.map(value => value.toString());
// };
//
// let result = randomNumbersOfArray(10,100);
// console.log(result);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.

// let nums = [11,21,3];
// // sortNums('ascending') // [3,11,21]
// // sortNums('descending') // [21,11,3]
//
//
// let sortNums = (arr, direction) => {
//     if (direction === 'asc') return arr.sort((a, b) => a - b);
//     if (direction === 'desc') return arr.sort((a, b) => b - a);
// }
//
// console.log(sortNums([1, 56, 9, -20, 2345, 34, 98, 5], 'asc') );

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration

// let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = coursesAndDurationArray.filter((value) => {
//     return value.monthDuration > 5;
// });
// console.log(filter)