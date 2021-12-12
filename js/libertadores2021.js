window.onload = setTimeout(function(){
    document.querySelector("#loader").style.cssText = "opacity: 0;";            
}, 500);
setTimeout(function(){
    document.querySelector("#loader").style.cssText = "display: none;";            
}, 1000);
setTimeout(function(){
    libertadores.innerHTML = "Digite o placar!";
    libertadores.style.cssText = "opacity: 1";
}, 500)

function verificaInputs(inputs) {
    var verifica = true;
    inputs.forEach(function(input) {
        if (input.value === "") {
            verifica = false;
        }
    });
    return verifica;
}

var libertadores = document.querySelector('#liberta');
var palmeiras = document.querySelector('#sep');
var flamengo = document.querySelector('#crf');
var inputs = document.querySelectorAll("input");
var button = document.querySelector("#placar");
inputs.forEach(function(input) {
    input.addEventListener("keyup", function() {
        if (verificaInputs(inputs)) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });
});  
            
button.addEventListener('click', function(){        
    if (parseInt(palmeiras.value) > parseInt(flamengo.value)) {            
        libertadores.innerHTML = "A américa é verde!";            
    } else if (parseInt(palmeiras.value) < parseInt(flamengo.value)) {
        libertadores.innerHTML = "Deu zebra!";               
    } else if (palmeiras.value === flamengo.value) {
        libertadores.innerHTML = "Desempate o jogo!";
    }
    button.disabled = true;   
    libertadores.style.cssText = "opacity: 1"; 
    setTimeout(function(){
        libertadores.style.cssText = "opacity: 0";        
        palmeiras.value = "";
        flamengo.value = "";        
    }, 1500);
    setTimeout(function(){
        libertadores.innerHTML = "Digite o placar!";
        libertadores.style.cssText = "opacity: 1";
    }, 2000)        
});

function submitForm(event) {
    event.preventDefault();        
}

