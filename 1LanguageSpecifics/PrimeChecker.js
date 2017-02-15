function main(input) {

    let number = parseInt(input);
    isPrime(number);

    function isPrime(inputNum) {

        let isPrime = true;

        if (inputNum == 0 || inputNum == 1) {

            isPrime = false;
        }
        else {

            for (divisor = 2; divisor <= Math.sqrt(inputNum); divisor++) {

                if (inputNum % divisor == 0) {

                    isPrime = false;
                }
            }
        }

        if(isPrime) {
            
            console.log("True");
        }
        else  {
            
            console.log("False");
        }
    }
}