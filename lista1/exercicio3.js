/*
3. Escreva uma função que receba 2 valores e uma operação básica: adição, subtração,
multiplicação e divisão e retorne o resultado da operação.
Observação: Faça a validação para prevenir a divisão por 0 e também para garantir que
a operação informada é válida. Retorne nulo para os casos de erro.
*/
function calc(num1,num2,op){
    if(op=="+"){
        return num1+num2;
    }
    if(op=='-'){
        return num1-num2;
    }
    if(op=="*"){
        return num1*num2;
    }
    if(op=="/"){
        if(num2!=0){
            return num1/num2;
        }
    }
    return null;
}
