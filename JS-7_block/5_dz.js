class Electricity {
    constructor(power) {
        this.power = power;
    }

    enabling() {
        return this.power;
    }
}

class Lamp extends Electricity {
    constructor(needPower, power) {
        super(power)
        this.needPower = needPower;
    }

    enabling() {
        if (this.power > this.needPower) {
            console.log("Power full");
        } else {
            console.log("Need Power: ", this.needPower - super.enabling())
        }
    }
}

class Tw extends Electricity {
    constructor(needPower, power) {
        super(power)
        this.needPower = needPower;
    }

    enabling() {
        if (this.power > this.needPower - 5) {
            console.log("Power full");
        } else {
            console.log("Need Power: ", this.needPower - super.enabling())
        }
    }
}


const electricity = new Electricity(23);
const lamp = new Lamp(70, 60);
const tw = new Tw(50, 52);
tw.enabling();
lamp.enabling();
