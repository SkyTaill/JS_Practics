const cat = {
    name: "dd",
    year: 12,
    lastName: "da",
};

function input(inputValue, nameMass) {
    let mass = [];
    for (let key in inputValue) {
        nameMass.forEach(element => {
            if (key == element) {
                console.log(key);
            }
        });

    }

}

let nameMass = ["name", "fsdf", "dsass"];

input(cat, nameMass);



