function main(input) {

    let NthFibNum = fib(input);
    console.log(NthFibNum);

    function fib(n) {

        if (n == '0' || n == '1') {

            return 1;
        }
        else {

            let firstNum = 1;
            let secondNum = 1;
            let currentNum = 0;

            for (divisor = 2; divisor <= n; divisor++) {

                currentNum = firstNum + secondNum;
                firstNum = secondNum;
                secondNum = currentNum;
            }

            return currentNum;
        }
    }
}
