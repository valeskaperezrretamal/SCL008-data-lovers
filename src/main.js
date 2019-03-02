//variables globales

let actualCountry;//el pais seleccionado por el usuario
let actualGender;//sexo seleccionado por el usuario 
let actualIndicator;//el indicador seleccionado por el usuario



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



//genera el codigo html para llenar la tabla con la data, llena la tabla con los datos de data (año e indicador)
const fillTable =(arr)=>{
    let htmlCode=   "<tr>"+
                        "<th>Año</th>"+
                        "<th>Indicador</th>"+
                    "</tr>";
    arr.forEach(element => {
        htmlCode=htmlCode+ "<tr>"+
        "<td>"+element[0]+"</td>"

        if(element[1]===""){
        htmlCode=htmlCode+  "<td>"+"-"+"</td>"+
            "</tr>";
        }
        else {
        htmlCode=htmlCode+  "<td>"+element[1]+"</td>"+
            "</tr>";
        } 
    });
    document.getElementById("tableIndicator").innerHTML=htmlCode;      
}

//genera codigo para agregar Stats
const fillStats=(arr)=>{
    document.getElementById("idStats").innerHTML= "<p> <strong>Promedio: </strong>"+computeMean(arr)+"</p>"+
                                                    "<p> <strong>Mediana: </strong>"+computeMedian(arr)+"</p>"+
                                                    "<p> <strong>Maximo: </strong>"+computeMax(arr)+"</p>"+
                                                    "<p> <strong>Minimo: </strong>"+computeMin(arr)+"</p>"; 
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
    let actualIndexIndicator=updateIndexIndicator(actualIndicator);
    let arrayData=updateIndicatorData(actualCountry,actualIndexIndicator);
    fillTable(arrayData);//dibuja tabla
    fillStats(arrayData); //agrega estadisticas
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
  






