let randomArray = [4,2,3,1];

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
  if(arr.length === 1){
    return arr[0];
  }
  for(let l = 0; l < halfArr; l++){
    leftArray.push(arr[l]);
  }
  for(let r = halfArr; r < arr.length; r++){
    rightArray.push(arr[r]);
  }

mergeSort(leftArray);
mergeSort(rightArray);
for(let length = 0; length <= (arr.length); length++)
  if(leftArray[0] < rightArray[0]){
    newArr.push(leftArray[0]);
    leftArray.shift();
  } else if(rightArray[0] < leftArray[0]){
    newArr.push(rightArray[0]);
    rightArray.shift();
  } else if(rightArray.length === 0 && leftArray.length === 0){
    console.log(newArr);
    return;
  } else if(leftArray.length === 0){
    newArr.push(rightArray[0]);
    rightArray.shift();
  } else if(rightArray.length === 0){
    newArr.push(leftArray[0]);
    leftArray.shift();
  }
console.log(newArr);
return newArr;
};

mergeSort(randomArray);

let insertionSort = function(arr){
    for(let insert = 0; insert < arr.length; i++){
      let currentCompared = arr[i];
      if(arr[i+1] < currentCompared){
        while (arr[i+1] < currentCompared){
          i--
        }
        arr[i] = arr[i+1];
        arr[i+1] = currentCompared;
      } else{
        currentCompared = arr[i];
      }
    }
};


