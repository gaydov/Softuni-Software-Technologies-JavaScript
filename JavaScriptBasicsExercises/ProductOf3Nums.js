function isProductNegativeOrPositive(arr) {

    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        let number = Number(arr[i]);

        if (number === 0) {
            return console.log('Positive');
        }
        if (number < 0) {
            counter++;
        }
    }

    if (counter % 2 === 0) {
        return console.log('Positive');
    }
    else {
        return console.log('Negative');
    }
}

