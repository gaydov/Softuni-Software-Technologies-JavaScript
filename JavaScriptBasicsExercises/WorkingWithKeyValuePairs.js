function printLastValue(arr) {
    let obj = {};

    for (let i = 0; i < arr.length - 1; i++) {
        let args = arr[i].split(' ');

        let key = args[0];
        let value = args[1];

        if (obj[key]) {
            obj[key].push(value);
        } else {
            obj[key] = [value];
        }
    }

    let searchedKey = arr[arr.length - 1];

    console.log(obj[searchedKey] ? obj[searchedKey].join('\n') : "None");
}
