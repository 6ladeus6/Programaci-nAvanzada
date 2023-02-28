let numeros = [1,2,3,4,5];
//declarando función principal
function principal(numeros,callback){
    setTimeout(function(){
        let suma = 0
        numeros.forEach(numero => suma+=numero)
        callback(suma)//Llamando al callback
    },5000)
}

//Llamando a la función principal
principal(numeros,function(suma){//declarando el callback
    let operacion = suma * 100
    console.log(`La sumatoria final es: ${operacion}`);
})

