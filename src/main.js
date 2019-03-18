// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.load('current', {packages: ['corechart']});
//variables globales
let actualCountry;//el pais seleccionado por el usuario
let actualGender;//sexo seleccionado por el usuario 
let actualIndicator;//el indicador seleccionado por el usuario

// define variables para los objetos de html
            //listados
const selectCountry=document.getElementById("selectCountry");
const selectGender=document.getElementById("selectGender");
const selectIndicators=document.getElementById("selectIndicators");

            //secciones
const sectIndex=document.getElementById("index");
const sectDefinition=document.getElementById("definition");
const sectIndicators=document.getElementById("indicators");
const sectselectionScreen=document.getElementById("selectionScreen");
const sectShowDataScreen=document.getElementById("showDataScreen");
const sectTableScreen=document.getElementById("tableScreen");

//// funciones

// Función que llena el <selec> identificado con el id indicado como parametro, con los elementos del array list
//Crea la lista desplegable de indicadores
const fillList = (list,id) =>{
    let htmlcodes="";
    list.forEach(element => {
        htmlcodes = htmlcodes+ "<option id="+ element + ">" + element+ "</option>";
    })
    document.getElementById(id).innerHTML = htmlcodes;
    }
    
   
//Actualiza los valores que el usuario seleccionó
const updateSelection=()=>{
    actualCountry = selectCountry.options[selectCountry.selectedIndex].value;
    actualGender = selectGender.options[selectGender.selectedIndex].value;
    try {
        actualIndicator = selectIndicators.options[selectIndicators.selectedIndex].value;
    }
    catch (error) {
        return error;
    }
}
// Actualiza el listado de indicadores de acuerdo a la selección del usuario 
// Actualiza el listado de indicadores de acuerdo a la selección de país y genero 
const updateIndicators=()=>{
    let Indicators = window.GenerateSubList(window.WORLDBANK[actualCountry].indicators,"indicatorName");
    Indicators.sort();
    Indicators=window.filterData(Indicators,actualGender);

    fillList(Indicators,"selectIndicators");
}
//Genera el codigo html para llenar la tabla con la data, llena la tabla con los datos de data (año e indicador)
const fillTable =(arr)=>{
    let htmlCode=   "<tr>"+ // agregar fila
                        "<th>Año</th>"+ //agregar encabezado de columna
                        "<th>Indicador</th>"+ // agrega encabezado columna 
                    "</tr>";
    arr.forEach(element => {
        htmlCode=htmlCode+ "<tr>"+ //agrega nueva fila
        "<td>"+element[0]+"</td>" //agrego año 

        if(element[1]===""){ // agrego indicador, si no hay info si agrega "-"
        htmlCode=htmlCode+  "<td>"+"-"+"</td>"+
            "</tr>";
        }
        else {
        htmlCode=htmlCode+  "<td>"+element[1]+"</td>"+ //agregar indicador
            "</tr>";
        } 
    });
    document.getElementById("tableIndicator").innerHTML=htmlCode;      
}


//Genera codigo html para agregar calculos
const fillStats=(arr)=>{
    document.getElementById("idStats").innerHTML= "<p> <strong>Promedio: </strong>"+window.computeMean(arr)+"</p>" +
                                                   "<p> <strong>Mediana: </strong>"+window.computeMedian(arr)+"</p>"+
                                                     "<p> <strong>Maximo: </strong>"+window.computeMax(arr)+"</p>"+
                                                    "<p> <strong>Minimo: </strong>"+window.computeMin(arr)+"</p>"; 
}

//// navegacion por pagina

const showIndex=()=>{

    sectIndex.style.display = "block"; 
    sectDefinition.style.display ="none";
    sectIndicators.style.display="none";
    sectselectionScreen.style.display="none";
    sectShowDataScreen.style.display="none";
    sectTableScreen.style.display="none";
    
}
const showDefinition=()=>{

    sectIndex.style.display = "none";
    sectDefinition.style.display ="block"; 
    sectIndicators.style.display="none";
    sectselectionScreen.style.display="none";
    sectShowDataScreen.style.display="none";
    sectTableScreen.style.display="none";
    
}

const showIndicators=()=>{
    sectIndex.style.display="none";
    sectDefinition.style.display="none";
    sectIndicators.style.display = "block"; 
    sectselectionScreen.style.display = "block"; 
    sectShowDataScreen.style.display="none";
    sectTableScreen.style.display="none";
}

const showDataScreen=()=>{
    sectIndex.style.display="none";
    sectDefinition.style.display="none";
    sectIndicators.style.display = "block";
    sectselectionScreen.style.display = "none";
    sectShowDataScreen.style.display = "block";
    sectTableScreen.style.display="none";
}
const showTableScreen=()=>{

    sectIndex.style.display="none";
    sectDefinition.style.display="none";
    sectIndicators.style.display = "block";
    sectselectionScreen.style.display="none";
    sectShowDataScreen.style.display="none";
    sectTableScreen.style.display = "block";
}

//addeventlisteners

//funcionalidad a boton index del menu
document.getElementById("navIndex").addEventListener("click", ()=>{ 
    showIndex();
})
//funcionalidad a boton definition del menu
document.getElementById("navDefinition").addEventListener("click", ()=>{
    showDefinition();
})

//funcionalidad a boton indicators del menu
document.getElementById("navIndicators").addEventListener("click", ()=>{
    showIndicators();
})

//funcionalidad a ordenar listado de indicadores
document.getElementById("btOrderListDesc").addEventListener("click", ()=>{
    let Indicators =window.GenerateSubList(window.WORLDBANK[actualCountry].indicators,"indicatorName");
    Indicators=window.filterData(Indicators,actualGender);
    Indicators.sort();
    fillList(Indicators,"selectIndicators");
})
//boton que ordena lista 
document.getElementById("btOrderListAsc").addEventListener("click", ()=>{
    let Indicators = window.GenerateSubList(window.WORLDBANK[actualCountry].indicators,"indicatorName");
    Indicators=window.filterData(Indicators,actualGender);
    Indicators.sort().reverse();
    fillList(Indicators,"selectIndicators");
})

//Conecta el botón "siguiente" para que muestre la lista de indicadores filtrada
document.getElementById("next-button").addEventListener("click", ()=> {   
    updateSelection();//actualiza las variables que guarda la selección del usuario
    updateIndicators(); //actualiza el listado de indicadores de la etiqueta selec a partir de las variables que guardan la selección del usuario
    document.getElementById("idStats").innerHTML=""; //elimina calculos anteriores
    showDataScreen();
}) 

//Conecta el botón "ver indicador" para que muestre la tabla del indicador, esconde las primeras pantallas 
document.getElementById("indicator-button").addEventListener("click", ()=> {    
    updateSelection();//actualiza las variables que guarda la selección del usuario
    let actualIndexIndicator=window.updateIndexIndicator(actualIndicator,actualCountry);//obtener el indice del indicador
    let arrayData=window.updateIndicatorData(actualCountry,actualIndexIndicator);//guardar la data en un array (para acceder a la data necesito en pais y el indice del indicador)
    showChart(arrayData, actualIndicator, "año" ,"Indicador");
    fillTable(arrayData);//dibuja tabla
    showTableScreen();
})

//Conecta el botón "Stats" y muestra el valor
document.getElementById("average-button").addEventListener("click", ()=> {
    updateSelection();//actualiza las variables que guarda la selección del usuario
    let actualIndexIndicator=window.updateIndexIndicator(actualIndicator,actualCountry);
    let arrayData=window.updateIndicatorData(actualCountry,actualIndexIndicator);
    fillStats(arrayData);//muestra los calculos de estadisticas

})
//funcionalidad a ordenar tabla de indicador
document.getElementById("btOrderTableDesc").addEventListener("click", ()=>{
    let actualIndexIndicator=window.updateIndexIndicator(actualIndicator,actualCountry); //obtiene indice 
    let arrayData=window.updateIndicatorData(actualCountry,actualIndexIndicator);//obtener data convertido en array
    arrayData=window.sortData(arrayData, 0, "desc");//ordena data descendente 
    fillTable(arrayData);//dibuja tabla
})
document.getElementById("btOrderTableAsc").addEventListener("click", ()=>{
    let actualIndexIndicator=window.updateIndexIndicator(actualIndicator,actualCountry);
    let arrayData=window.updateIndicatorData(actualCountry,actualIndexIndicator);
    arrayData=window.sortData(arrayData, 0, "asc");//ordena data ascendente
    fillTable(arrayData);//dibuja tabla
})

let showChart=(array, title, xTitle, yTitle)=>{
    //quitar datos no validos
    let arrayMod=[];
    array.forEach(element =>{
        if (element[1]!=""){arrayMod.push(element);}
    });
    arrayMod.unshift([xTitle,yTitle]);
    arrayMod.forEach(element=>{
        console.log(element[0]+" , "+element[1]);});
    google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable(arrayMod);
  var options = {
    title: title,
    hAxis: {title: xTitle},
    vAxis: {title: yTitle},
    legend: 'none',};
  var chart = new google.visualization.ScatterChart(document.getElementById('chart'));
  chart.draw(data, options);
}
}