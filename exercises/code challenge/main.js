let arr1 = [1, 2, 3, 4];
let arr2 = [8, 4, 0, 3];
function addSort(arr1, arr2) {
   let join = arr1.concat(arr2)
   let result = join.sort()
  return result;
}

console.log(addSort(arr1, arr2));