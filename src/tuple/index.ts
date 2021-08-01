const dadosCliente1: [string, number] = ['joao', 1];
const dadosCliente2: readonly [string, string, number?] = ['joao', 'silva'];

dadosCliente1[0] = 'Carlos';
dadosCliente1[1] = 100;
console.log(dadosCliente1);
console.log(dadosCliente2);

// readonly
const array1: readonly string[] = ['Joao', 'Silva'];
const array2: ReadonlyArray<string> = ['Joao', 'Silva'];
console.log(array1);
console.log(array2);
