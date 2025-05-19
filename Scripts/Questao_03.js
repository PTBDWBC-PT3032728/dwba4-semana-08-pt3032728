//Declaração dos Arrays
let alunos = ["João da Silva", "Maria da Silva", "Henrique da Silva"];
let notas1 = [7, 10, 3];
let notas2 = [8.5, 7, 5];
//Processamento e alertas
for(let i = 0; i<3; i++){
    let multPrimeiraNota = notas1[i] * 0.6;
    let multSegundaNota = notas2[i] * 0.4;
    let total = multPrimeiraNota + multSegundaNota;
    alert("O aluno "+alunos[i]+" obteve na 1ªnota: ["+notas1[i]+"] e na 2ªnota: ["+notas2[i]+"]");
    alert("A nota total de "+alunos[i]+" é: "+total.toFixed(2));
}