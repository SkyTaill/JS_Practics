function check(input) {
    if (input < 1000) {
        var m = Math.sqrt(input);
        var isPrime = true;
        for (var i = 2; i <= m; i++) {
            if (input % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log('Число четное-', input);
        } else {
            console.log('Число не четное-', input);
        }
    } else {
        console.log("данные не верны")
    }
}

check(12)