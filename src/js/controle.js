let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    // PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    // SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="material-icons-outlined">circle</i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete">
                    <i class="material-icons-outlined">delete</i> Deletar
                </button>
            </div>
        </div>`;

        // ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;

        // ZERAR O CAMPO
        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    var icone = document.getElementById('icone_' + id);

    if (classe === "item") {
        item.classList.add('clicado');
        icone.textContent = 'check';
    } else {
        item.classList.remove('clicado');
        icone.textContent = 'circle';
    }
}

// ATIVAR O CLICK COM O ENTER
input.addEventListener("keyup", function(event) {
    // SE TECLOU O ENTER (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});