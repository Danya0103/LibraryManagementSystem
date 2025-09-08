// Завдання 1: Автомобіль

const car = {manufacturer: "Toyota", model: "Corolla", year: 2020, averageSpeed: 60};

function printCarInfo(car) {

    console.log(`${car.manufacturer} ${car.model}, ${car.year}, швидкість: ${car.averageSpeed} км/год`);

}

function calculateTravelTime(car, distance) {

    const travelTime = distance / car.averageSpeed;
    return travelTime + Math.floor(travelTime / 4);

}

printCarInfo(car);
console.log(`Час для подолання 500 км: ${calculateTravelTime(car, 500)} год.`);


// Завдання 2: Дріб
const fraction1 = {num: 1, den: 2};
const fraction2 = {num: 3, den: 4};

function gcd(a, b) { return b ? gcd(b, a % b) : a; }
function simplify(frac) {

    const div = gcd(frac.num, frac.den);
    return {num: frac.num / div, den: frac.den / div};

}

function addFractions(f1, f2) {

    return simplify({ num: f1.num * f2.den + f2.num * f1.den, den: f1.den * f2.den });

}

function subtractFractions(f1, f2) {

    return simplify({ num: f1.num * f2.den - f2.num * f1.den, den: f1.den * f2.den });

}

function multiplyFractions(f1, f2) {

    return simplify({ num: f1.num * f2.num, den: f1.den * f2.den });

}

function divideFractions(f1, f2) {

    return simplify({ num: f1.num * f2.den, den: f1.den * f2.num });

}

console.log("Сума дробів:", addFractions(fraction1, fraction2));
console.log("Різниця дробів:", subtractFractions(fraction1, fraction2));
console.log("Множення дробів:", multiplyFractions(fraction1, fraction2));
console.log("Ділення дробів:", divideFractions(fraction1, fraction2));


// Завдання 3: Час
const time = {h: 20, m: 30, s: 45};

function printTime(t) {

    console.log(`${t.h.toString().padStart(2, "0")}:${t.m.toString().padStart(2, "0")}:${t.s.toString().padStart(2, "0")}`);

}

function addSeconds(t, sec) {

    const total = t.h * 3600 + t.m * 60 + t.s + sec;
    t.h = Math.floor(total / 3600) % 24;
    t.m = Math.floor((total % 3600) / 60);
    t.s = total % 60;

}

function addMinutes(t, min) {

    addSeconds(t, min * 60);

}

function addHours(t, hr) {

    addSeconds(t, hr * 3600);
    
}

printTime(time);
addSeconds(time, 30);
printTime(time);
addMinutes(time, 15);
printTime(time);
addHours(time, 2);
printTime(time);
