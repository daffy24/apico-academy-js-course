function removeObj(arr, keyName, value) {
    const result = [];
    for (const obj of arr) {
        if (!(keyName in obj) || obj[keyName] !== value) {
            result.push(obj);
        }
    }
    return result;
}

const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];

console.log(removeObj(arr, "age", 2));
console.log(removeObj(arr, "year", 2));