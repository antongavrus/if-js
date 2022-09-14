// 6. Работа с переменными

let user = 'John Doe';
console.log(user);

const student = 'Anton';
console.log(student);

user = student;
// Переменной user присвоилось значение student, то есть "Anton"
console.log(user);

// 7. Работа с примитивами
console.log('----------------------');

let test = 1;

test += 1;
// 2
console.log(test);

test -= 1;
// 1
console.log(test);

test = true;
// Значение в bool (true)
console.log(test);

// 8. Дан массив [2, 3, 5, 8].
console.log('----------------------');

let result = 1;
const arr = [2, 3, 5, 8];

for (let i = 0; i < arr.length; i++) {
  result = result * arr[i];
}

console.log(result);

// 9
console.log('----------------------');

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}

// 10
console.log('----------------------');

const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 == 0) {
    console.log(arr3[i]);
  }
}
