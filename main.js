const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (this.current === this.data.length) {
      this.current = 0;
      return this.next();
    }
    if (this.current < this.data.length) {
      return {
        done: false,
        value: this.data[this.current++],
      }
    }
      return {
        done: true
      };
  }
}

const changeStyle = id => event => {
  event.target.style.color = id.next().value;
};

 text1.addEventListener('click', changeStyle({...colors}));
 text2.addEventListener('click', changeStyle({...colors}));
 text3.addEventListener('click', changeStyle({...colors}));