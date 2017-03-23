function findLargestThreeNums(arr) {

    let nums = arr.map(Number).sort((a, b) => b - a);
    let count = Math.min(3, nums.length);

    for (let i = 0; i < count; i++) {
        console.log(nums[i]);
    }
}

let input = ['10', '30', '15', '20', '50', '5'];
findLargestThreeNums(input);