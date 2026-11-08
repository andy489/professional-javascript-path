self.onmessage = event => {
    debugger;
    const sortedArray = event.data;
    javaScriptQuicksort(sortedArray, 0, sortedArray.length - 1);
    self.postMessage(sortedArray);
  };
  function javaScriptQuicksort(array, left, right) {
    // base case: return if the left index is greater than or equal to the right index
    if (left >= right) {
        return;
    }

    // choose a pivot element
    const pivot = array[Math.floor((left + right) / 2)];

    // partition the array around the pivot
    const partitionIndex = partition(array, left, right, pivot);

    // sort the left and right partitions
    javaScriptQuicksort(array, left, partitionIndex - 1);
    javaScriptQuicksort(array, partitionIndex, right);
}

function partition(array, left, right, pivot) {
    // loop through the array until the left index is greater than the right index
    while (left <= right) {
        // find the next element to swap from the left side
        while (array[left] < pivot) {
            left++;
        }

        // find the next element to swap from the right side
        while (array[right] > pivot) {
            right--;
        }

        // swap the elements if the left index is less than or equal to the right index
        if (left <= right) {
            [array[left], array[right]] = [array[right], array[left]];
            left++;
            right--;
        }
    }

    // return the final partition index
    return left;
}

        
//   function quicksort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
  
//     const pivot = arr[0];
//     const left = [];
//     const right = [];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
  
//     return quicksort(left).concat(pivot, quicksort(right));
//   }