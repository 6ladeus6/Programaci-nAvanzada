function crearEstudiante(nombre,planeta,edad,estatura,clasificarEstudiante){
    setTimeout(function(){
        let estudiante = {
            nombre: nombre,
            edad: edad,
            planeta: planeta,
            estatura: estatura
        }
        clasificarEstudiante(estudiante.edad)
    },1000)
}

crearEstudiante("Pedro","Marte",14,1.86, function(edad){
    

    edad < 15 ? (
        console.log("Manejo de la fuerza")      
    ) : (
        stop = true,
        console.log("Manejo del sable de luz")
    )
})