function limpiarErrores() {
    var errores = document.getElementsByClassName("error");
    for (var i = 0; i < errores.length; i++) {
        errores[i].innerHTML = "";
    }
}


function validar(formulario) {

    limpiarErrores();


    if (formulario.fecha.value.trim().length > 0) {


        formulario.fecha.value.Date.Math.floor = now;
        var start = new Date(now.getUTCFullYear(), 0, 0);
        var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        console.log('Day of year: ' + day);
        formulario.fecha.focus();
        alert("Día del año: " + day);
        return true;

    }

    alert("Fecha enviada");

    return true;
}












//Supongamos que se ingresa la fecha de hoy en este caso
var now = new Date();
var start = new Date(now.getUTCFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
console.log('Day of year: ' + day);