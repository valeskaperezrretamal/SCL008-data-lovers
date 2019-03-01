//variables

let actualCountry;//el pais seleccionado por el usuario
let actualGender;//sexo seleccionado por el usuario 
let actualIndicator;//el indicador seleccionado por el usuario
let actualIndexIndicator;//para guardar el indice correspondiente al indicador seleccionado
let actualIndicatorData;// Data del indicador que seleccionó el usuario
let Indicators; //para llenar el <select> de indicadores, se filtra y ordena
let allIndicators;//es el listado de indicadores puro sin filtrar ni ordenar
//Funciones


// función que llena el <selec> identificado con el id indicado como parametro, con los elementos del array list

const fillList = (list,id) =>{
    let htmlcodes="";
    list.forEach(element => {
        htmlcodes = htmlcodes+ "<option id="+ element + ">" + element+ "</option>";
    })

    document.getElementById(id).innerHTML = htmlcodes;
    }
    //función para actualizar los valores de la selección que el usuario seleccionó, se gurda lo seleccionado en estas variables
const updateSelection=()=>{
    actualCountry = selectCountry.options[selectCountry.selectedIndex].value;
    actualGender = selectGender.options[selectGender.selectedIndex].value;
    try {actualIndicator = selectIndicators.options[selectIndicators.selectedIndex].value;}
    catch {}
}
// Actualiza el listado de indicadores de acuerdo a la selección del usuario 
const updateIndicators=()=>{
    Indicators = GenerateSubList(WORLDBANK[actualCountry].indicators,"indicatorName");
    Indicators.sort();
    if(actualGender==="Hombre"){Indicators=Indicators.filter(filterForMen);}
    if(actualGender==="Mujer"){Indicators=Indicators.filter(filterForWomen);}
    fillList(Indicators,"selectIndicators");
}
//actualiza el valor del indice del indicador de acuerdo al indicador seleccionado por el usuario
const updateIndexIndicator=()=>{
    allIndicators=GenerateSubList(WORLDBANK[actualCountry].indicators,"indicatorName");
    actualIndexIndicator=allIndicators.indexOf(actualIndicator);
}
//actualiza la data de acuerdo al indice seleccionado por el usauario
const updateIndicatorData=()=>{
    actualIndicatorData=WORLDBANK[actualCountry].indicators[actualIndexIndicator].data;
}
//genera el codigo html para llenar la tabla con la data, llena la tabla con los datos de data (año e indicador)
const fillTable =(data)=>{
    let htmlCode=   "<tr>"+
                        "<th>Año</th>"+
                        "<th>Indicador</th>"+
                    "</tr>";
    for (element in data){
        htmlCode=htmlCode+ "<tr>"+
                                "<td>"+element+"</td>"

        if(data[element]===""){
            htmlCode=htmlCode+  "<td>"+"-"+"</td>"+
                            "</tr>";
        }
        else {
            htmlCode=htmlCode+  "<td>"+data[element]+"</td>"+
                            "</tr>";
        }
        

    }
    document.getElementById("tableIndicator").innerHTML=htmlCode;      
}


//-----------------------
// define variables para os objetos de html
const selectCountry=document.getElementById("selectCountry");
const selectGender=document.getElementById("selectGender");
const selectIndicators=document.getElementById("selectIndicators");
selectCountry.addEventListener("click", ()=>{
    updateSelection();//actualiza las variables que guarda la selección del usuario
    updateIndicators(); //actualiza el listado de indicadores de la etiqueta selec a partir de las variables que guardan la selección del usuario
    document.getElementById("selectIndicators").style.display = "block"; // hace visible el select de indicadores

})
//lo mismo de country pero con la selección de genero
selectGender.addEventListener("click", ()=>{
    updateSelection();
    updateIndicators();
    document.getElementById("selectIndicators").style.display = "block";   
})
selectIndicators.addEventListener("click", ()=>{
    updateSelection();
    updateIndexIndicator();
    updateIndicatorData();
    fillTable(actualIndicatorData);
})

//Funcion de inicio
const start=()=> {

    document.getElementById("index").style.display="block";
    document.getElementById("definition").style.display="block";
    document.getElementById("indicators").style.display="none";
  }


//Funcion para llamar al div de indicadores 
const enterIndicators=()=> {

    document.getElementById("index").style.display="none";
    document.getElementById("definition").style.display="none";
    document.getElementById("indicators").style.display="block";
  }

//Funcion para llamar al div de incio y definición
const enterInitialPage=()=> {

    document.getElementById("index").style.display="block";
    document.getElementById("definition").style.display="block";
    document.getElementById("indicators").style.display="none";
  }  
  





  window.onload= start
  






