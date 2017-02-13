function main(input) {

    let numberDecimal = parseInt(input[0]);
    let resultHex = numberDecimal.toString(16).toUpperCase();
    let resultBinary = numberDecimal.toString(2);
    console.log(resultHex);
    console.log(resultBinary);
}

