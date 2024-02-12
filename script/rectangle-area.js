


// rectangle area
function calculateRectangleArea() {
    // rectangle width
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthValue = rectangleWidthInput.value;
    const rWidth = parseFloat(rectangleWidthValue);
    console.log(rWidth);

    // rectangle length
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthValue = rectangleLengthInput.value;
    const rLength = parseFloat(rectangleLengthValue);
    console.log(rLength);

    // rectangle area
    const rArea = rWidth * rLength;
    console.log(rArea);

    // display rectangle area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = rArea;


}