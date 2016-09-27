let randomArray = [4,2,3,1,5,8,7,9,10,6];

let bubbleSort = function(array){
  let comparedNumber;
  let swapCount = 0;
  let pass = 0;
  let willLoop = true;
  while(willLoop){
    willLoop = false;
    let loopInterval = setInterval(function(){
      comparedNumber = array[0];
      for (var i = 1; i < array.length; i++) {
       if(comparedNumber - array[i] > 0) {
        array[i-1] = array[i];
        array[i] = comparedNumber;
        let documentDivs = document.querySelectorAll('.arrayDiv');
        for(let i = 0; i < 10; i++){
          documentDivs[i].style.height = (array[i] * 20) + 'px';
          documentDivs[i].innerHTML = array[i];
        }
        willLoop = true;
        swapCount++;
       } else {
        comparedNumber = array[i];
       }
        console.log(array);
        console.log(swapCount);

      pass++;
      }
      if(willLoop === false){
        clearInterval(loopInterval);
      }
    console.log('array after loop '+ pass + ' ' + array);
    }, 1000);

  }

  return array;
};

let quickSort = function(arr){
  let pivot = arr[0];
  let rightArray = [];
  let leftArray = [];

  if(arr.length <= 1 || arr === undefined){
    return arr;
  } else {

    for (let i = 1; i < arr.length; i++) {
      if(arr[i] < pivot){
        leftArray.push(arr[i]);
      } else {
        rightArray.push(arr[i]);
      }
    }

    console.log('left: ' + leftArray);
    console.log('right: ' + rightArray);
  }
let newArr = quickSort(leftArray).concat(pivot, quickSort(rightArray));
let documentDivs = document.querySelectorAll('.arrayDiv');
  for(let i = 0; i < newArr.length; i++){
    documentDivs[i].style.height = (newArr[i] * 20) + 'px';
    documentDivs[i].innerHTML = newArr[i];
  }
  return newArr;
};

let mergeSort = function(arr){
  let halfArr = arr.length / 2;
  let leftArray = [];
  let rightArray = [];
  //base case when array length is 0 or 1
  if(arr.length <= 1){
    return arr;
  }
  //pushes first half of array to the left side
  for(let l = 0; l < Math.ceil(halfArr); l++){
    leftArray.push(arr[l]);
  }
  //pushes second half of array to right side
  for(let r = Math.ceil(halfArr); r < arr.length; r++){
    rightArray.push(arr[r]);
  }
//merges & sorts while going back up recursion
return merge(mergeSort(leftArray), mergeSort(rightArray));
};

//helper function to sort going up recursion
function merge (left, right){
  let result = [];
  //While loop to loop through until the length of both arrays are 0
  while(left.length > 0 || right.length > 0){
    //pushes first value from left array and shifts off the first value
    if(left[0] < right[0]){
      result.push(left[0]);
      left.shift();
    //pushes first value from right array and shifts off the first value
    } else if(right[0] < left[0]){
      result.push(right[0]);
      right.shift();
    //pushes right array when there is nothing in left array
    } else if(left.length === 0){
      result.push(right[0]);
      right.shift();
    //pushes left array when there is nothing in the right array
    } else if(right.length === 0){
      result.push(left[0]);
      left.shift();
    }
  }
  //return result of merging
  console.log(result);
  return result;
}
//mergeSort(randomArray);


let insertionSort = function(arr){
  //for loop to go through insertion
  for(let insert = 1; insert < arr.length; insert++){
    //saves place in array to replace values
    let savedPlace = insert;
    let currentCompared = arr[insert];
    //if statement to check if number is lower
    if(arr[savedPlace - 1] > currentCompared){
      //loops through array until it finds the right spot for the number
      while (arr[savedPlace - 1] > currentCompared){
        arr[savedPlace] = arr[savedPlace-1];
        savedPlace--;
      }
      //resets to the correct location in the array
      arr[savedPlace] = currentCompared;
    }
    console.log('Insertion Sort: ' + arr);
  }
};
//insertionSort(randomArray);

let selectionSort = function(arr){
  //sets count to 0, we want to iterate though the array once per value
  let count = 0;
  while(count < arr.length){
    //resets lowest number at each while loop
    let lowestNumber = arr[count];
    let lowestNumberIndex = count;
    //loops from remaining amount through the rest of the array
    for (var i = count; i < arr.length; i++) {
      //compares numbers to check which number is the lowest
      if(arr[i] < lowestNumber){
        lowestNumber = arr[i];
        lowestNumberIndex = i;
      }
    }
    //swaps values in the array
    arr[lowestNumberIndex] = arr[count];
    arr[count] = lowestNumber;
    count++;
    console.log('Selection Sort: ' + arr);
  }

  return arr;
};
selectionSort(randomArray);