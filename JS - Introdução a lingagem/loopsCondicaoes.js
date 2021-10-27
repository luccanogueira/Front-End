console.log("Trabalhando com Condições e Laços de Repetições");

let idade = 17;
let acompanhante = true;

const lista = new Array(
    `Brasil`,
    `Italia`,
    `Japão`,
    `França`,
    `Estados Unidos`
);

const numeros = new Array(
    "1", "2", "3" , "4", "5", "6", "7", "8"
);

if(idade < 18 || acompanhante != true){
    console.log("Menor de idade não pode contratar um plano sem estar acompanhado.");
}

var contador = 0;
do{
    console.log(lista[contador]);
    contador++;
}while(contador <= lista.length)

for (let n of numeros){
    if (parseInt(n) % 2 == 0){
        console.log(`O numero ${n} é par.`);
    }else{
        console.log(`O numero ${n} é impar.`);
    }
}

for (let destino of lista) {
    if(destino == "Japão"){
       lista.splice(destino, 1);
       console.log(`Viagem para ${destino} contrata com sucesso! Boa viagem!`);
    }
  }
