const alunos = [
    {nome: 'João', nota: 6},
    {nome: 'Maria', nota: 5},
    {nome: 'Roberto', nota: 4},
    {nome: 'Jefferson', nota: 3},
    {nome: 'Rodrigo', nota: 2},
    {nome: 'Aline', nota: 7},
    {nome: 'Pamela', nota: 8},
    {nome: 'Gisele', nota: 9},
    {nome: 'Cleiton', nota: 10},
    {nome: 'Jonathan', nota: 10}
]

alunosAbaixoDaMedia = alunos.filter(function(aluno) {
    return aluno.nota <= 6
})

console.log(alunosAbaixoDaMedia)