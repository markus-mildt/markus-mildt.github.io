function convert(){
    const bbl_input = document.getElementById('bbl_input').value;
    if(!isNaN(bbl_input) && parseFloat(bbl_input) > 0){
        const cans = Math.floor((parseFloat(bbl_input) * 31 * 128) / 12);
        const cases = Math.floor(cans / 24);
        document.getElementById('cans_result').innerText = `That is about ${cans} cans and about ${cases} cases.`
    } else {
        document.getElementById.innerText = `Invalid input, please enter a positive numerical value.`
    }
}