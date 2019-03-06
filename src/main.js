//variables globales

window.actualCountry;//el pais seleccionado por el usuario
let actualGender;//sexo seleccionado por el usuario 
let actualIndicator;//el indicador seleccionado por el usuario
let Indicators;

// define variables para los objetos de html
            //listados
const selectCountry=document.getElementById("selectCountry");
const selectGender=document.getElementById("selectGender");
const selectIndicators=document.getElementById("selectIndicators");

             //botones
const navIndex=document.getElementById("navIndex");
const navDefinition=document.getElementById("navDefinition");
const navIndicators=document.getElementById("navIndicators");
const btOrderListAsc =document.getElementById("btOrderListAsc");
const btOrderListDesc =document.getElementById("btOrderListDesc");
const nextButton=document.getElementById("next-button");
const indicatorButton=document.getElementById("indicator-button");
const statsButton=document.getElementById("average-button")
const btOrderTableAsc=document.getElementById("btOrderTableAsc");
const btOrderTableDesc=document.getElementById("btOrderTableDesc")


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
    try {actualIndicator = selectIndicators.options[selectIndicators.selectedIndex].value;}
    catch {;}
}

// Actualiza el listado de indicadores de acuerdo a la selección del usuario 
// Actualiza el listado de indicadores de acuerdo a la selección de país y genero 
const updateIndicators=()=>{
    Indicators = GenerateSubList(WORLDBANK[actualCountry].indicators,"indicatorName");
    Indicators.sort();
    if(actualGender==="Hombre"){Indicators=Indicators.filter(filterForMen);}
    if(actualGender==="Mujer"){Indicators=Indicators.filter(filterForWomen);}
    fillList(Indicators,"selectIndicators");
}
//Genera el codigo html para llenar la tabla con la data, llena la tabla con los datos de data (año e indicador)
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

<<<<<<< HEAD

//Genera codigo html para agregar Stats
const fillStats=(arr)=>{
    document.getElementById("idStats").innerHTML= "<p> <strong>Promedio: </strong>"+computeMean(arr)+"</p>" +
                                                   "<p> <strong>Mediana: </strong>"+computeMedian(arr)+"</p>"+
                                                     "<p> <strong>Maximo: </strong>"+computeMax(arr)+"</p>"+
                                                    "<p> <strong>Minimo: </strong>"+computeMin(arr)+"</p>"; 
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
navIndex.addEventListener("click", ()=>{
    showIndex();
})
//funcionalidad a boton definition del menu
navDefinition.addEventListener("click", ()=>{
    showDefinition();
})

//funcionalidad a boton indicators del menu
navIndicators.addEventListener("click", ()=>{
    showIndicators();
})

//funcionalidad a ordenar listado de indicadores
btOrderListDesc.addEventListener("click", ()=>{
    Indicators = GenerateSubList(WORLDBANK[actualCountry].indicators,"indicatorName");
    Indicators=sortData(Indicators, 0, "desc");
    Indicators=filterData(Indicators,actualGender);
    fillList(Indicators,"selectIndicators");
})
btOrderListAsc.addEventListener("click", ()=>{
    Indicators = GenerateSubList(WORLDBANK[actualCountry].indicators,"indicatorName");
    Indicators=sortData(Indicators, 0, "asc");
    Indicators=filterData(Indicators,actualGender);
    fillList(Indicators,"selectIndicators");
})

//Conecta el botón "siguiente" para que muestre la lista de indicadores filtrada
nextButton.addEventListener("click", ()=> {   
    updateSelection();//actualiza las variables que guarda la selección del usuario
    updateIndicators(); //actualiza el listado de indicadores de la etiqueta selec a partir de las variables que guardan la selección del usuario
    document.getElementById("idStats").innerHTML=""; //elimina calculos anteriores
    showDataScreen();
}) 

//Conecta el botón "ver indicador" para que muestre la tabla del indicador, esconde las primeras pantallas 
indicatorButton.addEventListener("click", ()=> {    
    updateSelection();//actualiza las variables que guarda la selección del usuario
=======
//Conecta el botón A-Z para que ordene
const orderIndicator=document.getElementById("order-button").addEventListener("click",()=> {
     
    organizedIndicators=orderData(Indicators);
    selectIndicators.innerHTML="";

    fillList(organizedIndicators,"selectIndicators")
    })

//Conecta el botón "ver indicador" para que muestre la tabla de los indicadores, esconde las primeras pantallas 
const showIndicatorValue=document.getElementById("indicator-button").addEventListener("click", ()=> {    updateSelection();//actualiza las variables que guarda la selección del usuario
>>>>>>> 4103564ce948705c60f2559b4a16edb3c70a5cf1
    let actualIndexIndicator=updateIndexIndicator(actualIndicator);
    let arrayData=updateIndicatorData(actualCountry,actualIndexIndicator);
    fillTable(arrayData);//dibuja tabla
    showTableScreen();
})

//Conecta el botón "Stats" y muestra el valor
statsButton.addEventListener("click", ()=> {
    updateSelection();//actualiza las variables que guarda la selección del usuario
    let actualIndexIndicator=updateIndexIndicator(actualIndicator);
    let arrayData=updateIndicatorData(actualCountry,actualIndexIndicator);
    fillStats(arrayData);//dibuja tabla
<<<<<<< HEAD
=======
    document.getElementById("showDataScreen").style.display="block" // hace visible el select de indicadores    
    document.getElementById("tableScreen").style.display="block"
    document.getElementById("index").style.display="none";
    document.getElementById("definition").style.display="none";
    document.getElementById("indicators").style.display="none";
})

//Genera codigo para agregar Stats
const fillStats=(arr)=>{
  document.getElementById("idStats").innerHTML= "<p> <strong>Promedio: </strong>"+computeMean(arr)+"</p>"
 }
  //+
    //                                                "<p> <strong>Mediana: </strong>"+computeMedian(arr)+"</p>"+
      //                                              "<p> <strong>Maximo: </strong>"+computeMax(arr)+"</p>"+
        //                                            "<p> <strong>Minimo: </strong>"+computeMin(arr)+"</p>"; 
//

//Empieza manejo de visualizar y ocultar pantallas
//Llama al div de incio y definición y ocultar el de indicadores
const enterInitialPage=()=> {
    document.getElementById("index").style.display="block";
    document.getElementById("definition").style.display="block";
    document.getElementById("indicators").style.display="none";
    document.getElementById("tableScreen").style.display="none";
  }
  
 //Regresa a pantalla de incio 
  const returnToInitialPage=document.getElementById("welcome-page1").addEventListener("click",()=> {
    document.getElementById("index").style.display="block";
    document.getElementById("definition").style.display="block";
    document.getElementById("indicators").style.display="none";
    document.getElementById("tableScreen").style.display="none";
  })
 
  //Regresar a segunda pantalla
  const returnToSecondPage=document.getElementById("welcome-page2").addEventListener("click",()=> {
    document.getElementById("index").style.display="block";
    document.getElementById("definition").style.display="block";
    document.getElementById("indicators").style.display="none";
    document.getElementById("tableScreen").style.display="none";
  }) 
  //Llama al div de indicadores y ocultar el de inicio y definición
  const enterIndicators=document.getElementById("indicators-pages").addEventListener("click", () =>{
    document.getElementById("index").style.display="none";
    document.getElementById("definition").style.display="none";
    document.getElementById("indicators").style.display="block";
    document.getElementById("showDataScreen").style.display="none";
   
  })


>>>>>>> 4103564ce948705c60f2559b4a16edb3c70a5cf1

})
//funcionalidad a ordenar tabla de indicador
btOrderTableDesc.addEventListener("click", ()=>{
    let actualIndexIndicator=updateIndexIndicator(actualIndicator);
    let arrayData=updateIndicatorData(actualCountry,actualIndexIndicator);
    arrayData=sortData(arrayData, 0, "desc");
    fillTable(arrayData);//dibuja tabla
})
btOrderTableAsc.addEventListener("click", ()=>{
    let actualIndexIndicator=updateIndexIndicator(actualIndicator);
    let arrayData=updateIndicatorData(actualCountry,actualIndexIndicator);
    arrayData=sortData(arrayData, 0, "asc");
    fillTable(arrayData);//dibuja tabla
})








