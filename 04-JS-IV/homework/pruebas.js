var array = ['abajo', 'pera', 'escalera', 'alerta', 'indice', 'azteca', 'arbol', 'buzo'];

function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
    var arr1 = [];
    arr1 = array.filter((elem) => elem[0] === "a");
    return arr1
  };

  console.log(filter(array))