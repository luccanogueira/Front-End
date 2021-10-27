import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    static totalContasPoupanca = 0;
    constructor(saldo, agencia, cliente){
        super(saldo, agencia, cliente);
        this.tipo = 'CP';
        ContaPoupanca.totalContasPoupanca +=1;
    }
    sacar(valor){
        let taxa = 1.05;
        return this._sacar(valor, taxa);
    }
} 