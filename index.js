function convert(){
    const bbl_input = document.getElementById('bbl_input').value;
    if(!isNaN(bbl_input) && parseFloat(bbl_input) > 0){
        const cans = (parseFloat(bbl_input) * 31 * 128) / 12;
        document.getElementById('result').innerText = `That is about ${cans} cans.`
    } else {
        document.getElementById.innerText = `Invalid input, please enter a positive numerical value.`
    }
}