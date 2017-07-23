// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function (array, p, q, r) {
    var lowHalf = []; // First half array
    var highHalf = []; // Second half array
    // Sets all indexes
    var k = p; // Index for the original array.
    var i; // Index for lowHalf
    var j; // Index for highHalf
    // for i = i until k <= q (first half), increment i and k
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    // for j = 0 until k <= r (second half); increment j and k
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }
    // Resets all indexes.
    k = p;
    i = 0;
    j = 0;

    // Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf
    //  and copy the lower of the two back into array
    while (i < lowHalf.length && j < highHalf.length) {
        if (lowHalf[i] < highHalf[j]) {
            array[k] = lowHalf[i++];
        } else {
            array[k] = highHalf[j++];
        }
        k++;
    }

    // Once one of lowHalf and highHalf has been fully copied
    //  back into array, copy the remaining elements from the
    //  other temporary array back into the array
    while (i < lowHalf.length) {
        array[k++] = lowHalf[i++];
    }

    while (j < highHalf.length) {
        array[k++] = highHalf[j++];
    }
};

// Takes in an array and recursively merge sorts it
var mergeSort = function (array, p, r) {
    if (r > p) {
        var q = p + Math.floor((r - p) / 2);
        mergeSort(array, p, q);
        mergeSort(array, q + 1, r);
        merge(array, p, q, r);
    }
};

var array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array, 0, array.length - 1);
println("Array after sorting: " + array);
Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);

var array2 = [102, 9, 48, 77, 0, 96, -30, 8, -1];
mergeSort(array2, 0, array2.length - 1);
println("Array after sorting: " + array2);
Program.assertEqual(array2, [-30, -1, 0, 8, 9, 48, 77, 96, 102]);