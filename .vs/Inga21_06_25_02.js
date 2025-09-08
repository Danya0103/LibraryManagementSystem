 // Завдання 1
const shoppingList = [

    {name: "Хліб", quantity: 1, bought: false},
    {name: "Молоко", quantity: 2, bought: true},
    {name: "Яйця", quantity: 12, bought: false}

];

function displayShoppingList(list) {

    const sortedList = [...list].sort((a, b) => a.bought - b.bought);
    console.log(sortedList);

}

function addPurchase(list, productName, quantity) {

    const item = list.find(product => product.name === productName);
    if (item) {

        item.quantity += quantity;

    } 
    
    else {

        list.push({ name: productName, quantity, bought: false });

    }
}

function markAsBought(list, productName) {

    const item = list.find(product => product.name === productName);
    if (item) item.bought = true;

}

displayShoppingList(shoppingList);
addPurchase(shoppingList, "Молоко", 1);
markAsBought(shoppingList, "Хліб");
displayShoppingList(shoppingList);




/* // Завдання 2
const receipt = [

    {name: "Хліб", quantity: 2, price: 20},
    {name: "Молоко", quantity: 1, price: 25},
    {name: "Яйця", quantity: 12, price: 2.5}

];

function displayReceipt(receipt) {

    receipt.forEach(item => {

        console.log(`${item.name} - ${item.quantity} шт. * ${item.price} грн = ${item.quantity * item.price} грн`);

    });
}

function getTotal(receipt) {

    return receipt.reduce((total, item) => total + item.quantity * item.price, 0);

}

function getMostExpensive(receipt) {

    return receipt.reduce((max, item) => (item.quantity * item.price > max ? item.quantity * item.price : max), 0);

}

function getAveragePrice(receipt) {

    const totalQuantity = receipt.reduce((sum, item) => sum + item.quantity, 0);
    return getTotal(receipt) / totalQuantity;

}

displayReceipt(receipt);
console.log(`Загальна сума: ${getTotal(receipt)} грн`);
console.log(`Найдорожча покупка: ${getMostExpensive(receipt)} грн`);
console.log(`Середня вартість товару: ${getAveragePrice(receipt)} грн`);
*/


/* // Завдання 3
const styles = [

    {name: "color", value: "red"},
    {name: "font-size", value: "20px"},
    {name: "text-align", value: "center"}

];

function displayStyledText(styles, text) {

    const styleString = styles.map(style => `${style.name}: ${style.value}`).join("; ");

    document.write(`<p style="${styleString}">${text}</p>`);

}

displayStyledText(styles, "Це приклад тексту зі стилями.");
*/



/* // Завдання 4
const classrooms = [

    {name: "Аудиторія 101", seats: 20, faculty: "Математика"},
    {name: "Аудиторія 202", seats: 15, faculty: "Фізика"},
    {name: "Аудиторія 303", seats: 10, faculty: "Хімія"}

];

function displayClassrooms(classrooms) {

    console.log(classrooms);

}

function getClassroomsByFaculty(classrooms, faculty) {

    return classrooms.filter(classroom => classroom.faculty === faculty);

}

function getClassroomsForGroup(classrooms, group) {

    return classrooms.filter(classroom => classroom.seats >= group.students && classroom.faculty === group.faculty);

}


function sortBySeats(classrooms) {

    return [...classrooms].sort((a, b) => b.seats - a.seats);

}

function sortByName(classrooms) {

    return [...classrooms].sort((a, b) => a.name.localeCompare(b.name));

}

displayClassrooms(classrooms);
console.log(getClassroomsByFaculty(classrooms, "Фізика"));
console.log(getClassroomsForGroup(classrooms, { name: "Група 1", students: 15, faculty: "Математика" }));
console.log(sortBySeats(classrooms));
console.log(sortByName(classrooms));
*/
