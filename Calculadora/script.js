function clean() {
    document.getElementById('visor').innerHTML = "";
}

function del(){
    let resultado = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = resultado.substring(0, resultado.length -1);
}

function insert(num) {
    let resultado = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = resultado + num;
}

function calc(){
    let resultado = document.getElementById('visor').innerHTML;
    if (resultado) {
        document.getElementById('visor').innerHTML = eval(resultado);
    }
}