export class Funcionario{
    constructor(nome, cpf, salario){
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;
        this._bonificacao = 1;
        this._senha = (Math.random() + 1).toString(36).substring(7);
    }
    get nome(){
        return this._nome;
    }
    get senha(){
        return this._senha;
    }
    autenticar(senhaLogin){
       
    }
}