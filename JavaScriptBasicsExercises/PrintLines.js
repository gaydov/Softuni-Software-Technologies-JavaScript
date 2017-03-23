function printLines(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Stop") {
            return;
        }
        console.log(arr[i]);
    }
}

