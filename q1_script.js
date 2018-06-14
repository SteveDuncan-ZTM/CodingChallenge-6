// (1) Question 1. Array is sorted into sub-arrays of duplicate values

let arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function toSubArrays (arr){
    // sort the array numerically
    let sortArr = arr.sort((a,b) => a-b);
    // temp holding arrays
    let tmpArr = [];
    let result = [];
    
    for (let i = 0; i <= sortArr.length; i++) {
        if ((i === 0) || (sortArr[i] === sortArr[i - 1])){
            // add first element or matching element to tmp array
            tmpArr.push(sortArr[i]);
        } else {
            // add tmp array to result array
            result.push(tmpArr);
            // clear the tmp array
            tmpArr = [];
            // add new value to tmp array
            tmpArr.push(sortArr[i]);
        }
    }
    return result;
}
console.log(toSubArrays(arr));

// *******************************************************************
// (2) Question 1 Bonus: This function takes an unsorted mixed array of numbers and strings. The result is an object with 2 sorted arrays, one of numbers and one of strings.

// Calling the function with optional second argument 'subs' returns an array with separate number and string arrays,.with each sub array then further sorted into sub arrays by duplicate value.

let arr2 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20,"2","10","2","10"];

function toSubArraysByType (arr, subs){
    
    // temp holding arrays
    let strArr = [];
    let numArr = [];
    let result = [];

    // sort the array numerically
    arr.sort((a,b) => a-b)
        // separate number and string values
        .filter(function(el) {
            if(typeof(el)==='number'){
                return numArr.push(el);
            } else if (typeof(el)==='string'){
                return strArr.push(el);
            }
    })
   
    // to return array of sorted sub arrays:
    if (subs === 'subs') {
        result.push(toSubArrays(numArr), toSubArrays(strArr));
        return result;
    } else {
        // return both number and string arrays
    return {numArr, strArr}
    }   
}

// Return separate arrays for numbers and strings
console.log(toSubArraysByType(arr2));

// Return array with array with 2 sub arrays, one of numbers and one of strings. Each sub array is then further sorted into sub arrays by duplicate value.
console.log(toSubArraysByType(arr2, 'subs'));