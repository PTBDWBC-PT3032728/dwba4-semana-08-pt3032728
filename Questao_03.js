/*No arquivo, declare alguma(s) estrutura(s)(exemplo: variável) para:
- Receber a string “João da Silva” (nome de um aluno);
- Receber um inteiro 7 (primeira nota do aluno);
- Receber um real 8.5 (segunda nota do aluno);
- Receber o valor da multiplicação da primeira nota do aluno por 0.6;
- Receber o valor da multiplicação da segunda nota do aluno por 0.4;
- Receber a soma destas últimas variáveis.
- Crie uma mensagem de alerta para informar o nome e as notas individuais do aluno.
- Crie uma mensagem de alerta para informar a nota total do aluno
- Mostre os dados de, no mínimo, 3 alunos
*/
let nomeAluno;
let primeiraNota;
let segundaNota;
let multPrimeiraNota = primeiraNota * 0.6;
let multSegundaNota = segundaNota * 0.4;
let total = multPrimeiraNota + multSegundaNota;
let contagem = 3;

function addAluno(){
    if(contagem > 1){
        
        contagem--;
        alert("Adicione mais [" + contagem + "] alunos para mostrar seus resultados.");
    } else {
        alert("Deu bom!");
    }
}