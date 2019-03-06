//global.window = global;
//global.assert = require('chai').assert;//
//require('../src/data');//
//nrequire('./data.spec.js');


describe('', () => {
    
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



<<<<<<< HEAD







});


=======
} 
//Termina testing función filtrar por país
describe("orderData"),() => {
  //creo variables pequeñas con data por practicidad

  const inputDesorganized=
  [
    { 'indicatorName': "La ley exige igualdad de remuneración para hombres y mujeres por trabajo de igual valor (1=sí; 0=no)" },
    { 'indicatorName': "Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)"},
    { 'indicatorName': "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)"},
    { 'indicatorName': "Fuerza laboral con educación intermedia (% del total)"}
  ];


  const outputOrganized=    
  [
  { 'indicatorName': "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)" },
  { 'indicatorName': "Fuerza laboral con educación intermedia (% del total)"},
  { 'indicatorName': "Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)"},
  { 'indicatorName':  "La ley exige igualdad de remuneración para hombres y mujeres por trabajo de igual valor (1=sí; 0=no)"}
  ]

}

it("debería ser una función",() =>{
  assert.equal(typeof orderData,"function")
});

it("debería retorna los indicadores ordenados alfábeticamente de A a la Z", () => {
  assert.deepEqual(orderData,outputOrganized)  //usamos deepEqual para objetos y arrays ya que sino arroja error (===)
});
>>>>>>> 4103564ce948705c60f2559b4a16edb3c70a5cf1
