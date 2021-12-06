//Calculadora
/*
El código a continuación presentado está desarrollado
en JavaScript por Julián Camilo Álvarez Zuluaga
doc: 1007292110
*/
function suma(a, b){
    return a+b
}

function resta(a, b){
    return a-b
}

function streamInteger(x, b, func){
    total = 0
    answer = [total, x, b]
    for(i=1; i<=x;i++){
        answer = func(answer[0], answer[1], answer[2]) 
    }
    return answer   
}

function multiplicar(a, b){
    answer = streamInteger(a, b, (total, a, b) => {
        return [total+b, a, b]    
    })
    return answer[0]
}

function dividir(a, b){
    answer = streamInteger(a, b, (total, a, b) => {
        if(a - b < 0){return [total, a, b]}
        else{return [total+=1, a-b, b]}
    })
    return answer[0]
}

console.log(multiplicar(4 ,5))
console.log(multiplicar(10 ,5))
console.log(dividir(15 ,3))
console.log(dividir(20 ,7))