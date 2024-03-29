var twoSum = function (numbers, target) {
    var sum = 0;
    var left = 0;
    var right = numbers.length - 1;
    while (left < right) {
        sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
};
// console.log(twoSum([-1, 0], -1))