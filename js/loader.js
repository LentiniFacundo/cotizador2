export const loader = {
    abrir: () => {
        document.querySelector("main").insertAdjacentHTML("beforeend", `<div id="loader" class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`);
    },
    cerrar: () => {
        let $loader = document.getElementById("loader");
        let $main = document.querySelector("main");
        $main.removeChild($loader);
    }
};