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
        a = document.createElement('a');
        a.innerHTML = "Resultado copiado para área de transferência!";
        a.classList.add('tooltip-copia');
        coordenadas = document.getElementById('copy-icon').getBoundingClientRect();
        a.style.left = coordenadas.x - 50;
        a.style.top = coordenadas.y + 50;
        document.querySelector('html').appendChild(a);
    }
    catch (err){
        alert('Erro ao copiar o texto!');
    }
    setTimeout(function () {document.querySelector('html').removeChild(document.querySelector('.tooltip-copia'))},3000);
}
function criptografar(){
    conteudo = document.getElementById("input-area").value;
    verificarCaracteres(conteudo) ? 
    Object.entries(regra).forEach((key) => {
        conteudo = String(conteudo).replace(RegExp(key[0],'g'),key[1]);
    }):alert(erro1);
    document.getElementById("result-area").innerHTML = verificarCaracteres(conteudo) ? conteudo:null;
    document.getElementById("copy-icon").style.zIndex = verificarCaracteres(conteudo) ? 4:-1;


    return 0
}
function descriptografar(){
    conteudo = document.getElementById("input-area").value;
    verificarCaracteres(conteudo) ? 
    Object.entries(regra).forEach((key) => {
        conteudo = String(conteudo).replace(RegExp(key[1],'g'),key[0]);
    }):alert(erro1);
    document.getElementById("result-area").innerHTML = verificarCaracteres(conteudo) ? conteudo:null;
    document.getElementById("copy-icon").style.zIndex = verificarCaracteres(conteudo) ? 4:-1;
    return 0
}


//"e" = 'enter'
//"i" = 'imes'
//"a" = "ai"
//"o" = "ober"
//'u' = "ufat"
