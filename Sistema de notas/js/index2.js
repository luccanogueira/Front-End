var alunos = document.querySelectorAll(".aluno");

for(var i=0;i<alunos.length;i++){

	var aluno = alunos[i];

	var nome = aluno.querySelector(".info-nome").textContent;
	var prim = parseFloat(aluno.querySelector(".info-prim").textContent);
	var seg = parseFloat(aluno.querySelector(".info-seg").textContent);
	var ter = parseFloat(aluno.querySelector(".info-ter").textContent);
	var qua = parseFloat(aluno.querySelector(".info-qua").textContent);
	var media = calculaMedia(prim, seg, ter, qua);
	var status = verificaStatus(media);
	
	aluno.querySelector(".info-media").textContent = media.toFixed(1);
	aluno.querySelector(".info-status").textContent = status;
}

/*Função para calcular a média*/
function calculaMedia(nprim, nseg, nter, nqua) {
	return (parseFloat(nprim) + parseFloat(nseg) + parseFloat(nter) + parseFloat(nqua))/4;
}

/*Função para verificar status do aluno*/
function verificaStatus(nmedia){
	if(nmedia>=7){
		return "APROVADO";
	}else if(nmedia>=5 && nmedia<7){
		return "RECUPERAÇÃO";
	}else if(nmedia<5){
		return "REPROVADO";
	}
}

/*Função para criar uma nova linha na tabela e add as informações do novo aluno*/
var btnCadastrar = document.querySelector("#cadastrar-aluno");
btnCadastrar.addEventListener("click",function(){

	event.preventDefault();

	var form = document.querySelector("#formulario");

	var aluno = obtemDadosForm(form);
	console.log(aluno);
	/*Crio o elemento TR*/
	var alunoTr = montaTr(aluno);

	var tabela = document.querySelector("#tabela-alunos");
	tabela.appendChild(alunoTr);

	form.reset();
	
});

function obtemDadosForm(form){
	var aluno = {
		nome: form.nome.value,
		primeiro: form.prim.value,
		segundo: form.seg.value,
		terceiro: form.ter.value,
		quarto: form.qua.value,
		media: calculaMedia (form.prim.value, form.seg.value, form.ter.value, form.qua.value),
		status: verificaStatus(calculaMedia (form.prim.value, form.seg.value, form.ter.value, form.qua.value))
	}
	
	return aluno;
}

function montaTr (aluno){

	var alunoTr = document.createElement("tr");
	alunoTr.classList.add("aluno");	
	var nomeTd	 = document.createElement("td");
	nomeTd.classList.add("info-nome");
	var primTd	 = document.createElement("td");
	primTd.classList.add("info-prim");
	var segTd	 = document.createElement("td");
	segTd.classList.add("info-seg");
	var terTd	 = document.createElement("td");
	terTd.classList.add("info-ter");
	var quaTd	 = document.createElement("td");
	quaTd.classList.add("info-qua");
	var mediaTd	 = document.createElement("td");
	mediaTd.classList.add("info-media");
	var statusTd = document.createElement("td");
	statusTd.classList.add("info-status");


	/*Expecifico o valor de cada intem*/
	nomeTd.textContent = aluno.nome;
	primTd.textContent = aluno.primeiro;
	segTd.textContent = aluno.segundo;
	terTd.textContent = aluno.terceiro;
	quaTd.textContent = aluno.quarto;
	mediaTd.textContent = aluno.media;
	statusTd.textContent = aluno.status;

	/*Adiciona os TD's no TR*/
	alunoTr.appendChild(nomeTd);
	alunoTr.appendChild(primTd);
	alunoTr.appendChild(segTd);
	alunoTr.appendChild(terTd);
	alunoTr.appendChild(quaTd);
	alunoTr.appendChild(mediaTd);
	alunoTr.appendChild(statusTd);

	return alunoTr;
}


