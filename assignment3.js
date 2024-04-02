// Write a function removeDuplicates(nums) that takes a sorted array of numbers nums and modifies it in-place to remove duplicate elements, returning the new length of the unique elements.
 let numbersArray = [3,23,33,33,40,45,50,50,50,53,78]
 let numbersArray2 = [3,4,4,5,6,7,7,7,8,9,9,10,10,10,11]

 function removeDuplicates(nums){
    let cleanArray = []
    for(let index=0; index<nums.length; index++){
        let currentNumber = nums[index]
        if(!cleanArray.includes(currentNumber)){
            cleanArray.push(currentNumber)
        }
    }
    // console.log(cleanArray);
    return cleanArray
 }
 removeDuplicates(numbersArray)
 removeDuplicates(numbersArray2)