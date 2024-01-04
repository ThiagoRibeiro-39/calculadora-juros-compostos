document.getElementById('calculate').addEventListener('click', function(){
    const principal = document.getElementById('principal').value;
    const fee = (document.getElementById('fee').value) /100;
    const days = document.getElementById('days').value;

    const total = principal * (1 + fee)**days;
    document.getElementById('total').innerHTML = ("R$" + total.toFixed(2))
});

document.getElementById('limpar').addEventListener('click', function(){
    const principal = document.getElementById('principal').value = "";
    const fee = (document.getElementById('fee').value) = "";
    const days = document.getElementById('days').value = "";
    const total = document.getElementById("total").textContent = "RS 0.00";
    
});