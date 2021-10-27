/* function Livro (nome, editora, pg){
    gNome = nome,
    gEditora = editora,
    gPg = pg

    this.getNome = function(){
        return gNome;
    }
    this.getEditora = function(){
        return gEditora;
    }
    this.getPg = function(){
        return gPg;
    }
}

class Livro {
    constructor(nome, editora, pgs){
        this.nome = nome;
        this.editora = editora;
        this.pgs = pgs;
    }
    anuncio(){
        console.log(`${this.nome}\n\nEditado pela ${this.editora} e possuiu ${this.pgs} páginas.`);
    }
}
class Colecao extends Livro {
    constructor(nome, colecao){
        super(nome);
        this.colecao = colecao;
    }
    discricaoColecao(){
        console.log(`O livro ${this.nome} faz parte da coleção ${this.colecao}.`)
    }
}

const NovoLivro = new Livro("Livro", "Saraiva", 100);
NovoLivro.anuncio();
const js = new Colecao("Introdução ao JS", "Aprendendo programação");
js.discricaoColecao(); */

class Cliente extends Conta{
    constructor(nome, cpf){
        super(this.agn);
        super(this.saldo);
        this.nome = nome;
        this.cpf = cpf;
    }
    aprensetaCliente(){
        console.log(`O cliente ${this.nome} possui o cpf ${this.cpf}\n
        Possui uma conta na agencia ${this.agn}} com saldo de R$${this.saldo}.`);
    }
}
class Conta{
    constructor(tipo, agn, saldo){
        this.tipo = tipo;
        this.agn = agn;
        this.saldo = saldo;
    }
    operacao(escolha, valor){
        if(saldo > valor && valor > 0 && valor != null){
            switch (escolha){
                case 1:
                    this.saldo + valor;
                    break;
                case 2:
                    this.saldo - valor
                    break;
            }
        }else{
            console.log("Saldo ou valor informado invalido.");
        }
    }
}

const cliente1 = new Cliente();
const conta1 = new Conta();

cliente1.nome = "Lucca";
cliente1.cpf = 49957948830;
conta1.tipo = "Corrente";
conta1.agn = 123;
conta1.saldo = 0.00;

cliente1.aprensetaCliente();
