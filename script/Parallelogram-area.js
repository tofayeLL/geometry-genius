
// For calculating ParallelogramArea create this function 
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base')


    const height = getInputValue('parallelogram-height');


    const pArea = base * height;

    setInnnerTextById('parallelogram-area', pArea);

}


// for getting value from the input field create this function
function getInputValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValue = inputField.value;
    const value = parseFloat(inputValue);
    return value;
}

// for displaying value create this function
function setInnnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
    return area;
}