function isEvenArray(initialArray) {
    let allEven = true;
    for (let i = 0; i < initialArray.length; i++) {
        if (initialArray[i] % 2 !== 0) {
            allEven = false;
            break;
        }
    }
    if (allEven) {
        return "YES";
    } else {
        return "NO";
    }
}

let initialArray = [1, 2, 2, 6, 4, 4, 8];
let result = isEvenArray(initialArray);
console.log(result);