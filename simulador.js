//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() {

    if (
        !validarIngresos() ||
        !validarEgresos() ||
        !validarMonto() ||
        !validarPlazo() ||
        !validarTasa()
    ) {
        return;
    }
    
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");
    let moto = resuperarEntero("txtMonto");
    let plazo = resuperarEntero("txtPlazo");
    let anio = resuperarEntero("txtTasaInteres");

    let disponible = calcularDisponible(ingresos, egresos)
    let valorDisponible = document.getElementById("spnDisponible")
    valorDisponible.textContent = disponible;

    let capacidadPago = calcularCapacidadPago(disponible)
    let cmpCapacidadPago = document.getElementById("spnCapacidadPago")
    cmpCapacidadPago.textContent = capacidadPago;

    let interesSimple = calcualarInteresSimple(moto, plazo, anio)
    let cmpInteresSimple = document.getElementById("spnInteresPagar")
    cmpInteresSimple.textContent = interesSimple;

    let total = calcualrTotalPagar(moto, interesSimple)
    let cmpTotal = document.getElementById("spnTotalPrestamo")
    cmpTotal.textContent = total;

    let cuotaMensual = calcularCuotaMensual(total, plazo)
    let cmpCuotaMensual = document.getElementById("spnCuotaMensual")
    cmpCuotaMensual.textContent = cuotaMensual;

    let creditoAprobado = aprobarCredito(capacidadPago, cuotaMensual)
    if (creditoAprobado == true) {
        let cmpEstadoCredito = document.getElementById("spnEstadoCredito")
        cmpEstadoCredito.textContent = "CREDITO APROBADO";
    } else {
        let cmpEstadoCredito = document.getElementById("spnEstadoCredito")
        cmpEstadoCredito.textContent = "CREDITO RECHAZADO";
    }

}

function validarNumero(idInput, idError, minimo, maximo) {

    let txt = document.getElementById(idInput);
    let error = document.getElementById(idError);

    let valor = txt.value.trim();

    error.innerHTML = "";

    if (valor == "") {
        error.innerHTML = "Este campo es obligatorio";
        return false;
    }

    if (!/^[0-9]+$/.test(valor)) {
        error.innerHTML = "Solo se permiten números";
        return false;
    }

    if (valor.length > 5) {
        error.innerHTML = "Máximo 5 dígitos";
        return false;
    }

    let numero = Number(valor);

    if (numero < minimo || numero > maximo) {
        error.innerHTML = "Debe estar entre " + minimo + " y " + maximo;
        return false;
    }

    return true;
}

function validarIngresos() {
    return validarNumero(
        "txtIngresos",
        "errorIngresos",
        100,
        99999
    );
}

function validarEgresos() {
    return validarNumero(
        "txtEgresos",
        "errorEgresos",
        0,
        99999
    );
}
function validarMonto() {
    return validarNumero(
        "txtMonto",
        "errorMonto",
        500,
        99999
    );
}
function validarPlazo() {
    return validarNumero(
        "txtPlazo",
        "errorPlazo",
        1,
        30
    );
}
function validarTasa() {
    return validarNumero(
        "txtTasaInteres",
        "errorTasa",
        1,
        30
    );
}