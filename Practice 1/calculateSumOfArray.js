function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
    let sum = 0;
    for (const element of initialArray) {
        if (typeof element === 'number') {
            sum += element;
        }
    }
    console.log(sum);
}

calculateSumOfArray();