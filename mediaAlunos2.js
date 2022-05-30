function mediaAlunos(alunos, media) {
    const alunosAprovados = [];
    
    for(let i = 0; i < alunos.length; i++){
        let {nome, nota} = alunos[i]
        if(nota >= media) {
            alunosAprovados.push(nome)
        }
    }
    return alunosAprovados
}

console.log(mediaAlunos([{nome: 'Robert', nota: 8}, {nome: 'Fabiano', nota: 5}, {nome: 'Adriana', nota: 4}], 5))