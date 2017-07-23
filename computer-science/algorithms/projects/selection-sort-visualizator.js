/* globals textFont, createFont, text, textWidth, line, fill */
var liney = 40; // Line y in canvas.
var linex = 10; // Line x in canvas.
var xFactor = 15; // Pixels for each number of one digit (default).

/**
 * Displays an array on the canvas. 
 */
var displayArray = function(array) {
    fill(0, 0, 0); // Black color.
    textFont(createFont("monospace"), 12);
    var output = "";
    for (var i = 0; i < array.length; i++){
        output += array[i] + " "; // Concatenate all numbers
    }
    text(output, linex, liney); // Series of numbers
    xFactor = textWidth(output) / array.length + 1; // updates the xFactor.
    liney += 40; // Next jump of line.
};

/**
 * Swaps two values from an array and draws a line of the change
 */
var swap = function (array, toIndex, fromIndex) {
    // swaping
    var temp = array[toIndex];
    array[toIndex] = array[fromIndex];
    array[fromIndex] = temp;
    // line
    line(linex + fromIndex * xFactor, liney - 35, linex + toIndex * xFactor, liney - 15);
    // resulting array.
    displayArray(array);
};

/**
 * Finds the index of the next minimum number in a subarray;
 */
var getIndexOfMinimum = function (array, startIndex){
    var minIndex = startIndex;
    var minValue = array[startIndex];
    for (var i = startIndex + 1; i < array.length; i++){
        if (array[i] < minValue){
            minValue = array[i];
            minIndex = i;
        }
    }
    return minIndex;
};

/**
 * Selection Sort Algorithm.
 */
var selectionSort = function(array) {
    // Displays the original state of the array.
    displayArray(array);
    for (var i = 0; i < array.length; i++){
        swap(array, i, getIndexOfMinimum(array, i));
    }
    return array;
};

/******* Test Cases ************/
// Example
var array = [22, 11, 88, 99, 9];
selectionSort(array);

// Reversed.
linex = 115; // Moves the array to the right
liney = 40; // Resets the liney.
var array1 = [6, 5, 4, 3, 2, 1];
selectionSort(array1);

// two elements with the same value.
linex = 205;
liney = 40;
var array2 = [7, 6, 3, 2, 8, 2];
selectionSort(array2);

// one in disorder.
linex = 300;
liney = 40;
var array3 = [1, 2, 3, 5, 4, 6];
selectionSort(array3);
