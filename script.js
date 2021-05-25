console.log('Add validation!');
function calculatePayment(numberOfDays, chargePerDay){
    return numberOfDays * chargePerDay;
}
function onSubmit(event){
    event.preventDefault();
    var days=document.getElementById("days").value;
    var price=5;
    document.getElementById("total").innerHTML = calculatePayment(days,price);
}


let ccnumber = document.querySelector('input[id="credit-card"]')
// document.addEventListener ("click", event => {
//     console.log(ccnumber.value)
// })


function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number)){
        console.log(false);
    } else {
        console.log(true); 
    }
         
    // return luhnCheck(number);

}

document.addEventListener ("click", event => {
    validateCardNumber(ccnumber.value)
    })


function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}