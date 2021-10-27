import { Cliente } from "./Clientes/Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Conta } from "./Contas/Conta.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { Autenticacao } from "./Autenticacao.js";

const diretor = new Diretor("Luiz", 57846324456, 5000.00);
const gerente = new Gerente("Amanda", 78965832451, 4000.00);
const login = Autenticacao.login(diretor, diretor.senha);

1583778029
const horas = new Date(1583778029);
console.log( horas );
console.log(login);
console.log(diretor.senha);

/*const cliente1 = new Cliente("Lucca Nogueira", 49957948830);
const cliente2 = new Cliente("Alice Consta", 547584236592);

const contaLucca = new ContaCorrente(1234, cliente1);
const contaAlice = new ContaPoupanca(0.00, 4321, cliente2);

contaAlice.depositar(20);
contaAlice.sacar(10);

console.log(`Existe ${Conta.totalContas} contas cadastradas.\n
Contas Corrente: ${ContaCorrente.totalContasCorrente} 
Contas Poupanças: ${ContaPoupanca.totalContasPoupanca}`);*/