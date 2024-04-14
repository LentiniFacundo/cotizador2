import { buscar, cambiarTema, cerrarCotizaciones, cerrarResultados, cotizar, prestamosLS, temaLS, verCotizaciones } from "./acciones.js";
/* let contador = 0;
let cantidadDePrestamos = parseInt(prompt("Cuantos prestamos quieres pedir?"));
if(cantidadDePrestamos === 0) alert("Sin prestamos a cotizar"); */
const arrayPrestamos = [];
/* while (cantidadDePrestamos > contador) {
    let tipoPrestamo = prompt("Tipo de prestamo?")
    let saldoSolicitado = parseInt(prompt("Cantidad de dinero solicitado"));
    let cuotas = parseInt(prompt("Cantidad de cuotas"));
    const nuevoPrestamo = new Prestamo(saldoSolicitado, cuotas, tipoPrestamo);
    arrayPrestamos.push(nuevoPrestamo);
    contador++;
};
 */
/* let resultadoBusqueda = buscarPrestamo("inmuebles");
console.log(resultadoBusqueda); */
document.addEventListener("DOMContentLoaded", (e) => {
    cotizar(`#cotizar`, arrayPrestamos);
    cambiarTema("#tema");
    temaLS();
    verCotizaciones(arrayPrestamos, "tbCotizaciones", "#verCotizaciones");
    cerrarCotizaciones("#btnCerrar", "cotizaciones");
    buscar(arrayPrestamos, "tbResultados", "#buscar");
    cerrarResultados("#btnCerrarResultados", "resultados");
    prestamosLS(arrayPrestamos);
});