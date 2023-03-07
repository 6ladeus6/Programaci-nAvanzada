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

async function llamandoAlaPromesa(){
    console.log("Estamos marcando...")
    try {
        let respuesta = await proceso1("a3min")
        console.log(respuesta)
    } catch (error) {
        console.log(respuesta)
    }
}

llamandoAlaPromesa()