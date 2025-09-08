/* // Завдання 1
const array = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

function printArray(arr) {

    console.log(arr);

}

function printEvenElements(arr) {

    console.log(arr.filter(num => num % 2 === 0));

}

function getSum(arr) {

    return arr.reduce((sum, num) => sum + num, 0);

}

function getMax(arr) {

    return Math.max(...arr);

}

function addElement(arr, index, element) {

    arr.splice(index, 0, element);

}

function removeElement(arr, index) {

    arr.splice(index, 1);

}

printArray(array);
printEvenElements(array);
console.log(`Сума: ${getSum(array)}`);
console.log(`Максимальний елемент: ${getMax(array)}`);
addElement(array, 3, 50);
printArray(array);
removeElement(array, 3);
printArray(array);
*/



/* // Завдання 2
const array1 = Array.from({length: 10}, () => Math.floor(Math.random() * 20));
const array2 = Array.from({length: 5}, () => Math.floor(Math.random() * 20));

function mergeUnique(arr1, arr2) {

    return [...new Set([...arr1, ...arr2])];

}

function getCommonElements(arr1, arr2) {

    return [...new Set(arr1.filter(num => arr2.includes(num)))];

}

function getUniqueFromFirst(arr1, arr2) {

    return arr1.filter(num => !arr2.includes(num));

}

console.log("Масив 1:", array1);
console.log("Масив 2:", array2);
console.log("Об'єднаний масив без повторень:", mergeUnique(array1, array2));
console.log("Загальні елементи:", getCommonElements(array1, array2));
console.log("Елементи з першого, яких немає в другому:", getUniqueFromFirst(array1, array2));
*/



 // Завдання 3
const fruits = ["Яблуко", "Груша", "Банан", "Апельсин", "Виноград"];

function displayFruits(arr) {

    document.write("<ul>");
    arr.sort().forEach(fruit => {

        document.write(`<li>${fruit}</li>`);

    });

    document.write("</ul>");

}

function findFruit(arr, fruitName) {

    const index = arr.findIndex(fruit => fruit.toLowerCase() === fruitName.toLowerCase());
    return index !== -1 ? index : -1;

}

displayFruits(fruits);
console.log(`Індекс "Банан": ${findFruit(fruits, "Банан")}`);
console.log(`Індекс "Манго": ${findFruit(fruits, "Манго")}`);

