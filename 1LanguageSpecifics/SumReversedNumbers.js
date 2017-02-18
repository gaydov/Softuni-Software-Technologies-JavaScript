function main(input) {

    let numbers = input[0].split(' ');
    let sum = 0;

    for (i = 0; i < numbers.length; i++) {

        let numCharArrRev = numbers[i].split('').reverse().join('');
        sum += parseInt(numCharArrRev);
    }

    console.log(sum);
}
