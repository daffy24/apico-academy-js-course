function filterArray(initialArray) {
    let filterArr = [];
    for (let i = 0; i < initialArray.length; i++) {
        if (typeof initialArray[i] === 'string') {
            filterArr.push(initialArray[i]);
        }
    }
    return filterArr;
}

let initialArray = [2, "string", 3, , , "test"];
let filteredArray = filterArray(initialArray);
console.log(filteredArray);