global.window = global;
global.assert = require('chai').assert;
require('../src/data.js');
require('./data.spec.js');


// probando la función filtrar, para hombre y para mujer
describe('filterForWomen',() => {
  const data = [
    {indicatorName:"Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)"},

    {indicatorName: "Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)"}
  ];
 it('deberia ser una funcion',() => {
    assert.equal(typeof filterForWomen,'function');
  });
 it('Deberia retornar "Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)" para Mujer',() => {
   assert.deepEqual(window.filterForWomen,(data,'Mujer')), ([{indicatorName: "Mujer"}])
 })
});

describe('filterForMen',() => {

  it('deberia ser una funcion',() => {
    assert.equal(typeof filterForMen,'function');
  });
});

// probando la función calcular
//promedio
describe('computeMean',() => {

  it('deberia ser una funcion',() => {
    assert.equal(typeof computeMean,'function');
  });
});
//maximo
describe('computeMax',() => {

  it('deberia ser una funcion',() => {
    assert.equal(typeof computeMax,'function');
  });
});
//minimo
describe('computeMin',() => {

  it('deberia ser una funcion',() => {
    assert.equal(typeof computeMin,'function');
  });
});
//mediana
describe('computeMedian',() => {

  it('deberia ser una funcion',() => {
    assert.equal(typeof computeMedian,'function');
  });
});
// probar la función ordenar
describe('sortData',() => {

  it('deberia ser una funcion',() => {
    assert.equal(typeof sortData,'function');
  });
});