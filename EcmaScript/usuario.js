class Usuario{
    constructor(nome,cpf,idade){
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
    }
    get getNome(){
        return this.nome;
    }
    get getCpf(){
        return this.cpf;
    }
    get getIdade(){
        return this.idade;
    }
    set setIdade(idade){
        this.idade = idade;
    }
}

class Conta extends Usuario{
    constructor(usuario, saldo = 0){
        super();
        this.nome = usuario.getNome;
        this.cpf = usuario.getCpf;
        this.idade = usuario.getIdade;
        this.saldo = saldo;
    }

    get getSaldo(){
        return this.saldo
    }

    set setSaldo(saldo){
        this.saldo = saldo;
    }

    saque(valor){
        if(valor<=this.saldo){
            this.saldo = this.saldo - valor;
        }
    }

    deposito(valor){
        this.saldo = this.saldo + valor;
    }
}

let usuario = new Usuario("Jorge","0000",21);
let conta = new Conta(usuario,500);
console.log(conta);
conta.saque(250);
console.log(conta);
conta.deposito(40);
console.log(conta);
console.log(conta.getSaldo);
console.log(conta.getCpf);
console.log(conta.getIdade);
console.log(conta.getNome);