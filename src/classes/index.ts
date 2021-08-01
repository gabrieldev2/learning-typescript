export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaborador(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Joao', 12);
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const u1 = new Udemy();
console.log(u1.popColaborador());

// const e1 = new Empresa('Joao', 12);
// const c1 = new Colaborador('Carlos', 'Silva');
// const c2 = new Colaborador('Rodrigo', 'Silva');
// e1.adicionaColaborador(c1);
// e1.adicionaColaborador(c2);
// // e1.mostrarColaborador();
// console.log(e1);
