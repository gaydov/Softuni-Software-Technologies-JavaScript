function main(input) {

    let firstArray = input[0].split(' ');
    let secondArray = input[1].split(' ');

    let shorterArrLen = Math.min(firstArray.length, secondArray.length);
    let isCharEqual = false;

    for (i = 0; i < shorterArrLen; i++) {

        if (firstArray[i] < secondArray[i]) {

            console.log(firstArray.join(''));
            console.log(secondArray.join(''));
            return;
        }
        else if (firstArray[i] > secondArray[i]) {

            console.log(secondArray.join(''));
            console.log(firstArray.join(''));
            return;
        }
        else {

            isCharEqual = true;
            continue;
        }
    }

    if (isCharEqual) {

        if (firstArray.length < secondArray.length) {

            console.log(firstArray.join(''));
            console.log(secondArray.join(''));
        }
        else {

            console.log(secondArray.join(''));
            console.log(firstArray.join(''));
        }
    }
}
