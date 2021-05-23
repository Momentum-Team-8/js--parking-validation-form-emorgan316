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