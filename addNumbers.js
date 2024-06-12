document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputOdd = parseInt(document.getElementById('inputOdd').value);
    const inputEven = parseInt(document.getElementById('inputEven').value);
    const inputNegative = parseInt(document.getElementById('inputNegative').value);

    let isValid = true;

    // Validate odd number
    if (inputOdd % 2 === 0) {
        document.getElementById('errorOdd').textContent = 'Input must be an odd number.';
        document.getElementById('errorOdd').style.visibility = 'visible';
        isValid = false;
    } else {
        document.getElementById('errorOdd').style.visibility = 'hidden';
    }

    // Validate even number
    if (inputEven % 2 !== 0) {
        document.getElementById('errorEven').textContent = 'Input must be an even number.';
        document.getElementById('errorEven').style.visibility = 'visible';
        isValid = false;
    } else {
        document.getElementById('errorEven').style.visibility = 'hidden';
    }

    // Validate negative number
    if (inputNegative >= 0) {
        document.getElementById('errorNegative').textContent = 'Input must be a negative number.';
        document.getElementById('errorNegative').style.visibility = 'visible';
        isValid = false;
    } else {
        document.getElementById('errorNegative').style.visibility = 'hidden';
    }

    if (isValid) {
        const total = inputOdd + inputEven + inputNegative;
        document.getElementById('total').textContent = 'Total: ' + total;
    } else {
        document.getElementById('total').textContent = '';
    }
});
