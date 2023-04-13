/*
5. Escreva uma função que retorne um número fornecido pelo usuário, porém
invertido. Por exemplo, o usuário fornece o número 875 e a função retorna o número
578. O retorno deve ser um valor inteiro
 */

function inverter(num){
    num = num.toString();
    let reverso = "";
    tamanho = num.length;
    for(i=0;i<tamanho;i++){
        reverso=num.charAt(i)+reverso;
    }
    return reverso;
}