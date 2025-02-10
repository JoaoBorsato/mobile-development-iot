console.log("Olá, mundo! Este é um script JavaScript.");

var nome = "João";
let idade = 25; 
const PI = 3.1415;  
let texto = "Olá, mundo!";  
let numero = 42;  
let booleano = true; 
let nulo = null;  
let indefinido;  
let frutas = ["Maçã", "Banana", "Laranja"];  
let pessoa = { nome: "Carlos", idade: 30 };  
console.log(frutas[0]); 
console.log(pessoa.nome); 

let hora = 14;
if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}
let cor = "azul";
switch (cor) {
    case "vermelho":
        console.log("A cor escolhida foi vermelho.");
        break;
    case "azul":
        console.log("A cor escolhida foi azul.");
        break;
    default:
        console.log("Cor não reconhecida.");
}
for (let i = 0; i < 5; i++) {
    console.log("Contador:", i);
}
let contador = 0;
while (contador < 3) {
    console.log("Número:", contador);
    contador++;
}
o tradicional
function saudacao(nome) {
    return "Olá, " + nome + "!";
}
console.log(saudacao("Maria"));

const dobro = (num) => num * 2;
console.log(dobro(5));
let global = "Sou global";
function testarEscopo() {
    let local = "Sou local";
    console.log(global);
    console.log(local);
}
testarEscopo();

function processar(callback) {
    console.log("Processando...");
    callback();
}
processar(() => console.log("Finalizado!"));

async function pegarDados() {
    return "Dados recebidos!";
}
pegarDados().then(console.log)