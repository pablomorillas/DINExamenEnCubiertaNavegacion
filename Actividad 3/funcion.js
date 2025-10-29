function artistasSolistas(artistasArray){
    return artistasArray.filter(a => a.solistas)
}


function artistasPorEdad(edad, artistasArray){
    return artistasArray.filter(a => a.edad === edad)
}
console.log(artistasPorEdad(23, artistas))

function cantidadDeArtistasPorInstrumento(artistasArray){
    
}