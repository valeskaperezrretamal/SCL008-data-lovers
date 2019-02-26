/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

//Inicio función filtrar

const countryFilter = (data,condition) => {
  let indicatorByCountry = data.filter (element => {
    return   element.countryName === condition
  })
   return indicatorByCountry;

} 

window.countryFilter =countryFilter; 

//Termina función filtrar



