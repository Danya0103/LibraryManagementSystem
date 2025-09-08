// Об'єкт прямокутника
const rectangle = {

    topLeft: {x: 0, y: 10},
    bottomRight: {x: 10, y: 0}

};

// 1. Вивести інформацію про прямокутник
function printRectangleInfo(rect) {

    console.log(`Ліва верхня точка: (${rect.topLeft.x}, ${rect.topLeft.y})`);
    console.log(`Права нижня точка: (${rect.bottomRight.x}, ${rect.bottomRight.y})`);

}

// 2. Отримати ширину
function getWidth(rect) {

    return rect.bottomRight.x - rect.topLeft.x;

}

// 3. Отримати висоту
function getHeight(rect) {
    return rect.topLeft.y - rect.bottomRight.y;
}

// 4. Отримати площу
function getArea(rect) {

    return getWidth(rect) * getHeight(rect);

}

// 5. Отримати периметр
function getPerimeter(rect) {

    return 2 * (getWidth(rect) + getHeight(rect));

}

// 6. Змінити ширину
function changeWidth(rect, amount) {

    rect.bottomRight.x += amount;

}

// 7. Змінити висоту
function changeHeight(rect, amount) {

    rect.topLeft.y += amount;

}

// 8. Змінити ширину та висоту
function changeSize(rect, widthChange, heightChange) {

    changeWidth(rect, widthChange);
    changeHeight(rect, heightChange);

}

// 9. Зміщення по осі X
function moveX(rect, amount) {
    rect.topLeft.x += amount;
    rect.bottomRight.x += amount;
}

// 10. Зміщення по осі Y
function moveY(rect, amount) {

    rect.topLeft.y += amount;
    rect.bottomRight.y += amount;

}

// 11. Зміщення по обох осях
function move(rect, xAmount, yAmount) {

    moveX(rect, xAmount);
    moveY(rect, yAmount);

}

// 12. Перевірити, чи точка всередині
function isPointInside(rect, pointX, pointY) {

    return pointX >= rect.topLeft.x && pointX <= rect.bottomRight.x &&
           pointY <= rect.topLeft.y && pointY >= rect.bottomRight.y;

}

printRectangleInfo(rectangle);
console.log(`Ширина: ${getWidth(rectangle)}`);
console.log(`Висота: ${getHeight(rectangle)}`);
console.log(`Площа: ${getArea(rectangle)}`);
console.log(`Периметр: ${getPerimeter(rectangle)}`);

changeWidth(rectangle, 5);
console.log(`Нова ширина: ${getWidth(rectangle)}`);

changeHeight(rectangle, -3);
console.log(`Нова висота: ${getHeight(rectangle)}`);

move(rectangle, 2, -2);
printRectangleInfo(rectangle);

console.log(`Точка (3, 5) всередині? ${isPointInside(rectangle, 3, 5)}`);
console.log(`Точка (15, 10) всередині? ${isPointInside(rectangle, 15, 10)}`);
