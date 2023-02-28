function saludar(){//Declarando la funcion 1
    setTimeout(function(){
        console.log("Hola como estas?")
        despedir()//llamando a la funcion 2
    },3000)
}

function despedir(){//Declarando la funcion 2
    console.log("adios mucha suerte")
}

saludar()//Llamando a la función 1



