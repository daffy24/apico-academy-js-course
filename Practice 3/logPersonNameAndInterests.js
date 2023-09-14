const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};

const testArgs = ['sushi', 'hiking'];

let logPersonNameAndInterests = function() {
    const fullName = Person.getFullName.call(this);
    const interests = Array.prototype.slice.call(arguments);
    const interestsList = interests.join(', ');

    console.log(`${fullName} loves: ${interestsList}`);
};

logPersonNameAndInterests.apply(Person, testArgs);