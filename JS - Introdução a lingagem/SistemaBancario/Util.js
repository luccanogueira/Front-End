export class Util{
    cadSenha(senha){
        return senha = (Math.random() + 1).toString(36).substring(7);
    }
}