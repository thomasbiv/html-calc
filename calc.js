function init() {
    initial = document.querySelector('input#num1').focus() //Focuses the cursor on this input block
}

function calculate() {
    let num1 = document.querySelector('input#num1').value //Get / initialize values from user input
    let num2 = document.querySelector('input#num2').value
    let sign = document.querySelector('select#op').value
    let result = document.querySelector('div#result')
    let total = 0

    if (num1.length < 1 || num2.length < 1) { //Error checking
        return alert("Please enter a value into the missing field(s)!")
    }

    if (sign == 'sum') { //Actual calculations
        total = Number(num1) + Number(num2)
    } else if (sign == 'difference') {
        total = Number(num1) - Number(num2)
    } else if (sign == 'product') {
        total = Number(num1) * Number(num2)
    }
    else if (sign == 'quotient') {
        total = Number(num1) / Number(num2)
    }
    else {
        total = Number(num1) % Number(num2)
    }

    result.innerHTML = total
}

function reset() { //Reset the calculator
    document.querySelector('input#num1').value = ''
    document.querySelector('input#num2').value = ''
    document.querySelector('div#result').innerHTML = '&nbsp'
    init()
}