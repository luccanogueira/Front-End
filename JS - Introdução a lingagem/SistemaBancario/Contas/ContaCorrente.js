import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static totalContasCorrente = 0;
    constructor(agencia, cliente){
        super(0, agencia, cliente);
        this._tipo = 'CC';
        ContaCorrente.totalContasCorrente +=1;
    }
}