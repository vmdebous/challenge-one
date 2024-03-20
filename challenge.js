const regra = {
    "e" : "enter",
    "i" : "imes",
    "a" : "ai",
    "o" : "ober",
    "u" : "ufat"
};
const erro1 = 'Não utilize letras maiúsculas, letras acentuada e/ou caracteres especiais!';
var conteudo;
function verificarCaracteres(conteudo){
    return /[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕáéíóúàèìòùâêîôûãõ!@#$%^&*()_+{}|.:;'"/<>[\]?]/.test(conteudo) ? false:true;
}
async function extraCopy(element){
    try{
        await navigator.clipboard.writeText(document.getElementById('result-area').value);
        element.innerHTML = "Copiado!";
    }
    catch (err){
        alert('Erro ao copiar o texto!');
    }
    setTimeout(function () {element.innerHTML = 'Copiar'},3000);
}
function criptografar(){
    conteudo = document.getElementById("input-area").value;
    verificarCaracteres(conteudo) ? 
    Object.entries(regra).forEach((key) => {
        conteudo = String(conteudo).replace(RegExp(key[0],'g'),key[1]);
    }):alert(erro1);
    document.getElementById("result-area").innerHTML = verificarCaracteres(conteudo) ? conteudo:null;
    document.getElementById("copiar-btn").style.display = verificarCaracteres(conteudo) ? 'flex':'none';


    return 0
}
function descriptografar(){
    conteudo = document.getElementById("input-area").value;
    verificarCaracteres(conteudo) ? 
    Object.entries(regra).forEach((key) => {
        conteudo = String(conteudo).replace(RegExp(key[1],'g'),key[0]);
    }):alert(erro1);
    document.getElementById("result-area").innerHTML = verificarCaracteres(conteudo) ? conteudo:null;
    document.getElementById("copiar-btn").style.display = verificarCaracteres(conteudo) ? 'flex':'none';
    return 0
}
