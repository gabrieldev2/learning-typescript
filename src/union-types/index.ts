function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  if (typeof a === 'string' && typeof b === 'string') return a + b;
  return 'indefinido';
}

console.log(addOrConcat(1, 2));
console.log(addOrConcat('1', 2));
