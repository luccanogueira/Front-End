console.log("Variaveis de tipos diferentes e conversões.");

// Quando declaramos uma variavel que não é gloobal no sistemas usamos:
// const - variavel constante que não muda seu valor
// let - variavel comum que pode variar seu valor
// var -  pertence a função em que foi declarada, se for declarada fora de uma função, será global.
let nome = "Lucc@ Nogueir@";
let idade = "20";
let cpf = "         49957948830         ";


// console.log('O nome do desenvolvedor é: ' + nome + 'e sua idade é ' + idade + '. Daqui 5 anos ele terá' + (parseInt(idade) + 5));
//console.log(`O nome do desenvolvedor é: ${nome} e sua idade é ${idade}. Daqui 5 anos ele terá ${parseInt(idade) + 5}`);

const novoNome = nome.replace(/@/g, 'a');

// \d -> capturar caracteres referente a digitos
// \w -> capturar caracteres alfa numericos
//const cpfFormat = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");
// 'trim()' limpa espaços em branco
//console.log(novoNome, cpfFormat.trim());

const horas = new Date(1583778029);
console.log( horas );