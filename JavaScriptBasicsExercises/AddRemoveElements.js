function addRemoveElements(input) {

    let result = [];

    for (let i = 0; i < input.length; i++) {
        let args = input[i].split(" ");
        let command = args[0];
        let valueOrIndex = args[1];

        if (command === "add") {
            result.push(valueOrIndex);
        } else if (command === "remove") {
            result.splice(valueOrIndex, 1);
        }
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

