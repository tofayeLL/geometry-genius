
/* objective: have to get value from triangle base and height from input box. Then by uses that value calculate the area of triangle and then display 
* step-1: add onclick() method on calculate button and set function.
* step-2: by use id get triangle base and then find out the value of the base (value in js string. so thats why we need to convert) and then convert the value to parsefloat.

*/

function calculateTriangleArea() {
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBaseInput.value;
    const base = parseFloat(triangleBaseValue);
    console.log(base);

    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue);
    console.log(height);

    // calculate triangle area 
    const area = 0.5 * base * height;
    console.log('area of the triangle is:', area);

    // For display triangle area
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}


