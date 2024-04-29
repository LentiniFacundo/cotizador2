import { buscar, cambiarTema, cerrarCotizaciones, cerrarMercados, cerrarResultados, cotizar, prestamosLS, temaLS, verCotizaciones, verMercados } from "./acciones.js";

const arrayPrestamos = [];

document.addEventListener("DOMContentLoaded", (e) => {
    cotizar(`#cotizar`, arrayPrestamos);
    cambiarTema("#tema");
    temaLS();
    verCotizaciones(arrayPrestamos, "tbCotizaciones", "#verCotizaciones");
    cerrarCotizaciones("#btnCerrar", "cotizaciones");
    buscar(arrayPrestamos, "tbResultados", "#buscar");
    cerrarResultados("#btnCerrarResultados", "resultados");
    prestamosLS(arrayPrestamos);
    verMercados("#btnMercados");
    cerrarMercados("#cerrarMercados");
});