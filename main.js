const form= document.getElementById('formulario');
const img_aprovado = '<img src="./imagens/Aprovado.png" alt="emoji celebrando" />';
const img_reprovado = '<img src="./imagens/reprovado.png" alt="emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class = "resultado aprovado">Aprovado </span>';
const spanReprovado = '<span class = "resultado reprovado">Reprovado </span>';

let linhas = ''; //inicio a linha vazia, no final ali do código adiciono toda minha let linha a const linha e depois tudo se reinicia.


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha (); //estou chamando essa função aqui no evento
    AtualizaTabela();
    AtualizaNotas();

});

function adicionaLinha () {
    const inputNomeAtividade = document.getElementById('nome_atividade');
    const inputNotaAtividade = document.getElementById('nota_atividade');
    if (atividades.includes(inputNomeAtividade.value)) {
        alert( `A atividade ${inputNomeAtividade.value} inserida já existe`);
    } else {
        atividades.push(inputNomeAtividade.value); //adiciono o valor do InputNomeAtividade para o final do meu array atividades
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value} </td>`;
    linha += `<td>${inputNotaAtividade.value} </td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? img_aprovado : img_reprovado} </td>`; // o ? representa o if e o : representa o else 
    linha += '</tr>';
    linhas += linha;
    }
    
    
    
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function AtualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; //o innerHTML é pra inserir um conteúdo dentro de uma tag
}

function AtualizaNotas () {
    const MediaFinal =  CalculaMediaFinal();
    document.getElementById('media-final').innerHTML = MediaFinal;
    document.getElementById('resultado-final').innerHTML = MediaFinal >= 7 ? spanAprovado : spanReprovado;
    
    
}

function CalculaMediaFinal (){
    let somaDasNotas = 0;
    for (let i=0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }
    
    
    return somaDasNotas / notas.length;
}