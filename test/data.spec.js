global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('Tests', () => {
    
  // Para comprobar la función computeMean,que calcula el promedio de la segunda columna, tiene que soportar valores vacios, de entrada tiene un array con dos columnas y de salida un promedio de la segunda columna, se salta y no concidera los elementos vacios 
  describe('computeMean', () => {
      //que voy a testear, se puede hacer para saber si es función, para saber si me devulve lo que quiero
    it('debería ser una función',() => {
      // se prueba que es una función
      assert.equal(typeof computeMean, "function");
    });
    //se prueb una función con un array
    it('ingresa este array [[1960,""],[1987,21],[1899,98],[2002,45],[2010,70],[2017,""]] debe retornar 58.5', () => {
      assert.equal(window.computeMean([[1960,""],[1987,21],[1899,98],[2002,45],[2010,70],[2017,""]]), 58.5);
    });
  });

  // Para comprobar la función computeMax,que calcula el promedio de la segunda columna, tiene que soportar valores vacios, de entrada tiene un array con dos columnas y de salida un promedio de la segunda columna, se salta y no concidera los elementos vacios 
  describe('computeMax', () => {
    //que voy a testear, se puede hacer para saber si es función, para saber si me devulve lo que quiero
  it('debería ser una función',() => {
    // se prueba que es una función
    assert.equal(typeof computeMax, "function");
  });
  //se prueb una función con un array
  it('ingresa este array [[1960,""],[1987,21],[1899,98],[2002,45],[2010,70],[2017,""]] debe retornar 98', () => {
    assert.equal(window.computeMax([[1960,""],[1987,21],[1899,98],[2002,45],[2010,70],[2017,""]]), 98);
  });
});

// Para comprobar la función computeMin,que calcula el promedio de la segunda columna, tiene que soportar valores vacios, de entrada tiene un array con dos columnas y de salida un promedio de la segunda columna, se salta y no concidera los elementos vacios 
describe('computeMin', () => {
  //que voy a testear, se puede hacer para saber si es función, para saber si me devulve lo que quiero
it('debería ser una función',() => {
  // se prueba que es una función
  assert.equal(typeof computeMin, "function");
});
//se prueb una función con un array
it('ingresa este array [[1960,""],[1987,21],[1899,98],[2002,45],[2010,70],[2017,""]] debe retornar 21', () => {
  assert.equal(window.computeMin([[1960,""],[1987,21],[1899,98],[2002,45],[2010,70],[2017,""]]), 21);
});
});

// Para comprobar la función computeMedian,que calcula el promedio de la segunda columna, tiene que soportar valores vacios, de entrada tiene un array con dos columnas y de salida un promedio de la segunda columna, se salta y no concidera los elementos vacios 
describe('computeMedian', () => {
  //que voy a testear, se puede hacer para saber si es función, para saber si me devulve lo que quiero
it('debería ser una función',() => {
  // se prueba que es una función
  assert.equal(typeof computeMedian, "function");
});
//se prueb una función con un array
it('ingresa este array [[1960,""],[1987,21],[1899,98],[2002,45],[2010,70],[2017,""]] debe retornar 57.5', () => {
  assert.equal(window.computeMedian([[1960,""],[1987,21],[1899,98],[2002,45],[2010,70],[2017,""]]), 57.5);
});
});

// Para comprobar la función Filer
describe('filterData', () => {
  //que voy a testear, se puede hacer para saber si es función, para saber si me devulve lo que quiero
it('debería ser una función',() => {
  // se prueba que es una función
  assert.deepEqual(typeof filterData, "function");
});

//test en el cual se prueba la función filtrar hombre/mujer
describe ('filterData',() => {
const data = ['Transición a la escuela secundaria, mujeres (%)',
'Inscripción escolar, nivel secundario, mujeres (% neto)',
'Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)',
'Desempleo, varones jóvenes (% de participación en la fuerza laboral de varones de 15 a 24 años) (estimación nacional)'];

it('deberia retornar el objeto hombre al filtrar', () => { 
  assert.deepEqual(window.filerData(data, "Hombre"),['Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)',
  'Desempleo, varones jóvenes (% de participación en la fuerza laboral de varones de 15 a 24 años) (estimación nacional)']
  );

});
it ('deberia retornar el objeto women al filtrar', () => {
  assert.deepEqual(window.filterData(data,"Mujer"),['Transición a la escuela secundaria, mujeres (%)',
  'Inscripción escolar, nivel secundario, mujeres (% neto)'])
});
});
//test en el cual se prueba la función ordenar
describe("sortData", () => {
  it('deberia ser una función', () => {
    assert.deepEqual(typeof sortData, "fuction");
  })
});










});





});