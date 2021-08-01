/* eslint-disable */
let x = 10;
x = 0b1010;
const y = 10;
let a: 100 = 100;
// a = 120;

// let testing = 100 as const;

const pessoa = {
  nome: 'Joao' as const,
  sobrenome: 'Silva'
}

console.log(pessoa);

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Amarelo'))

export default 1;
