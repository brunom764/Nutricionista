var campoFiltro = document.querySelector("#filtrar-tabela");  // Seleciona o digitado na aba de filtro

campoFiltro.addEventListener("input", function() { // Input= digitaçao
    var pacientes = document.querySelectorAll(".paciente"); // Seleciona todos os pacientes
    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];  // Seleciona um paciente de cada vez
            var tdNome = paciente.querySelector(".info-nome"); // Seleciona o nome dele pela classe
            var nome = tdNome.textContent; // Selecionar o conteudo da td nome

            var expressao = new RegExp(this.value, "i");  // i -> PAssa acaeitar tanto minusculo qt maisculo

            if (!expressao.test(nome)) { // SE um pedaço da palavra não esta inserida, fica invisivel
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
        /* var comparavel = nome.substr(0, this.value.length);  // PODERIA SER FEITO SEM REGEX TBM
            if (!(this.value == comparavel)) {
                paciente.classList.add("invisivel");
            } else{
                paciente.classList.remove("invisivel");
            } */
    }else {  // Se nao houve nd digitado,aparecem tds
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
}});
