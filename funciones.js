//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos) {
    return ingresos - egresos;
}

function calcularCapacidadPago(montoDisponible) {
    return montoDisponible * 0.50;
}

function calcualarInteresSimple(monto, taza, plazoAnios) {
    return plazoAnios * monto * (taza / 100);
}

function calcualrTotalPagar(monto, interes) {
    return monto + interes + 100;
}

function calcularCuotaMensual(total, plazoAnios) {
    let mensual= total /(plazoAnios*12);
    return mensual.toFixed(2);
}

function aprobarCredito(capacidadPago,cuotaMensual){
    if(capacidadPago>cuotaMensual){
        return true
    }else{
        return false
    }
}