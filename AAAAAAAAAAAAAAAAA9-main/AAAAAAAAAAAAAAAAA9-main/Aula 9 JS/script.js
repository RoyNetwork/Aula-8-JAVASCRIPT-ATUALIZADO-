// tipos de funções
// funções declarativa
/* deve ser declarada usando a palavra reservada function seguida do nome da função, parênteses "()" e chaves "{}"
*/
function nomeDaFuncao() {
    alert('Sou uma função declarativa!');
}
// devemos chamar a função para ver o resultado
nomeDaFuncao();

// expressão de função - são funções atribuídas à expresssões
// a nomeação é opcional

// com nomeação
var nomeDeFuncao = function nomeDaFuncao() {
    alert('Sou uma expressão de função nomeada!');
}
// sem nomeação
var nomeDeFuncao2 = function() {
    alert('Sou uma expressão de função não nomeada!');
}
// arrow function 
/* função de expressão de sintaxe curta, sempre anônima,
não pode ser nomeada - deve ser declarada com parênteses "()",
seguido de "=>" e depois "{}"
*/
var Funcao = () => {
    alert('Sou uma função anônima!');
}

nomeDeFuncao();
nomeDeFuncao2();
Funcao();
