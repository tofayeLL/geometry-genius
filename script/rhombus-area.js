

function calculateRhombusArea(){

    const diagonals1 = getInputValue('rhombus-diagonals1');

    const diagonals2 = getInputValue('rhombus-diagonals2');
    
    const rhombArea = 0.5 * diagonals1 * diagonals2;
    

    setInnnerTextById('rhombus-area', rhombArea);

}