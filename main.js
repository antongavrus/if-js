function min(a, b) {
  if (a < b) {
    return a;
  } else b < a;
  {
    return b;
  }
}

console.log(min(1, 90));

function max(a, b) {
  if (a > b) {
    return a;
  } else b > a;
  {
    return b;
  }
}

console.log(max(50, 40));

console.log('----------------------');
console.log('----------------------');
console.log('----------------------');

const ar = [2, 12, 100, 44, 50, 77, 80, 90, 15, 1];

function replace() {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] % 100 === 0) {
      ar[i] = ar[i] / 100 + 'zerozero';
    } else if (ar[i] % 10 === 0) {
      ar[i] = ar[i] / 10 + 'zero';
    }
  }
  return ar;
}

console.log(replace(ar));

console.log('----------------------');
console.log('----------------------');
console.log('----------------------');

function reverseString(str) {
  let reverse = '';
  for (const i = str.length - 1; i >= 0;) {
    reverse += str[i];
  }
  return reverse;
}

console.log(reverseString('qwwq'));

console.log('----------------------');
console.log('----------------------');
console.log('----------------------');

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(5)(2));

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

function qwerty() {
  let i = 0;
  return function (event) {
    event.target.style.color = colors[i];
    i++;
    if (i > colors.length) {
      i = 0;
    }
  };
}

text1.addEventListener('click', qwerty());

text2.addEventListener('click', qwerty());

text3.addEventListener('click', qwerty());
