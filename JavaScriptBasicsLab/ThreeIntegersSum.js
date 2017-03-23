function calculate(arr) {
    let numbers = arr[0].split(' ').map(Number);

    console.log(
        checkSum(numbers[0], numbers[1], numbers[2]) ||
        checkSum(numbers[0], numbers[2], numbers[1]) ||
        checkSum(numbers[1], numbers[2], numbers[0]) ||
        'No'
    );

    function checkSum(num1, num2, sum) {
        if (num1 + num2 !== sum) {
            return false;
        }
        if (num1 > num2) {
            [num1, num2] = [num2, num1]; // swapping the two numbers
        }
        return `${num1} + ${num2} = ${sum}`
    }
}

let input = ['-5 -3 -2'];
calculate(input);
