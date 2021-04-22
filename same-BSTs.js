

function sameBSTs(arr1, arr2) {
    // The first two items must be the same, 3 in the example case
    // If the next item in the array that is greater than 3 is not the same in each dataset
    // Or the next item in the array that is less than 3 is not the same in each dataset
    // Then the trees are not the same
    // Call the function again recursively for each subset of elements as the tree branches
  
    if (arr1[0] !== arr2[0]) {
      console.log('roots are not the same')
      return false;
    }
    if (arr1.length !== arr2.length) {
        console.log('trees are not the same size')
        return false;
    }
  
    const nextLeft1 = nextLowerIndex(arr1);
    const nextLeft2 = nextLowerIndex(arr2);
    if ((nextLeft1 && nextLeft2) && arr1[nextLeft1] !== arr2[nextLeft2]) {return false}
  
    const nextRight1 = nextHigherIndex(arr1);
    const nextRight2 = nextHigherIndex(arr2);
    if ((nextRight1 && nextRight2) && arr1[nextRight1] !== arr2[nextRight2]) {return false}
  
    let left = true;
    let right = true;
  
    if (nextLeft1 && nextLeft2) {
      left = sameBSTs(arr1.filter(i => i < arr2[0]), arr2.filter(i => i < arr2[0]));
    }
    if (nextRight1 && nextRight2) {
      right = sameBSTs(arr1.filter(i => i > arr1[0]), arr2.filter(i => i > arr2[0]));
    }
  
    return true && left && right;
  }
  
  function nextLowerIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[0]) {
        return i;
      }
    }
    return null;
  }
  function nextHigherIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[0]) {
        return i;
      }
    }
    return null;
  }
  sameBSTs(
  [3, 5, 4, 6, 1, 0, 2],
  [3, 1, 5, 2, 4, 6, 0]
  );
  // true