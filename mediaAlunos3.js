function mediaAlunos3(alunos, media) {
    const alunosAprovados = [];

    for(let i = 0; i < alunos.length; i++) {
        let {nome, nota} = alunos[i]
        if(nota >= media){
            alunosAprovados.push(alunos[i])
        }
    }
    return alunosAprovados
}

console.log(mediaAlunos3([{nome: 'Alexia', nota: 10}, {nome: 'Robert', nota: 4}, {nome: 'Fabiano', nota: 4}, {nome: 'Adriana', nota: 8}], 5))