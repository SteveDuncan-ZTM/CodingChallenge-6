// arrays to search
// apositive numbers
let posArr = [1,2,3,4,5,6,7,8,9,10];
// negative numbers
let negArr = posArr.map((val, i, arr) => {
    let retVal = '-' + val;
    return parseInt(retVal,10);
});
// combine positive and negative arrays
let arr = negArr.concat(posArr).sort((a,b) => a-b);


// function: Takes target number, an array and a return type, searches the array
// for pairs of numbers that add to equal the target number. This function works
// on positive or negative values.
function addEm (num, arr, ret) {
    let retVal=[];
    for (let i=0;i<=arr.length;i++) {
        // subtract array value from target number
        let diff = num - arr[i];
        // if diff is in array,the diff and the current array value
        // are addends to the target number
        if (arr.indexOf(diff) !== -1) {
            // build the return string
            let val = (`${diff} + ${arr[i]} = ${num}`);
            // return all pairs of values that equal target value
            if (ret === 'all') {
                retVal.push(val)
            } else {
                // return only a single pair of values 
                return val;
            }
        }
    }
    // return array of all values that add to equal target number
    return(retVal)
}

// call the function 
let targetNum = prompt('Enter number to check')
// call function and get return value(s)
// to iterate all number pairs that equal target num, pass arg of 'all'
// to return only first matchin pair, leave off the 3rd arg
// the function can be called with an array of positive numbers (posArr), an array of
// negative numbers negArr, or combined (arr)
let nums = (addEm(targetNum, newArr, 'all'));
// iterate the value(s)
nums.forEach((num) => console.log(num));