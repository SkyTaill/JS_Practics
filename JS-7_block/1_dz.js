const cat = {
    name: "dd",
    year: 12,
};

function input(inputValue) {
    let mass = [];
    for (let key in inputValue) {

        if (inputValue.hasOwnProperty(key)) {
            mass.push(key)
        }
    }

    mass.forEach(val => {
        console.log("Key: " + val + "," + " value: " + inputValue[val])

    });
}


input(cat);



