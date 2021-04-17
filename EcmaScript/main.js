import {Pessoa} from "./pessoa.js";

let jorge = new Pessoa()
jorge.nome = "Jorge"
jorge.idade = "21"
jorge.profissao = "nenhuma"

console.log(jorge)



//Criando um objeto
let pessoa = {
    //atributos
    nome:"Jorge",
    idade:"21",
    profissao: "nenhuma",

    //função
    falar: function(){
        console.log("falando")
    }
}
//Acessando todos os atributos do objeto
console.log(pessoa)

//Acessando atributo específico
console.log(pessoa.nome)

//Acessando método
pessoa.falar()
