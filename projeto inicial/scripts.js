var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");
var email= document.getElementById("email");
var saida= document.getElementById("saida-de-dados");
var telefone= document.getElementById("telefone");
var cep= document.getElementById("cep");
var logradouro= document.getElementById("logradouro");
var numero= document.getElementById("numero");


function alertar(event){
   // alert("Você clicou no botão!!! " + nome.value);
 
   // var numero = 7;
   // var resultado = numero % 2;
   // if(resultado == 0){
 //       alert("este número é par!");
//
   // }
    saida.innerText = "nome: "  + nome.value +
    "\n Email: " + email.value +
    "\n telefone " + telefone.value +
    "\n CEP:     " + cep.value + 
    "\n logradouro: " + logradouro.value +
    "\n número: " + numero.value;






}