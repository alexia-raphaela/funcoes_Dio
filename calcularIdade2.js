const pessoa = {
    nome: 'Robert',
    idade: 29
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.aplly(pessoa, [5]))