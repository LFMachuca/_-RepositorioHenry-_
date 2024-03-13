function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  var re = /[\W_]/g;
  string = string.toLowerCase().replace(re, '');

  var length = string.length;

  for(var i = 0 ; i < length/2 ; i++){
    if(string[i] !== string[length - 1 - i]){
      return false;
    }

  }
  return true;
}

module.exports = esPalindromo;
