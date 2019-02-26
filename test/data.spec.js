global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('example', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof example, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
})

//Testing para la función filtrar por pais

describe("countryFilter"),() => {
  
  const data =       //creo una constante con poca data por practicidad.
  [
    {
      countryName: "Perú",
      indicatorName: "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
    },
    {
      countryName: "México",
      indicatorName: "Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)",
    },
    {
      countryName:"Brasil",
      indicatorName:"La ley exige igualdad de remuneración para hombres y mujeres por trabajo de igual valor (1=sí; 0=no)",
    },
    {
      countryName: "Chile",
      indicatorName: "Fuerza laboral con educación intermedia (% del total)",
    }
  ]


  it("debería ser una función",() => {
    assert.equal(typeof countryFilter, "function");

  });

  it("debería retornar el objeto Empleo de tiempo parcial, mujeres (% del total de mujeres empleada al filtrar",() => {
    assert.deepEqual(window.countryFilter, (data,"Perú"),  //usamos deepEqual para objetos y arrays ya que sino arroja error (===)
    [{countryName: "Perú", indicatorName:"Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)"}] )  //esta linea porque se pone?
  });

  it("debería retornar el objeto Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años) al filtrar",() => {
    assert.deepEqual(window.countryFilter,(data,"México"),
    [{countryName:"México", indicatorName:"Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)"}])
  });

  it("debería retornar el objeto La ley exige igualdad de remuneración para hombres y mujeres por trabajo de igual valor (1=sí; 0=no) al filtrar", () =>{
    assert.deepEqual(window.countryFilter,(data,"Brasil"),
    [{countryName:"Brasil", indicatorName:"La ley exige igualdad de remuneración para hombres y mujeres por trabajo de igual valor (1=sí; 0=no)"}])
  });

  it("debería retornar el objeto Fuerza laboral con educación intermedia (% del total) al filtrar",() =>{
    assert.deepEqual(window.countryFilter,(data,"Chile"),
    [{countryName:"Chile", indicatorName:"Fuerza laboral con educación intermedia (% del total)"}])
  })

} 
//Termina testing función filtrar por país
