import { Funcionario } from "./Funcionarios/Funcionario.js";

export class Autenticacao {
    static login(autenticavel, senha){
        if(Autenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return console.log(`Dados invalidos.`);
    }
    ehAutenticavel(autenticavel){
       return "autenticavel" in autenticavel && autenticavel.autenticar instanceof Function ;
    }
}