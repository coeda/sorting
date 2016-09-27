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
  let newArr = [];
  if(arr.length <= 1){
    return arr;
  }
  for(let l = 0; l < Math.ceil(halfArr); l++){
    leftArray.push(arr[l]);
  }
  for(let r = Math.ceil(halfArr); r < arr.length; r++){
    rightArray.push(arr[r]);
  }

return merge(mergeSort(leftArray), mergeSort(rightArray));
};

function merge (left, right){
  let result = [];

  while(left.length > 0 || right.length > 0){
    if(left[0] < right[0]){
      result.push(left[0]);
      left.shift();
    } else if(right[0] < left[0]){
      result.push(right[0]);
      right.shift();
    } else if(left.length === 0){
      result.push(right[0]);
      right.shift();
    } else if(right.length === 0){
      result.push(left[0]);
      left.shift();
    }
  }
  console.log(result);
  return result;
}



let insertionSort = function(arr){
    for(let insert = 1; insert < arr.length; insert++){
      let savedPlace = insert;
      let currentCompared = arr[insert];
      if(arr[savedPlace - 1] > currentCompared){
        while (arr[savedPlace - 1] > currentCompared){
          arr[savedPlace] = arr[savedPlace-1];
          savedPlace--;
        }
        arr[savedPlace] = currentCompared;
      }
      console.log(arr);
    }
};

insertionSort(randomArray);
