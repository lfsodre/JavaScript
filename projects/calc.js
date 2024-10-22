//-----------------------------------------------------------
var A = prompt("Insira o primeiro número: ");
var O = prompt("Qual operação deseja realizar? (digite: + ou - ou * ou / ou % ou **)");
var B = prompt("Insira o segundo número: ");
//-----------------------------------------------------------
var resultado = 0;
//---------------------FUNÇÕES-------------------------------
if (O == '+')
    resultado = soma(A,B);
if (O == '-')
    resultado = subtracao(A,B);
if (O == '*')
    resultado = multiplique(A,B);
if (O == '/')
    resultado = divisao(A,B);
if (O == '%')
    resultado = porcentagem(A,B);
if (O == '**')
    resultado = exponencial(A,B);
//-----------------------EXIBIR------------------------------
alert('O resultado da operação é igual a : ' + resultado);
//------------------------FUNÇÕES----------------------------
function soma(A,B)          { return Number(A) + Number(B);}
//-----------------------------------------------------------
function subtracao(A,B)     { return Number(A) - Number(B);}
//-----------------------------------------------------------
function multiplique(A,B)   { return Number(A) * Number(B);}
//-----------------------------------------------------------
function divisao(A,B)       { return Number(A) / Number(B);}
//-----------------------------------------------------------
function porcentagem(A,B)       { return Number(A) % Number(B);}
//-----------------------------------------------------------
function exponencial(A,B)       { return Number(A) ** Number(B);}
//-----------------------------------------------------------