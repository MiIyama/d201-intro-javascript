let aluno = prompt('Qual o seu nome');
let materia = prompt('Qual a materia');
let nota = prompt('Qual a sua nota');

let  media = 6;

if (Number(nota) >= media) {
    alert('Parabens, o aluno '+ aluno + ' foi aprovado na matéria ' + materia);
}

else if (Number(nota) >= media - 0.5) {
    alert('O aluno '+ aluno + ' foi aprovado na matéria ' + materia + 'pelo sistema');
}

else {
    alert('Parece que a nota do '+ aluno +' na matéria '+ materia +' foi insuficiente');
}
