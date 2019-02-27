/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;
//funcion en la cual entra un objeto y sale un array con los elementos del objeto
const GenerateList = (obj)  =>{
  let Arroutput=[];
  for (prop in obj){
      Arroutput.push(prop);
  }
  return Arroutput;
};
//funcion en la cual entra un objeto y una propiedad de ese objeto o elemento y devueve un array con los valores de la propiedad para cada elemento del objeto
const GenerateSubList = (obj,subprop)  =>{
  let Arroutput=[];
  for (prop in obj){
    Arroutput.push(obj[prop][subprop]);
    
  };
  return Arroutput;
  
};
//funcion para filtrar indicadores para mujeres, esta se crea para poder ser usada en el metodo filter
const filterForWomen = (indicator) => {
  return !(indicator.indexOf("varones")>=0 && indicator.indexOf("mujeres")<=0 );
}
//funcion para filtrar indicadores para hombres
const filterForMen = (indicator) =>{
  if (indicator.indexOf("mujeres")>=0 && indicator.indexOf("varones")<=0 ){return false;}
  else if(indicator.indexOf("Mujeres")>=0){return false;}
  else if(indicator.indexOf("femenino")>=0){return false;}
  else { return true;}
}



