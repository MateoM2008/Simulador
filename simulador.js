//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() {
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");
    let moto = resuperarEntero("txtMonto");
    let plazo = resuperarEntero("txtPlazo");
    let anio = resuperarEntero("txtTasaInteres");

    let disponible=calcularDisponible(ingresos,egresos)
    let valorDisponible=document.getElementById("spnDisponible")
    valorDisponible.textContent=disponible;

    let capacidadPago=calcularCapacidadPago(disponible)
    let cmpCapacidadPago=document.getElementById("spnCapacidadPago")
    cmpCapacidadPago.textContent=capacidadPago;

    let interesSimple=calcualarInteresSimple(moto,plazo,anio)
    let cmpInteresSimple=document.getElementById("spnInteresPagar")
    cmpInteresSimple.textContent=interesSimple;

    let total=calcualrTotalPagar(moto,interesSimple)
    let cmpTotal=document.getElementById("spnTotalPrestamo")
    cmpTotal.textContent=total;

    let cuotaMensual=calcularCuotaMensual(total,plazo)
    let cmpCuotaMensual=document.getElementById("spnCuotaMensual")
    cmpCuotaMensual.textContent=cuotaMensual;
}