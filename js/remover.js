/* var pacientes = document.querySelectorAll('.paciente'); // Seleciona todos que tem essa classe
pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {  //duplo clique,remove tr(linha)
        this.remove();  //This é relacionada ao que foi selecionado no evento
    });
}); */ // NAO FUNCIONAVA NOS ITENS ADCIONADOS PELO FORMULARIO 

var tabela = document.querySelector("table");  // Começa pelo elemento pai e ele indetifca quem para remover a linha(filho)

tabela.addEventListener("dblclick", function(event) {
    var alvo = event.target;  // o Td Alvo(quem foi clicado)
    var paiAlvo = alvo.parentNode; // O tr(paciente) desse td
    event.target.parentNode.classList.add("fadeOut"); //Adciona uma classe a paciente
    setTimeout(function(){  //Dar tempo para a transiçao para apagar a linha
        paiAlvo.remove();
    }, 500)


});