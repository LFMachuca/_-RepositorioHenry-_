function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var producto = 1;
  var i = 0;
  for (i = a; i <= b; i++) {
    producto =  producto * i;
    
  }
  return Math.abs(producto);
}

module.exports = productoEntreNúmeros;