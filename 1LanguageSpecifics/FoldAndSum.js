function main(input) {

    let inputArr = input[0].split(' ');
    let k = inputArr.length / 4;

    let left = [];
    for (i = 0; i < k; i++) {

        left.push(inputArr[i]);
    }
    left.reverse();

    let right = [];
    for (i = inputArr.length - 1; i >= 3 * k; i--) {

        right.push(inputArr[i]);
    }

    let topRow = left.concat(right);

    let bottomRow = [];
    for (i = k; i < 3 * k; i++) {

        bottomRow.push(inputArr[i]);
    }

    let result = [];
    for (i = 0; i < 2 * k; i++) {

        result.push(parseInt(topRow[i]) + parseInt(bottomRow[i]));
    }

    console.log(result.join(' '));
}