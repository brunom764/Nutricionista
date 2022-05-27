function obtemElemento(form) {
    var paciente = { // criar objeto e ter acesso a cada um dos inputs
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,  
        imc: calculaIMC(form.peso.value,form.altura.value)
    }
    return paciente;
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    erros.forEach(function(erro){  // TRansformar a array em li no html
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function montaTd(dado,classe){ // Preencher os conteudos de cada bloco
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");  // Criar uma linha(mae)
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); // Conectar as tds(filhos) com a mae(tr)
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function validaPaciente(paciente) {
    var erros = [];
    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }
    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }
    if (!validaPeso(paciente.peso)) erros.push("O peso é invalido");  // if simples não precisa de linha
    
    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");
    return erros;
}

// Parte principal

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que a pagina recarregue

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemElemento(form);
    
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
}

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr)  //Adcionar a tabela

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";  // limpa as mensagens de erro
});   
