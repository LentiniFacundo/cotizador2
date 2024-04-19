import { buscarPrestamoHTML } from "./buscar-html.js";
import { Prestamo } from "./class-prestamo.js";
import { cotizacionesHTML } from "./cotizaciones-html.js";


const temaOscuro = () => {
    const $etiquetas = document.querySelectorAll("[data-tema]");
    $etiquetas.forEach(etiqueta => {
        etiqueta.setAttribute("data-tema", "oscuro");
        etiqueta.classList.add("tema-oscuro");
        localStorage.setItem("tema", "oscuro");
    });
};

const temaClaro = () => {
    const $etiquetas = document.querySelectorAll("[data-tema]");
    $etiquetas.forEach(etiqueta => {
        etiqueta.setAttribute("data-tema", "claro");
        etiqueta.classList.remove("tema-oscuro");
        localStorage.setItem("tema", "claro");
    });
};

export const temaLS = () => {
    if(localStorage.getItem("tema") === null) localStorage.setItem("tema", "claro");
    if(localStorage.getItem("tema") === "claro") temaClaro();
    if(localStorage.getItem("tema") === "oscuro") temaOscuro();
};

export const cambiarTema = (btnTema) => {
    document.addEventListener("click", (e) => {
        if(e.target.matches(`${btnTema} *`) || e.target.matches(btnTema)) {
            const $btnTema = document.querySelector(btnTema);
            if($btnTema.getAttribute("data-tema") === "claro") {
                temaOscuro();
            } else {
                temaClaro();
            };
        };
    })
};

const buscarPrestamo = (tipo, arrayPrestamos) => {
    let resultado = arrayPrestamos.filter(prestamo => prestamo.tipo === tipo)
    return resultado;
};

export const cotizar = (btnCotizar, array) => {
    document.addEventListener("click", (e) => {
        e.preventDefault()
        if(e.target.matches(btnCotizar)) {
            const $tipo = document.getElementById("tipo").value;
            let $saldo = parseInt(document.getElementById("saldo").value);
            let $cuotas = parseInt(document.getElementById("cuotas").value);
            if(!$tipo || !$saldo || !$cuotas) return Swal.fire({
                text: "Todos los campos son obligatorios", 
                icon: "error",
                iconColor: "#36A094",
                confirmButtonColor: `#36A094`
            });
            const prestamo = new Prestamo($saldo, $cuotas, $tipo);
            prestamo.aplicarInteres();
            array.push(prestamo);
            localStorage.setItem("prestamos", JSON.stringify(array));
            document.getElementById("prestamo").reset();
            Swal.fire({
                text: "Cotizacion exitosa!",
                icon: "success",
                iconColor: "#36A094",
                confirmButtonColor: `#36A094`,
                timer: 1500
            })
        };
    });
};

export const verCotizaciones = (arrPrestanos, tablaId, btnCotizaciones) => {
    document.addEventListener("click", (e) => {
        if(e.target.matches(btnCotizaciones)) {
            if(arrPrestanos.length === 0) return Swal.fire({
                text: "No hay cotizaciones",
                icon: "error",
                iconColor: "#36A094",
                confirmButtonColor: `#36A094`
            });
            cotizacionesHTML();
            const $tabla = document.getElementById(tablaId);
            arrPrestanos.forEach(prestamo => {
            $tabla.insertAdjacentHTML("beforeend", `
                <td>${prestamo.tipo}</td>
                <td>${prestamo.saldoSolicitado}</td>
                <td>${prestamo.cuotas}</td>
                <td>${parseFloat(prestamo.saldoSolicitado * prestamo.interes / 100).toFixed(2)}</td>
                <td>${parseFloat((prestamo.saldoSolicitado * prestamo.interes / 100 + prestamo.saldoSolicitado) / prestamo.cuotas).toFixed(2)}</td>
                <td>${parseFloat(prestamo.saldoSolicitado + (prestamo.saldoSolicitado * prestamo.interes / 100)).toFixed(2)}</td>
            `);
        });
        document.getElementById("verCotizaciones").setAttribute("disabled", "true");
        document.getElementById("cotizar").setAttribute("disabled", "true");
        document.getElementById("buscar").setAttribute("disabled", "true");
        document.querySelector("header").classList.add("inactiva");
        document.querySelector("main").classList.add("inactiva");
        };
    });
};


export const cerrarCotizaciones = (btnCerrar, cotizacionesDivId) => {
    document.addEventListener("click", (e) => {
        if(e.target.matches(btnCerrar)) {
            let $body = document.querySelector("body");
            let $div = document.getElementById(cotizacionesDivId)
            $body.removeChild($div)
            document.getElementById("verCotizaciones").removeAttribute("disabled");
            document.getElementById("cotizar").removeAttribute("disabled");
            document.getElementById("buscar").removeAttribute("disabled");
            document.querySelector("header").classList.remove("inactiva");
            document.querySelector("main").classList.remove("inactiva");
        };
    });
};

export const buscar = (arrayPrestamos, tbResutados, btnBuscar) => {
    document.addEventListener("click", (e) => {
        if(e.target.matches(btnBuscar)) {
            e.preventDefault();
            let $tipo = document.getElementById("tipoPrestamo").value;
            let resultado = buscarPrestamo($tipo, arrayPrestamos);
            if(resultado.length === 0) return Swal.fire({
                text: "No se encontraron resultados",
                icon: "error",
                iconColor: "#36A094",
                confirmButtonColor: `#36A094`
            });
            buscarPrestamoHTML();
            const $tabla = document.getElementById(tbResutados);
            resultado.forEach(prestamo => {
                $tabla.insertAdjacentHTML("beforeend", `
                    <td>${prestamo.tipo}</td>
                    <td>${prestamo.saldoSolicitado}</td>
                    <td>${prestamo.cuotas}</td>
                    <td>${parseFloat(prestamo.saldoSolicitado * prestamo.interes / 100).toFixed(2)}</td>
                    <td>${parseFloat((prestamo.saldoSolicitado * prestamo.interes / 100 + prestamo.saldoSolicitado) / prestamo.cuotas).toFixed(2)}</td>
                    <td>${parseFloat(prestamo.saldoSolicitado + (prestamo.saldoSolicitado * prestamo.interes / 100)).toFixed(2)}</td>
                `);
            });
            document.getElementById("verCotizaciones").setAttribute("disabled", "true");
            document.getElementById("cotizar").setAttribute("disabled", "true");
            document.getElementById("buscar").setAttribute("disabled", "true");
            document.querySelector("header").classList.add("inactiva");
            document.querySelector("main").classList.add("inactiva");
        };
    });
};

export const cerrarResultados = (btnCerrar, resultadosDivId) => {
    document.addEventListener("click", (e) => {
        if(e.target.matches(btnCerrar)) {
            let $body = document.querySelector("body");
            let $div = document.getElementById(resultadosDivId)
            $body.removeChild($div)
            document.getElementById("verCotizaciones").removeAttribute("disabled");
            document.getElementById("cotizar").removeAttribute("disabled");
            document.getElementById("buscar").removeAttribute("disabled");
            document.querySelector("header").classList.remove("inactiva");
            document.querySelector("main").classList.remove("inactiva");
        };
    });
};

export const prestamosLS = (arrayPrestamos) => {
    if(localStorage.getItem("prestamos")) {
        const prestamos = JSON.parse(localStorage.getItem("prestamos"));
        prestamos.forEach(prestamo => arrayPrestamos.push(prestamo));
    }
};