export class Prestamo {
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