//Callback con cirtugia platica
//una promesa es una función asincrona que facilita en su escritura a traves de 
//2 callback (Resolve y reject)
function proceso1(nombreUsuario){
    let promesa = new Promise(function(resuelve,rechaza){
        setTimeout(function(){
            if (nombreUsuario == "admin") {
                resuelve("Exito")
            } else {
                rechaza("falla")
            }
        },2000)
    })
    return promesa
}
proceso1("admin")
.then(function(respuesta){console.log(respuesta);})//Camino de exito
.catch(function(respuesta){console.log(respuesta);})//Camino de rechazo

