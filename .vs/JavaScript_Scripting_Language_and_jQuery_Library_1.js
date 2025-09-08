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
