function objsToJSONStings(arr) {
    let student = {};

    for (let i = 0; i < arr.length; i++) {
        let args = arr[i].split(" -> ");
        let key = args[0];
        let value = args[1];

        if (key === "age" || key === "grade") {
            value = Number(value);
        }
        student[key] = value;
    }
    console.log(JSON.stringify(student));
}

