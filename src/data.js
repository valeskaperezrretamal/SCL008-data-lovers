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
  for (let prop in obj){
      Arroutput.push(prop);
  }
  return Arroutput;
};


//funcion en la cual entra un objeto y una propiedad de ese objeto o elemento y devueve un array con los valores de la propiedad para cada elemento del objeto
const GenerateSubList = (obj,subprop)  =>{
  let Arroutput=[];
  for (let prop in obj){
    Arroutput.push(obj[prop][subprop]);    
  }
  return Arroutput;
};
window.GenerateSubList=GenerateSubList;

//convierte data tipo objeto a un array [año,valor indicador]
const dataToArray = (data)=>{
  let arr=[];
  for (let element in data){    
    arr.push([element,data[element]]);
  }
  return arr;
}
window.dataToArray=dataToArray;

//devuelve el indice del indicador
const updateIndexIndicator=(Indicator)=>{
  let allIndicators=GenerateSubList(WORLDBANK[actualCountry].indicators,"indicatorName");
  return allIndicators.indexOf(Indicator);

}
window.updateIndexIndicator=updateIndexIndicator;

//Ordena de Z a A
const orderData = (Indicators) => {
  let orderedArray = Indicators
  orderedArray.sort((a,z) => {

    return z.localeCompare(a)
  }
  
  )
return orderedArray
}


//devuelve la data asociada al indicador y pais como un array
const updateIndicatorData=(country,indexIndicator)=>{
  return dataToArray(WORLDBANK[country].indicators[indexIndicator].data);
}
window.updateIndicatorData=updateIndicatorData;

// calcula promedio de arreglo de datos
const computeMean=(arr)=>{
  let n=0;
  let sum=0;
  for(i=0;i<arr.length;i++){
    if (arr[i][1]!=""){n++;sum+=arr[i][1];}
  }
  return sum/n;
}
window.computeMean=computeMean;

// calcula Maximo de arreglo de datos
const computeMax=(arr)=>{
  let aux="";
  for(i=0;i<arr.length;i++){
    if (arr[i][1]!=""){
      if (aux===""){
        aux=arr[i][1];
      }else if(arr[i][1]>aux){
        aux=arr[i][1];
      }
    }  
  }
  return aux;
}
window.computeMax=computeMax;

// calcula Minimo de arreglo de datos
const computeMin=(arr)=>{
  let aux="";
  for(i=0;i<arr.length;i++){
    if (arr[i][1]!=""){
      if (aux===""){
        aux=arr[i][1];
      }
      else if(arr[i][1]<aux){
        aux=arr[i][1];
      }
    }
  }
  return aux;
}
window.computeMin=computeMin;

// calcula mediana de arreglo de datos
const computeMedian=(arr)=>{
  let newArr=[];
  for(i=0;i<arr.length;i++){
    if (arr[i][1]!=""){newArr.push(arr[i][1]);}
  }
  newArr.sort()
  if(newArr.length%2===1){
    return newArr[(newArr.length-1)/2];}
  else{
    return (newArr[newArr.length/2] + newArr[newArr.length/2])/2;}

}
window.computeMedian=computeMedian;
//data:array
//sortBy: number of column
//sortOrder: "asc" or "desc"
const sortData=(Data, sortBy, sortOrder)=>{
  arrData=Data.slice(0);


  //define funcion de comparacion para sort
  const compare=(a,b)=>{
    if (a[sortBy]>=b[sortBy]){return 1;} else {-1;}
  }
  arrData.sort(compare);
  if (sortOrder==="asc"){return arrData;
  }else if ("desc"){
    return arrData.reverse();
  }
 
}

//data: array
//condition: string ("hombre" o "mujer")
const filterData=(data,condition)=>{
  arr=data.slice(0);
  if(condition==="hombre"){return arr.filter(filterForMen);}
  if(condition==="mujer"){return arr.filter(filterForWomen);}
  
}

//define funcion para filtrar indicadores para mujeres, esta se crea para poder ser usada en el metodo filter
const filterForWomen = (indicator) => {
  return !(indicator.indexOf("varones")>=0 && indicator.indexOf("mujeres")<=0 );
}

//define funcion para filtrar indicadores para hombres, esta se crea para poder ser usada en el metodo filter
const filterForMen = (indicator) =>{
  if (indicator.indexOf("mujeres")>=0 && indicator.indexOf("varones")<=0 ){return false;}
  else if(indicator.indexOf("Mujeres")>=0){return false;}
  else if(indicator.indexOf("femenino")>=0){return false;}
  else { return true;}
}


