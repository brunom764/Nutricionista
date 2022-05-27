function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");
    var xhr = new XMLHttpRequest();  // Realizar a requisiçao desse link direto pelo js
   xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
   xhr.addEventListener("load", function(){  //Para os dados serem exibidos devemos escutar um evento específico que é acionado quando a requisição termina e a sua resposta é carregada. Ao escutarmos o evento, carregaremos a resposta da requisição - que no caso, serão nossos dados

    if (xhr.status == 200) {
        var resposta = xhr.responseText; // Acessar os dados da resposta

        var pacientes = JSON.parse(resposta); //transformar a resposta, que é um texto (uma string), em um array de pacientes
        pacientes.forEach(function(paciente) { // Formar as linhas
            adicionaPacienteNaTabela(paciente);
        });
    } else {
        erroAjax.classList.remove("invisivel");
    }
});
   xhr.send();  // Enviar
});