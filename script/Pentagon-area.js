

function calculatePentagonArea() {

    // call function and pass parameter to the function for get pentagon B value
    const perimeter = getInputValue('pentagon-perimeter');


    // call function and pass parameter to the function for get pentagon B value
    const apothem = getInputValue('pentagon-apothem');


    // apply formula pentagon area and set value in the formula
    const pentagonArea = 0.5 * perimeter * apothem;

    // call function and pass parameter for getting where we will displaying area and also pentagon area value pass
    setInnnerTextById('pentagon-area', pentagonArea);

}



// for taking input value by use parameter

function getInputValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValue = inputField.value;
    const value = parseFloat(inputValue);
    return value;


}


// for displaying value

function setInnnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}