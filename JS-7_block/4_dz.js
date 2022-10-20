function Electricity(power) {
    this.power = power
}

Electricity.prototype.enabling = function () {
    console.log(this.power);
}

function Lamp(needPower, power) {
    this.power = power,
        this.needPower = needPower
}

Lamp.prototype.enabling = function () {
    if (this.power < this.needPower) {
        console.log("Power full");
    } else {
        console.log("need Power");
    }
}


function Tv(needPower, power) {
    this.power = power,
        this.needPower = needPower
}

Tv.prototype.enabling = function () {
    if (this.power < this.needPower) {
        console.log("Power full");
    } else {
        console.log("need Power");
    }
}


//Lamp.prototype.enabling = function ()

const power = new Electricity(47);
const lamp = new Lamp(34, 40);
const tv = new Tv(40, 30);
power.enabling();
lamp.enabling();
tv.enabling();