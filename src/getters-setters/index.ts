export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {}

  getNome(): string {
    return this.nome;
  }

  set cpf(valor: string) {
    this._cpf = valor;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  // setCpf(valor: string): void {
  //   this.cpf = valor;
  // }

  // getCpf(): string {
  //   return this.cpf.replace(/\D/g, '');
  // }
}

const pessoa = new Pessoa('Joao', 'Silva', 12, '000.000.000-00');
//pessoa.setCpf('123.456.789-10');
pessoa.cpf = '123.456.789-10';
console.log(pessoa.cpf);
