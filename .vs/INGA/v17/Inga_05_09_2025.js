/* // Task 1

document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.padding = "20px";

const h1 = document.createElement("h1");
h1.textContent = "Форма логіна";
document.body.appendChild(h1);

const form = document.createElement("form");
document.body.appendChild(form);

const nameLabel = document.createElement("label");
nameLabel.textContent = "Ім’я: ";
form.appendChild(nameLabel);

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.required = true;
form.appendChild(nameInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

const passLabel = document.createElement("label");
passLabel.textContent = "Пароль: ";
form.appendChild(passLabel);

const passInput = document.createElement("input");
passInput.type = "password";
passInput.required = true;
form.appendChild(passInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

const rememberLabel = document.createElement("label");
const rememberInput = document.createElement("input");
rememberInput.type = "checkbox";
rememberLabel.appendChild(rememberInput);
rememberLabel.append(" Запам’ятати мене");
form.appendChild(rememberLabel);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

const btn = document.createElement("button");
btn.type = "submit";
btn.textContent = "Увійти";
form.appendChild(btn);

const result = document.createElement("p");
document.body.appendChild(result);

form.addEventListener("submit", function(e) {

  e.preventDefault();
  const name = nameInput.value.trim();
  const pass = passInput.value.trim();

  if (!name || !pass) {

    result.textContent = "Введіть ім’я і пароль!";
    result.style.color = "red";
    return;

  }
  
  const remembered = rememberInput.checked ? "запам’ятав" : "не запам’ятав";
  result.style.color = "black";
  result.textContent = `Привіт, ${name}! Я тебе запам’ятав.`;

});
*/

/* // Task 2
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.padding = "20px";

const h1 = document.createElement("h1");
h1.textContent = "Реєстрація";
document.body.appendChild(h1);

const form = document.createElement("form");
document.body.appendChild(form);

const emailLabel = document.createElement("label");
emailLabel.textContent = "Пошта: ";
form.appendChild(emailLabel);

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.required = true;
form.appendChild(emailInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

const loginLabel = document.createElement("label");
loginLabel.textContent = "Логін: ";
form.appendChild(loginLabel);

const loginInput = document.createElement("input");
loginInput.type = "text";
loginInput.required = true;
form.appendChild(loginInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

const passLabel1 = document.createElement("label");
passLabel1.textContent = "Пароль: ";
form.appendChild(passLabel1);

const passInput1 = document.createElement("input");
passInput1.type = "password";
passInput1.required = true;
form.appendChild(passInput1);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

const passLabel2 = document.createElement("label");
passLabel2.textContent = "Повторіть пароль: ";
form.appendChild(passLabel2);

const passInput2 = document.createElement("input");
passInput2.type = "password";
passInput2.required = true;
form.appendChild(passInput2);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

const btn = document.createElement("button");
btn.type = "submit";
btn.textContent = "Зареєструватися";
form.appendChild(btn);

const result = document.createElement("p");
document.body.appendChild(result);

form.addEventListener("submit", function(e) {

  e.preventDefault();
  const email = emailInput.value.trim();
  const login = loginInput.value.trim();
  const pass1 = passInput1.value.trim();
  const pass2 = passInput2.value.trim();

  if (!email || !login || !pass1 || !pass2) {

    result.textContent = "Заповніть усі поля!";
    result.style.color = "red";
    return;

  }

  if (pass1 !== pass2) {

    result.textContent = "Паролі не співпадають!";
    result.style.color = "red";
    return;

  }
  result.style.color = "black";
  result.textContent = `На ${email} надіслано лист із підтвердженням.`;

});
*/

/* // Task 3
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.padding = "20px";

const h1 = document.createElement("h1");
h1.textContent = "Інформація про користувача";
document.body.appendChild(h1);

const form = document.createElement("form");
document.body.appendChild(form);

function addField(labelText, type) {

  const label = document.createElement("label");
  label.textContent = labelText + ": ";
  form.appendChild(label);

  const input = document.createElement("input");
  input.type = type;
  input.required = true;
  form.appendChild(input);

  form.appendChild(document.createElement("br"));
  form.appendChild(document.createElement("br"));
  return input;

}

const surnameInput = addField("Прізвище", "text");
const nameInput = addField("Ім’я", "text");
const birthInput = addField("Дата народження", "date");
const countryInput = addField("Країна", "text");
const cityInput = addField("Місто", "text");

const genderLabel = document.createElement("label");
genderLabel.textContent = "Гендер: ";
form.appendChild(genderLabel);

const genderSelect = document.createElement("select");
["", "Чоловік", "Жінка", "Інше"].forEach(opt => {

  const option = document.createElement("option");
  option.value = opt;
  option.textContent = opt;
  genderSelect.appendChild(option);

});

genderSelect.required = true;
form.appendChild(genderSelect);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

const btn = document.createElement("button");
btn.type = "submit";
btn.textContent = "Зберегти";
form.appendChild(btn);

const result = document.createElement("div");
result.style.marginTop = "20px";
document.body.appendChild(result);

form.addEventListener("submit", function(e) {

  e.preventDefault();
  const surname = surnameInput.value.trim();
  const name = nameInput.value.trim();
  const birth = birthInput.value;
  const country = countryInput.value.trim();
  const city = cityInput.value.trim();
  const gender = genderSelect.value;

  if (!surname || !name || !birth || !country || !city || !gender) {

    result.textContent = "Заповніть усі поля!";
    result.style.color = "red";
    return;

  }

  result.style.color = "black";
  result.innerHTML =
    `<p>Прізвище: ${surname}</p>` +
    `<p>Ім’я: ${name}</p>` +
    `<p>Дата народження: ${birth}</p>` +
    `<p>Країна: ${country}</p>` +
    `<p>Місто: ${city}</p>` +
    `<p>Гендер: ${gender}</p>`;

});
*/

/* // Task 4
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.padding = "20px";

const h1 = document.createElement("h1");
h1.textContent = "Палітра кольорів";
document.body.appendChild(h1);

const palette = document.createElement("div");
palette.style.display = "flex";
palette.style.flexWrap = "wrap";
palette.style.gap = "10px";
palette.style.marginBottom = "20px";
document.body.appendChild(palette);

function addColor(name, hex) {

  const item = document.createElement("div");
  item.style.width = "100px";
  item.style.height = "100px";
  item.style.display = "flex";
  item.style.alignItems = "center";
  item.style.justifyContent = "center";
  item.style.border = "1px solid #ccc";
  item.style.borderRadius = "8px";
  item.style.background = hex;
  item.textContent = name;
  item.style.color = "#fff";
  item.style.fontWeight = "bold";
  palette.appendChild(item);

}

addColor("Червоний", "#ff0000");
addColor("Зелений", "#00ff00");
addColor("Синій", "#0000ff");

const form = document.createElement("form");
document.body.appendChild(form);

const nameLabel = document.createElement("label");
nameLabel.textContent = "Назва кольору: ";
form.appendChild(nameLabel);

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.required = true;
form.appendChild(nameInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

const hexLabel = document.createElement("label");
hexLabel.textContent = "HEX-код: ";
form.appendChild(hexLabel);

const hexInput = document.createElement("input");
hexInput.type = "color";
hexInput.value = "#000000";
form.appendChild(hexInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

const btn = document.createElement("button");
btn.type = "submit";
btn.textContent = "Додати колір";
form.appendChild(btn);

form.addEventListener("submit", function(e) {

  e.preventDefault();
  const name = nameInput.value.trim();
  const hex = hexInput.value;
  if (!name) return;
  addColor(name, hex);
  nameInput.value = "";

});
*/

/* // Task 5
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#f5e6d3";
document.body.style.padding = "20px";

const container = document.createElement("div");
container.style.background = "#fdf5ee";
container.style.padding = "15px";
container.style.border = "1px solid #d4bba3";
container.style.borderRadius = "6px";
container.style.width = "500px";
document.body.appendChild(container);

const allQuestionsTitle = document.createElement("h3");
allQuestionsTitle.textContent = "Всі питання:";
container.appendChild(allQuestionsTitle);

const questionsList = document.createElement("div");
questionsList.style.marginBottom = "20px";
container.appendChild(questionsList);

const formTitle = document.createElement("h3");
formTitle.textContent = "Додати нове питання:";
container.appendChild(formTitle);

const form = document.createElement("form");
container.appendChild(form);

function addInput(labelText) {

  const label = document.createElement("label");
  label.textContent = labelText;
  label.style.display = "block";
  label.style.marginTop = "10px";
  form.appendChild(label);

  const input = document.createElement("input");
  input.type = "text";
  input.style.width = "100%";
  input.required = true;
  form.appendChild(input);

  return input;

}

const qInput = addInput("Питання:");
const trueInput = addInput("Правильна відповідь:");
const falseInput = addInput("НЕ правильна відповідь:");

const btn = document.createElement("button");
btn.type = "submit";
btn.textContent = "Додати";
btn.style.display = "block";
btn.style.marginTop = "15px";
btn.style.width = "100%";
btn.style.padding = "5px";
form.appendChild(btn);

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const q = qInput.value.trim();
  const t = trueInput.value.trim();
  const f = falseInput.value.trim();

  if (!q || !t || !f) return;

  const item = document.createElement("div");
  item.style.marginBottom = "15px";

  const qLink = document.createElement("a");
  qLink.href = "#";
  qLink.textContent = q;
  qLink.style.display = "block";
  qLink.style.color = "#004080";
  qLink.style.textDecoration = "underline";
  item.appendChild(qLink);

  const tP = document.createElement("div");
  tP.textContent = "Correct answer: " + t;
  item.appendChild(tP);

  const fP = document.createElement("div");
  fP.textContent = "Wrong answer: " + f;
  item.appendChild(fP);

  questionsList.appendChild(item);

  qInput.value = "";
  trueInput.value = "";
  falseInput.value = "";

});
*/