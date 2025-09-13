/* // Task 1
const input = document.createElement("input");
input.type = "range";
input.min = 0;
input.max = 100;
input.value = 50;
input.style.width = "300px";
input.style.accentColor = "blue"; 
document.body.appendChild(input);
*/

/* // Task 2
const images = [

  "https://picsum.photos/id/1020/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400"
  
];

let index = 0;

const img = document.createElement("img");
img.width = 400;

const prev = document.createElement("button");
prev.textContent = "Назад";

const next = document.createElement("button");
next.textContent = "Вперед";

document.body.appendChild(img);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(prev);
document.body.appendChild(next);

function update() {

  img.src = images[index];
  prev.disabled = index === 0;
  next.disabled = index === images.length - 1;

}

prev.onclick = () => { index--; update(); };
next.onclick = () => { index++; update(); };

update();
*/

/* // Task 5
document.addEventListener('DOMContentLoaded', () => {

    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const generateBtn = document.getElementById('generate-btn');
    const calendarContainer = document.querySelector('.calendar-container');

    const monthNames = [

        "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
        "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"

    ];

    generateBtn.addEventListener('click', () => {

        const month = parseInt(monthInput.value);
        const year = parseInt(yearInput.value);

        if (isNaN(month) || month < 1 || month > 12 || isNaN(year)) {

            alert('Будь ласка, введіть коректні місяць і рік.');
            return;

        }

        renderCalendar(month, year);

    });

    function renderCalendar(month, year) {

        calendarContainer.innerHTML = '';

        const h2 = document.createElement('h2');
        h2.textContent = `${monthNames[month - 1]} ${year}`;
        calendarContainer.appendChild(h2);

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
        const headerRow = document.createElement('tr');

        weekDays.forEach(day => {

            const th = document.createElement('th');
            th.textContent = day;
            headerRow.appendChild(th);

        });
        thead.appendChild(headerRow);

        const date = new Date(year, month - 1, 1);
        
        let firstDay = date.getDay();

        if (firstDay === 0) { 

            firstDay = 6;

        } 
        
        else {

            firstDay--;

        }

        const daysInMonth = new Date(year, month, 0).getDate();

        let row = document.createElement('tr');

        for (let i = 0; i < firstDay; i++) {

            const td = document.createElement('td');
            td.classList.add('empty');
            row.appendChild(td);

        }

        for (let i = 1; i <= daysInMonth; i++) {

            const td = document.createElement('td');
            td.textContent = i;
            row.appendChild(td);

            if ((firstDay + i) % 7 === 0) {

                tbody.appendChild(row);
                row = document.createElement('tr');

            }

        }
        
        if (row.children.length > 0) {
            while (row.children.length < 7) {

                const td = document.createElement('td');
                td.classList.add('empty');
                row.appendChild(td);

            }

            tbody.appendChild(row);

        }

        table.appendChild(thead);
        table.appendChild(tbody);
        calendarContainer.appendChild(table);

    }

    const today = new Date();
    monthInput.value = today.getMonth() + 1;
    yearInput.value = today.getFullYear();
    renderCalendar(today.getMonth() + 1, today.getFullYear());

});
*/

const bookList = document.getElementById('bookList');
const items = Array.from(bookList.querySelectorAll('li'));
let lastClickedIndex = null;

bookList.addEventListener('click', (e) => {
  if (e.target.tagName !== 'LI') return;

  const clickedItem = e.target;
  const clickedIndex = items.indexOf(clickedItem);

  if (e.shiftKey && lastClickedIndex !== null) {
    let [start, end] = clickedIndex > lastClickedIndex
      ? [lastClickedIndex, clickedIndex]
      : [clickedIndex, lastClickedIndex];

    items.forEach((item, index) => {
      if (index >= start && index <= end) {
        item.classList.add('selected');
      }
    });
  } else if (e.ctrlKey || e.metaKey) {
    clickedItem.classList.toggle('selected');
    lastClickedIndex = clickedIndex;
  } else {
    items.forEach(item => item.classList.remove('selected'));
    clickedItem.classList.add('selected');
    lastClickedIndex = clickedIndex;
  }
});