function criptografar(){
    if(texto.value == ''){
        alert("Digite alguma mensagem para ser criptografada.");
    }else{
        var msg = texto.value
        var cod = msg.replaceAll("e", "enter").
        replaceAll("i","imes").
        replaceAll("a", "ai").
        replaceAll("o","ober").
        replaceAll("u", "ufat")
        document.getElementById('texto-cripto').value = cod
    }
    
}

function descriptografar(){
    console.log(mensagem.value)
    if(mensagem.value == ''){
        alert("Digite alguma mensagem para ser descriptografado.");
    }else{
        var msg = mensagem.value
        var cod = msg.replaceAll("enter", "e").
        replaceAll("imes","i").
        replaceAll("ai", "a").
        replaceAll("ober","o").
        replaceAll("ufat", "u")
        document.getElementById('texto-cripto').value = cod
    }
}
function copiar(){
    var copia = mensagem.select();   
    document.execCommand('copy');
    alert("Copiado para área de trabalho");
}
/* seleciona o input que contêm a mensagem que o usuário quer criptografar */
var texto = document.querySelector("#mensagem")
/* seleciona o campo de texto que contêm a mensagem que o usuário quer descriptografar */
var mensagem = document.querySelector("#texto-cripto")

var button = document.querySelector("button#botoes-criptografar")
button.onclick = criptografar;
var button2 = document.querySelector("button#botoes-descriptografar")
button2.onclick = descriptografar;
var button3 = document.querySelector("button#botao-copiar")
button3.onclick = copiar;