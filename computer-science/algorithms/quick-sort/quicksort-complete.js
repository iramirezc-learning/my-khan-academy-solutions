// Swaps two items in an array, changing the original array
var swap = function (array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function (array, p, r) {
    // Compare array[j] with array[r], for j = p, p+1,...r-1
    // maintaining that:
    //  array[p..q-1] are values known to be <= to array[r]
    //  array[q..j-1] are values known to be > array[r]
    //  array[j..r-1] haven't been compared with array[r]
    // If array[j] > array[r], just increment j.
    // If array[j] <= array[r], swap array[j] with array[q],
    //   increment q, and increment j. 
    // Once all elements in array[p..r-1]
    //  have been compared with array[r],
    //  swap array[r] with array[q], and return q.
    var q = p;
    for (var j = p; j < r; j++) {
        if (array[j] <= array[r]) {
            swap(array, j, q);
            q++;
        }
    }
    swap(array, r, q);
    return q;
};


var quickSort = function (array, p, r) {
    if (p < r) {
        var pivot = partition(array, p, r);
        quickSort(array, p, pivot - 1);
        quickSort(array, pivot + 1, r);
    }
};

function assertEqual(val1, val2){
    var result = true;
        for(var i = 0; i < val1.length; i++){
            if(val1[i] !== val2[i]){
                result = false;
                break;
            }
        }
    console.log(result);
}

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length - 1);
console.log("Array after sorting: ", array);
assertEqual(array, [2, 3, 5, 6, 7, 9, 10, 11, 12, 14]);

var array2 = [6, 79, -5, 8, 0, 12, 523, -94, 34, 2];
quickSort(array2, 0, array2.length-1);
console.log("Array after sorting: ", array2);
assertEqual(array2, [-94, -5, 0, 2, 6, 8, 12, 34, 79, 523]);