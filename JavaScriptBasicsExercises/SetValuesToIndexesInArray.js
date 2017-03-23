function setValuesToIndexes(arr) {

    let arrayLength = arr[0];

    let result = [];
    result.length = arrayLength;

    for (let i = 1; i < arr.length; i++) {
        let args = arr[i].split(' - ');
        let index = args[0];
        let value = args[1];

        result[index] = value;
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i] === undefined) {
            result[i] = 0;
        }
        console.log(result[i]);
    }
}

