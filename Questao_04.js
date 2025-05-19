class Aluno{
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota){
        this.pname = primeiroNome;
        this.sname = segundoNome;
        this.pnota = primeiraNota;
        this.snota = segundaNota;
    }
    nomeCompleto(){
        return this.pname + " " + this.sname;
    }
    media(){
        return (this.pnota * 0.6) + (this.snota * 0.4);
    }
    situacao(){
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

let aluno1 = new Aluno("João", "da Silva", 7, 8.5);
let aluno2 = new Aluno("Maria", "da Silva", 10, 7);
let aluno3 = new Aluno("Henrique", "Barreto", 5, 3);
let aluno4 = new Aluno("Arthur", "Nogueira", 4, 5);
let aluno5 = new Aluno("José", "Felix", 10, 10);
let alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

function mostrarAlunos(){
    for(let aluno of alunos){
        alert("Nome do aluno: ["+aluno.nomeCompleto()+"] Média: ["+aluno.media().toFixed(2)+"] Situação: "+aluno.situacao());
    }
}
