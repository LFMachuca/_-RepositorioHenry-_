function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');

  if (str1.length !== str2.length) {
    return false;
  }
  var esAnagrama1 = {};
  var esAnagrama2 = {};

  for (const char of str1) {
    esAnagrama1[char]=(esAnagrama1[char] || 0)+1;
  }

  for (const char of str2) {
    esAnagrama2[char]=(esAnagrama2[char] || 0)+1;
  }

  for (const key in esAnagrama1) {
    if (esAnagrama1[key]!== esAnagrama2[key]) {
      return false;
      
    }
  }
  return true;
}

module.exports = esAnagrama;
