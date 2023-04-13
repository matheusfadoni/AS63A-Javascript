/*
7. Escreva uma função que receba uma sequência de parênteses e colchetes e retorne se
a sequência está bem formada ou não. O retorno deve ser um valor lógico.
*/

function simetria(colchetes){
    if(colchetes.length===0){
        return true;
    }
    let ultimo = colchetes.length-1;
    if(colchetes.charAt(0)==="("){
        if(colchetes.charAt(ultimo)===")"){
            return simetria(colchetes.substring(1,ultimo));
        }
    }
    if(colchetes.charAt(0)==="["){
        if(colchetes.charAt(ultimo)==="]"){
            return simetria(colchetes.substring(1,ultimo));
        }
    }
    return false;
}