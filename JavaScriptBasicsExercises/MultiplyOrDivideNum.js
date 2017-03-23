function multiplyTwoNums(arr) {
    let firstNum = Number(arr[0]);
    let secondNum = Number(arr[1]);

    if(secondNum >= firstNum) {
        let product = firstNum * secondNum;
        return product;
    }
    else {
        let quotient = firstNum / secondNum;
        return quotient;
    }
}


