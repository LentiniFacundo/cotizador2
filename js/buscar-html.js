export const buscarPrestamoHTML = () => {
    const $fragment = document.createDocumentFragment();
    const $div = document.createElement("div");
    const $h2 = document.createElement("h2");
    const $table = document.createElement("table");
    const $btnCerrar = document.createElement("button");
    const $main = document.getElementById("main");
    $div.id = "resultados";
    $div.classList.add("resultados");
    $div.setAttribute("data-modo", "");
    $h2.innerText = "Resultados de la busqueda";
    $table.id = "tbResultados";
    $table.insertAdjacentHTML("afterbegin", `
    <th>Tipo</th>
    <th>Saldo</th>
    <th>Cuotas</th>
    <th>Tot. Intereses</th>
    <th>Pago Mensual</th>
    <th>Total a pagar</th>`);
    $btnCerrar.id = "btnCerrarResultados";
    $btnCerrar.innerText = "X Cerrar";
    $div.appendChild($h2);
    $div.appendChild($table);
    $div.appendChild($btnCerrar);
    $fragment.appendChild($div);
    $main.appendChild($fragment);
};