
function calculateEllipseArea(){

    const major = getInputValue('ellipse-major');
    
    const minor = getInputValue('ellipse-minor')
    
    const eArea = 3.14 * major * minor;
    
    setInnnerTextById('ellipse-area', eArea);
}