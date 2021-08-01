export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    const result = super.getNomeCompleto();
    return result;
  }
}

const pessoa = new Pessoa('Joao', 'Silva', 12, '000.000.000-00');
console.log(pessoa);
const aluno = new Aluno('Joao', 'Silva', 12, '000.000.000-00', '5A');
console.log(aluno);
