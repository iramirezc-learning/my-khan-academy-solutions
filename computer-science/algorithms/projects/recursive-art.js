/* globals ellipse, rect, width, height, fill, stroke, background */
// Generates a new color code
var randomColor = function () {
    return Math.floor(Math.random() * 256);
};

var setColors = function () {
    stroke(randomColor(), randomColor(), randomColor());
    fill(randomColor(), randomColor(), randomColor());
};

var drawShape = function (x, y, radius) {
    setColors();
    // Rectangle
    rect(x, y, radius, radius);
    // Circle
    ellipse(x, y, radius, radius);
    // New Radius
    var newRadius = radius / 2;
    if (newRadius >= 2) {
        drawShape(x / 2, y / 2, newRadius);
        drawShape(width / 2, height / 2, newRadius);
    }
};
// New Background.
background(randomColor(), randomColor(), randomColor());
// Starts Recursion
drawShape(width, height, 360, 0);