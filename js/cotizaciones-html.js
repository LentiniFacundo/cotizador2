export const cotizacionesHTML = () => {
    const $fragment = document.createDocumentFragment();
    const $div = document.createElement("div");
    const $h2 = document.createElement("h2");
    const $table = document.createElement("table");
    const $btnCerrar = document.createElement("button");
    const $body = document.querySelector("body");
    $div.id = "cotizaciones";
    $div.classList.add("cotizaciones");
    $div.setAttribute("data-modo", "");
    $h2.innerText = "Cotizaciones";
    $table.id = "tbCotizaciones";
    $table.insertAdjacentHTML("afterbegin", `
    <th>Tipo</th>
    <th>Saldo</th>
    <th>Cuotas</th>
    <th>Tot. Intereses</th>
    <th>Pago Mensual</th>
    <th>Total a pagar</th>`);
    $btnCerrar.id = "btnCerrar";
    $btnCerrar.innerText = "X Cerrar";
    $div.appendChild($h2);
    $div.appendChild($table);
    $div.appendChild($btnCerrar);
    $fragment.appendChild($div);
    $body.appendChild($fragment);
};