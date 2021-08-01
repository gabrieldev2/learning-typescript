export class Pessoa {
  static idadePadrao = 12;
  static cpfPadrao = '111.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static falaOi(): void {
    console.log('OI');
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Joao', 'Silva', 12, '000.000.000-00');
console.log(pessoa1);
const pessoa2 = Pessoa.criaPessoa('joao', 'silva');
console.log(pessoa2);
Pessoa.falaOi();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
