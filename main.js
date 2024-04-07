const form= document.getElementById('formulario');
const img_aprovado = '<img src="./imagens/Aprovado.png" alt="emoji celebrando" />';
const img_reprovado = '<img src="./imagens/reprovado.png" alt="emoji triste" />';

let linhas = ''; //inicio a linha vazia, no final ali do código adiciono toda minha let linha a const linha e depois tudo se reinicia.


form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome_atividade');
    const inputNotaAtividade = document.getElementById('nota_atividade');


    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value} </td>`;
    linha += `<td>${inputNotaAtividade.value} </td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? img_aprovado : img_reprovado} </td>`; // o ? representa o if e o : representa o else 
    linha += '</tr>';
    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; //o innerHTML é pra inserir um conteúdo dentro de uma tag
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
});