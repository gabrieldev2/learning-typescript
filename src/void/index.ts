function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'joao',
  sobrenome: 'silva',

  exibirNome(): void {
    console.log(this.nome);
  },
};

semRetorno('Joao', 'Silva');
pessoa.exibirNome();

export { pessoa };
