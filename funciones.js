//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos,egresos){
    return ingresos-egresos;
}

function calcularCapacidadPago(montoDisponible){
    return montoDisponible*0.50;
}

function calcualarInteresSimple(monto,taza,plazoAnios){
    return plazoAnios*monto*(taza/100);
}