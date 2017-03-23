function symmetricNums(arr) {
    let numberStr = arr[0];
    let number = Number(numberStr);
    let result = "";

    for (let i = 1; i <= number; i++) {
        if (isSymmetric(i.toString())) {
            result += i + " ";
        }
    }
    console.log(result);


    function isSymmetric(numberStr) {
        for (let i = 0; i < numberStr.length / 2; i++) {
            if (numberStr[i] !== numberStr[numberStr.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}

let input = ['100'];
symmetricNums(input);
