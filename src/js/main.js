const filterInfo = document.getElementById('filter__info');
const filter = document.getElementById('filter');

document.body.addEventListener(
    'click',
    (event) => {
        if (!filter.contains(event.target) && !filterInfo.contains(event.target)) {
            filter.style.display = 'none';
        }
    },
    true,
);

filterInfo.addEventListener('click', (event) => {
    if (!filter.contains(event.target)) {
        if (filter.style.display !== 'none') {
            filter.style.display = 'none';
        } else {
            filter.style.display = 'block';
        }
    }
});


const minus1 = document.getElementById('minus1');
const plus1 = document.getElementById('plus1');
const value1 = document.getElementById('value1');
const adultslabel = document.getElementById('filter__label-adults');

number1 = 0;
min = 0;
max = 30;

minus1.addEventListener('click', (e) => {
    if (number1 > min) {
        number1 = number1 - 1;
        value1.innerText = number1;
    }
    adultslabel.innerHTML = number1;
});

plus1.addEventListener('click', (e) => {
    if (number1 < max) {
        number1 = number1 + 1;
        value1.innerText = number1;
    }
    adultslabel.innerHTML = number1;
});

const minus2 = document.getElementById('minus2');
const plus2 = document.getElementById('plus2');
const value2 = document.getElementById('value2');
const adultschildren = document.getElementById('filter__label-children');


number2 = 0;
min = 0;
max = 30;

minus2.addEventListener('click', () => {
    if (number2 > min) {
        number2 = number2 - 1;
        value2.innerText = number2;
    }
    adultschildren.innerHTML = number2;
});

plus2.addEventListener('click', () => {
    if (number2 < max) {
        number2 = number2 + 1;
        value2.innerText = number2;
    }
    adultschildren.innerHTML = number2;
});

const minus3 = document.getElementById('minus3');
const plus3 = document.getElementById('plus3');
const value3 = document.getElementById('value3');
const adultsroom = document.getElementById('filter__label-room');

number3 = 0;
min = 0;
max = 30;

minus3.addEventListener('click', () => {
    if (number3 > min) {
        number3 = number3 - 1;
        value3.innerText = number3;
    }
    adultsroom.innerHTML = number3;
});

plus3.addEventListener('click', () => {
    if (number3 < max) {
        number3 = number3 + 1;
        value3.innerText = number3;
    }
    adultsroom.innerHTML = number3;
});

filterage = document.getElementById('filter__age');

const arrfilter = [];
const title = `
  <p id="title" class="filter__age-text">
    What is the age of the child you’re travelling with?
  </p>`;
const block =
    `
  <select id="filter__age__select" class="filter__select">
    <option>0 years</option>
    <option>1 years</option>
    <option>2 years</option>
    <option>3 years</option>
    <option>4 years</option>
    <option>5 years</option>
    <option>6 years</option>
    <option>7 years</option>
    <option>8 years</option>
    <option>9 years</option>
    <option>10 years</option>
    <option>11 years</option>
    <option>12 years</option>
    <option>13 years</option>
    <option>14 years</option>
    <option>15 years</option>
    <option>16 years</option>
    <option>17 years</option>
  </select>`;

plus2.addEventListener('click', () => {
    if (number2 > 1) {
        filterage.innerHTML += block
    } else {
        filterage.innerHTML += title
        filterage.innerHTML += block
    }
});

minus2.addEventListener('click', () => {
    const filterAgeSelect = document.getElementById('filter__age__select')
    const title = document.getElementById('title')

    if (number2 > 0) {
        filterage.removeChild(filterAgeSelect)
    } else {
        filterage.removeChild(title)
        filterage.removeChild(filterAgeSelect)
    }
});


const qwerty = document.getElementById('qwerty');


const massiv = () => (fetch('https://if-student-api.onrender.com/api/hotels/popular', {
    method: 'GET'
}).then(response => response.json())
    .then(data => data.map((item) => {
        qwerty.innerHTML += `<div>
        <img src=${item.imageUrl} alt="your image name" class="homes__images-images">
        <h1 class="images__name">${item.name}</h1>
        <p class="images__place">${item.city},</p>
        <p class="images__place">${item.country}</p>
      </div>`;
        data.length = 4;
    }))
    .catch(err => {
        console.log('Ошибка:', err);
    }));
massiv()


