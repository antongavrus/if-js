const filter__info = document.getElementById('filter__info');
const filter = document.getElementById('filter')

filter__info.addEventListener('click', () => {
  filter.style.display = 'block';

});

document.addEventListener('click', (event) => {
  if (event.target === document && event.target !== filter && event.target !== filter__info) {
    filter.style.display = 'none'
  }
}, true);





const minus1 = document.getElementById('minus1');
const plus1 = document.getElementById('plus1');
const value1 = document.getElementById('value1');
const adultslabel = document.getElementById('filter__label-adults')

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
const adultschildren = document.getElementById('filter__label-children')


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
const adultsroom = document.getElementById('filter__label-room')


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

const filter__age = document.getElementById('filter__age')

function filterage () {
  if (number2 > 0) {
    filter__age.style.display = 'block';
  }
}

filterage()




