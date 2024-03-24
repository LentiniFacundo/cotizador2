let contador = 0;
let cantidadDePrestamos = parseInt(prompt("Cuantos prestamos quieres pedir?"));
if(cantidadDePrestamos === 0) alert("Sin prestamos a cotizar");
const arrayPrestamos = [];

class Prestamo {
    constructor(saldoSolicitado, cuotas, tipo) {
        this.saldoSolicitado = saldoSolicitado;
        this.cuotas = cuotas;
        this.tipo = tipo;
        this.interes = 0;
    };

    get getSaldo() {
        return this.saldoSolicitado;
    };
    get getCuotas() {
        return this.cuotas;
    };
    get getTipo() {
        return this.tipo;
    };

    set setSaldo(saldo) {
        this.saldoSolicitado = saldo;
    };
    set setCuotas(cuotas) {
        this.cuotas = cuotas;
    };
    set setTipo(tipo) {
        this.tipo = tipo;
    };

    aplicarInteres() {
        if(this.cuotas < 13) this.interes = 20;
        if(this.cuotas <= 24 && this.cuotas > 12) this.interes = 28;
        if(this.cuotas > 24) this.interes = 37;
    };
    totalAPagar() {
        this.aplicarInteres();
        console.log(`Tipo de prestamo: ${this.tipo}\n
        Saldo solicitado: ${this.saldoSolicitado}\n
        Cuotas: ${this.cuotas}\n
        Intereses: ${this.saldoSolicitado * this.interes / 100}\n
        Valor de cuota mensual: ${this.saldoSolicitado / this.cuotas}\n
        Total a pagar: ${this.saldoSolicitado + (this.saldoSolicitado * this.interes / 100)}`);
    };

}

let buscarPrestamo = tipo => {
    let resultado = arrayPrestamos.filter(prestamo => prestamo.tipo === tipo)
    return resultado;
};

while (cantidadDePrestamos > contador) {
    let tipoPrestamo = prompt("Tipo de prestamo?")
    let saldoSolicitado = parseInt(prompt("Cantidad de dinero solicitado"));
    let cuotas = parseInt(prompt("Cantidad de cuotas"));
    const nuevoPrestamo = new Prestamo(saldoSolicitado, cuotas, tipoPrestamo);
    arrayPrestamos.push(nuevoPrestamo);
    contador++;
};

arrayPrestamos.forEach(prestamo => prestamo.totalAPagar());
let resultadoBusqueda = buscarPrestamo("inmuebles");
console.log(resultadoBusqueda);