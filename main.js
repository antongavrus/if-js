// 7. Object (lesson 20

const obj1 = {
    a: 'a',
    b: {
        a: 'a',
        b: 'b',
        c: {
            a: 1,
        },
    },
};
const obj2 = {
    b: {
        c: {
            a: 1,
        },
        b: 'b',
        a: 'a',
    },
    a: 'a',
};
const obj3 = {
    a: {
        c: {
            a: 'a',
        },
        b: 'b',
        a: 'a',
    },
    b: 'b',
};


const deepEqual = (object1, object2) => {
    if (object1 === object2) {
        return true
    }
    if (typeof object1 !== 'object' && typeof object2 !== 'object'){
        return false
    }
    if (Object.keys(object1).length !== Object.keys(object2).length){
        return false
    }
    for (let key in object1) {

        if (!(key in object2)) {

            return false;
        }
        if (!deepEqual(object1[key], object2[key])) {
            return false;
        }
    }
    return true
}


// deepEqual(obj1, obj2); // true
// deepEqual(obj1, obj3); // false

console.log(deepEqual(obj1, obj2))
console.log(deepEqual(obj1, obj3))