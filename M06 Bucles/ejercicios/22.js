function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  var dias=0
   
  do {
    if (mes < 1 || mes > 12) {
      return 0;
    }
  } while (mes < 1 || mes > 12);
     switch (mes) {
      case 2:
        return 28;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      break;
      default:
        return 31;
        break;
      } 
   
}

module.exports = diasEnMes;
