export class Conta{
    static totalContas = 0;
    constructor(saldo, agencia, cliente){
        this._saldo = saldo;
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0.00;
        if(this.constructor == Conta){
            throw new Error("Não é possivel criar uma nova conta com instancia do tipo 'Conta' diretamente.");
        }
        Conta.totalContas +=1;
    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }
    get cliente(){
        return this._cliente;
    } 
    set saldo(novoSoldo){
        if(typeof novoSoldo === 'number'){
            this._saldo += novoSoldo;
        }
    }
    get saldo(){
        return this._saldo;
    }
    saca(valor){
        let taxa = 1;
        return this._sacar(valor, taxa);
    }
    _sacar(valor, taxa){
        if(this._saldo < (valor * taxa)){
            console.log(`Saldo insuficiente.`);
            return;
        }
            this._saldo -= (valor * taxa);
    }
    depositar(valor){
        if(valor <= 0 ){
            console.log(`Valor invalido.`);
            return;
        }
            this._saldo += valor;
    }
    transferir(valor, conta){
        const valorSacado = this.saca(valor);
        conta.depositar(valorSacado);
    }
}