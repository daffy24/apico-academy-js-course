const car = {
    name: "Tesla",
    model: "X",
};

function showCarInfo() {
    console.log(this.name);
    console.log(this.model);
}

const boundShowCarInfo = showCarInfo.bind(car);
boundShowCarInfo();