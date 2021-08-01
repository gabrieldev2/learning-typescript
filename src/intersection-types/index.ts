type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC;

const pessoa1: Pessoa = {
  nome: 'joao',
  sobrenome: 'silva',
  idade: 12,
};

console.log(pessoa1);
