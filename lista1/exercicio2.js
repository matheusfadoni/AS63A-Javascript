
/*
Escreva uma função em Javascript que retorne uma String contendo uma sequência de
N mensagens do texto informado pelo usuário. O valor de N e a mensagem são
informados por parâmetro.
*/

function ridiculo(frase,N){
    resultado = "";
    for(i=1;i<=N;i++){
        resultado=resultado+frase+" "+i+"\n"
    }
    return resultado;
}