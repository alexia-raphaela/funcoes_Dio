function alunosAprovados(alunos, media) {
    let mediaFinal = [];
    for(let i = 0; i < alunos.length; i++) {
        if(alunos[i] >= media) {
            mediaFinal.push(alunos[i])
        }
    }
    return `Média Final de cada aluno: ${mediaFinal}`
}

console.log(alunosAprovados([5, 8, 10, 4, 4], 5))
