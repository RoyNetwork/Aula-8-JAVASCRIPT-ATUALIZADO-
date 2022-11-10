// criando uma calculadora
function calculadora(){
    //definindo as operações e pegando valor de entrada do usuário
    //usaremos p "\n"
    const operacao = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));

//verificação se a operação é válida
if (!operacao || operacao >=7) { 
alert('Erro - Operação Inválida!');
calculadora();
} else{
            //definido variáveis - todas as entradas devem ser tipo Number
            let n1 = Number(prompt('Insira o primeiro valor: '));
            let n2 = Number(Prompt('Insira o segundo valor: '));
            let resultado;
            //verificando se as variáveis são válidas
            if (!n1 || !n2) {
        alert('Erro - Parâmetros Inválidos!');
        caçculadora();
            } else {
                    //definindo as funcões
                    function soma() {
                        resultado = n1 + n2;
                        //mostrando o resultando usando template strings
                        alert(`${n1} + ${n2} = ${resultados}`);
                        //dando a opção de chamar uma nova operação
                        novaOperação();
                    }
                    function subtracao() {
                        resultado = n1 - n2;
                        //mostrando o resultando usando template strings
                        alert(`${n1} - ${n2} = ${resultados}`);
                        //dando a opção de chamar uma nova operação
                        novaOperação();
                    }
                    function multiplicacao() {
                        resultado = n1 * n2;
                        //mostrando o resultando usando template strings
                        alert(`${n1} * ${n2} = ${resultados}`);
                        //dando a opção de chamar uma nova operação
                        novaOperação();
                    }
                    function divisaoReal() {
                        resultado = n1 / n2;
                        //mostrando o resultando usando template strings
                        alert(`${n1} / ${n2} = ${resultados}`);
                        //dando a opção de chamar uma nova operação
                        novaOperação();
                    }
                    function divisaoInteira() {
                        resultado = n1 % n2;
                        //mostrando o resultando usando template strings
                        alert(`O resto da divisao entre${n1} e ${n2} é igual a ${resultados}`);
                        //dando a opção de chamar uma nova operação
                        novaOperação();
                    }
                    function potenciacao() {
                        resultado = n1 ** n2;
                        //mostrando o resultando usando template strings
                        alert(`${n1} elevado à ${n2} ª potência é ${resultados}`);
                        //dando a opção de chamar uma nova operação
                        novaOperação();
                    }
                    //nova operação
                    function novaOperacao(){
                        let opcao = promp('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
                        if (opcao == 1){
                            calculadora();        
                        }else if (opcao == 2){
                            alert('Até Mais!');
                        }else{
                            alert('Digite uma opção válida! >:(');
                            novaOperacao();
                        }
                    }
             }
        }           
switch (operacao){
    case 1:
        soma();
        break;
        case 2:
            subtracao();
            break;
            case 3:
                multiplicacao();
                break;
                case 4:
                    divisaoReal();
                    break;
                    case 5:
                        divisaoInteira();
                        break;
                        case 6:
                            potenciacao();
                            break;
                }
            }
calculadora();
                //ESSE CÓDIGO SERÁ ATUALIZADO QUINTA FEIRA 10/11/22 ;)
