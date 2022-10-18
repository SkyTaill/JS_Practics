function check(inputArr) {
    let even = 0;
    let notEven = 0;
    let zero = 0;
    inputArr.forEach(element => {

        if (element != 0) {
            if (element % 2 == 0 && element != null) {
                even++;
            } else if (element % 2 > 0 && element != null) {
                notEven++;
            }
        } else {
            zero++;
        }


    });
    console.log("Чет-", even, " Не чет-", notEven, " Нули-", zero)
}


let mass = [null, "sdfs", "sadass", 213, 1, 3, 2, 0, 0];
check(mass)