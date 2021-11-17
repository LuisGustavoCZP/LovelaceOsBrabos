class Aluno {
    constructor(nome, turma, grupo){
        this.nome = nome;
        this.turma = turma;
        this.grupo = grupo;
    }
}

var Aluno2
{
    let nome = "Felype"
    let turma = "Lovelace"
    let grupo = 1;
};

const alunosFixos = 
[
    new Aluno("Luis", "Lovelace", 2),
    new Aluno("Neto", "Lovelace", 2)
];

function ChecarAlunos() {
    for (aluno in alunosFixos){
        console.log(alunosFixos[aluno]);
    }
}

ChecarAlunos();