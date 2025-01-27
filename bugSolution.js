function foo(a, b) {
  a = Number(a);
  b = Number(b);
  return a + b; 
}

console.log(foo(1, '2')); // Output: 3 (numerical addition)