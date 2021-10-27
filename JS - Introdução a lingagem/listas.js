console.log(`Trabalhando com LISTAS`);

// Constroi uma nova lista
const listaDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Minas Gerais`,
    `Porto Alegre`
);
                    // Adicionando Itens a Lista //

// O comando 'push' adiciona um novo elemento a lista
listaDestinos.push(`Ubatuba`, `Porto de Galinhas`, `Brasilia`);
// O comando 'unshift' adiciona um novo elemento ao inicio da lista
listaDestinos.unshift(`Campos do Jordão`);

                    // Acessando e localizando dados especificos na lista

// O comando 'indexOf' procura o indece de um item da lista
var posicao = listaDestinos.indexOf('Rio de Janeiro'); //-> 2

// percorre a lista para localizar uma valor
for (let item of listaDestinos) {
    if(item == "São Paulo"){
        var destino = item;
    }
  }

// Acessar um item expecifico da lista
console.log(listaDestinos[2]); //-> Rio de Janeiro

// Acessar o ultimo elemento da lista
console.log(listaDestinos[listaDestinos.length - 1]);

                    // Removendo Itens da Lista //

// O comando 'splice' remove um item da lista referente a ('posição', 'quantidade de elementos a ser deletado')
listaDestinos.splice(posicao,1);
console.log(listaDestinos);
// O comando 'shift' remove o primeiro item da lista
listaDestinos.shift();
console.log(listaDestinos);
// O comando 'pop' remove o ultimo item da lista
listaDestinos.pop();
console.log(listaDestinos);