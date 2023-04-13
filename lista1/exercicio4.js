/**
 * 4. Escreva uma função que retorne um vetor contendo o resultado da tabuada de um
 * número recebido por parâmetro. Cada resultado na respectiva posição do índice
 */
function tabuada(n){
    let v=[];
    for(i=0;i<=10;i++){
        v[i]=i*n;
    }
    return v;
}
