/* eslint-disable */

// tipos basicos
let nome: string = 'Joao';
let idade: number = 20;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');

// arrays
let arrayDeNumeros: Array<number> = [1,2,3];
let arrayDeNumeros2: number[] = [1,2,3];
let arrayDeString: Array<string> = ['oi', 'blz'];
let arrayDeString2: string[] = ['oi', 'blz'];

// objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  nome: 'joao',
  idade: 30,
};

// funcoes
function soma(x: number, y: number): number {
  return x + y
}

console.log(pessoa);
