function main(input) {

    let sum = 0;

    for (i = 0; i < input.length; i++) {

        let numCharArrRev = input[i].split('').reverse().join('');
        sum += parseInt(numCharArrRev);
    }

    console.log(sum);
}
