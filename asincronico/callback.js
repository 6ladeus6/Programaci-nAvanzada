//Ir a netflixt y autenticarme
function procesoUno(nombreUsuario,procesoDos){//Declarndo 1
    setTimeout(function(){
       if (nombreUsuario == "admin") {
            procesoDos("Exito!",null) //Llamando a 2
       } else {
            procesoDos(null,"Fallo!")//Llamando a 2
       }
    },2000)
}

procesoUno("admin",function(resuelvo,rechazo){//Lamando
    if (resuelvo!=null) {
        console.log("Bienvenido a Netflix");
    }else {
        console.log("Revisa tus datos")
    }
})