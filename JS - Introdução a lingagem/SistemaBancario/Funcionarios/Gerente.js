import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario{
    constructor(nome, cpf, salario){
        super(nome, cpf, salario);
        this._bonificacao = 1.1;
    }
    get nome(){
        return this._nome;
    }
    get senha(){
        return this._senha;
    }
    autenticar(senhaLogin){
        if(senhaLogin == this.senha){
            return console.log(`Seja bem vindo(a) ${this.nome}!!`);
        }
            console.log(`Dados invalidos.`);
    }
}