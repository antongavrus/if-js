const filter = document.getElementById('filter')

filter.addEventListener('click', (event)=> {
  filter.style.display = 'block'
})

const minus = document.getElementById('minus')
const value = document.getElementById('value')
number = 0
min = 0
max = 30

minus.addEventListener('click', ()=> {
   if (number>min) {
  number = number - 1;
  value.innerText = number;
  }
})

