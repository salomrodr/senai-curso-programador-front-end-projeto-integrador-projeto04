/* Função chamada pelo 'onclick' onde será inserido o valor que está dentro das aspas simples (html) */
function insert (num) { 
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

function limpar () {
    document.getElementById('resultado').innerHTML = ""
}

function voltar(){
	var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
	
function calcular() {
    var resultadoElement = document.getElementById('resultado');
    var resultado = resultadoElement.innerHTML.trim();

    /* Verifica se o último caractere é um número */
    var ultimoCaractereNumerico = /\d$/.test(resultado); 
	
	/* 

    Essa é uma expressão nativa do javascript: onde /\d/ é uma classe de caracteres que corresponde 
    a qualquer dígito decimal (0-9) e $: Isso representa o final de uma string.
    
    */

    if (ultimoCaractereNumerico) {
        resultadoElement.innerHTML = eval(resultado).toFixed(2);
    } else {
        alert("Mensagem de erro: Impossível Calcular");
        limpar(); /* Chama a função limpar*/
    }
}