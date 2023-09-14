function findUser(initialObject) {
    const result = [];

    for (const name in initialObject) {
        const person = initialObject[name];
        if (person.age >= 18 && person.city === "London") {
            result.push(name);
        }
    }

    return result;
}

const initialObject = {
    Alice: { age: 18, city: "London" },
    Bob: { age: 7, city: "Paris" },
    Peter: { age: 50, city: "Berlin" }
};

const users = findUser(initialObject);
console.log(users);