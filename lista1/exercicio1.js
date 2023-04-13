//1. Escreva uma função que calcule e retorne o fatorial de um número.
function fat(num){
    if(num>1){
        num=num*fat(--num);
    }
    return num;
}