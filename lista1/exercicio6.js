/*
6. Escreva uma função que permita contar o número de vogais contidas em uma string
fornecida por parâmetro. Por exemplo, o usuário informa a string “Brocolis”, e a função
retorna o número 3 (há 3 vogais nessa palavra).
 */

function vogais(texto){
    let v=0;
    let tamanho = texto.length;
    texto = texto.toLowerCase();
    texto = texto.split("");
    for(i=0;i<tamanho;i++){
        if(texto[i]==="a"){
            v++;
        } else if(texto[i]==="e"){
            v++;
        } else if(texto[i]==="i"){
            v++;
        } else if(texto[i]==="o"){
            v++;
        } else if(texto[i]==="u"){
            v++;
        }
    }
    return v;
}
